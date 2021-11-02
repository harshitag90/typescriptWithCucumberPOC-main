var { element, by, ExpectedConditions } = require("protractor");

function iFirmLeftMenuPagePO()
{
    
    this.leftMenuSection=element(by.xpath("//a[@href='/#/fe/team_directory-view?id=DB']"));
    this.pageTitle= element(by.xpath("//h4[@class='pageHeading']"));
  
   
    this.NavigateToMenuSection = function()
    {          
        this.leftMenuSection.click();
    }
   
   
    this.VerifyPageTitle = function()
    {
        this.pageTitle.getText().then(function (text) {
            console.log(text);
          })     
    }
    
}


module.exports=new iFirmLeftMenuPagePO();
