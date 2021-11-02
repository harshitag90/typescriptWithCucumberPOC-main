var { browser, element, by, ExpectedConditions } = require("protractor");

function IFirmVersionPagePO()
{
    this.wkImg=element(by.xpath("//img[@src='/3/assets/images/WK LOGO thumb.png']"));
    this.feVersion= element(by.xpath("//div[@id='feVersion']"));
    this.closeBtn= element(by.xpath("//div[@aria-describedby='aboutDialog']//button[@title='Close']"));
    

    this.ClickOnWKImage=function()
    {
        this.wkImg.click();
       

    }
   
    this.VerifyVersion = function()
    {
      
        this.feVersion.getText().then(function (text) {
            console.log('CCH IFirm Version is: ',text);
          })
        
    }
this.CloseDialog = function()
{
    this.closeBtn.click()
    console.log('Successfully closed CCH IFirm version dialog popup');
}

}

module.exports=new IFirmVersionPagePO();