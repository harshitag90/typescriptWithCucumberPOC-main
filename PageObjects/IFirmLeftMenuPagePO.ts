//import { Console } from "console";

var { element, by, ExpectedConditions } = require("protractor");

function iFirmLeftMenuPagePO()
{
    this.leftMenuSections=element.all(by.xpath("//ul//div[@class='innerSidebarBox']/a/span"));
    //this.leftMenuSection=element(by.xpath("//a[@href='/#/fe/team_directory-view?id=DB']"));
    this.pageTitle= element(by.xpath("//h4[@class='pageHeading']"));
  
   
    this.NavigateToMenuSection = function()
    {          
        this.leftMenuSection.click();
    }
   
    this.ClickOnEachMenu = function()
    {
        let tabCount = this.leftMenuSections.count();
        for (let i = 0; i < tabCount; i++) 
        {
           this.leftMenuSections.get(i).click();
           console.log("tabCount", tabCount);
         console.log("click successful", i);
        }
    }
   
    this.VerifyPageTitle = function()
    {
        this.pageTitle.getText().then(function (text) {
            console.log(text);
          })     
    }
    
}


module.exports=new iFirmLeftMenuPagePO();
