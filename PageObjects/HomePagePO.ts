var { element, by, ExpectedConditions } = require("protractor");

function HomePagePO()
{
    this.userName=element(by.xpath("//input[@placeholder='Username']"));
    this.passWord= element(by.xpath("//input[@placeholder='Password']"));
    
    this.btnSubmit=element(by.css("button[type='submit']"));
    this.title=element(by.xpath("//h2[text()='Multi-Factor Authentication']"));
    

    this.LoginToApplication=function(username,password)
    {
        this.userName.sendKeys(username);
        this.passWord.sendKeys(password);
        this.btnSubmit.click();

    }
   
    this.VerifyTitle = function()
    {
        this.title.getText().then(function (text) {
            console.log(text);
          })     
    }


}

module.exports=new HomePagePO();