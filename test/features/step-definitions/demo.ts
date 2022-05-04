import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> SearchItem: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> ExpectedURL: ${expectedURL}`);
  let url = await browser.getUrl()
  chai.expect(url).to.equal(expectedURL)
});

//WEB interactions
Given(/^A web page is opened$/, async function(){
  await browser.url("/inputs"); // can be empty becouse base URL is set
  await browser.setTimeout({implicit: 15000, pageLoad: 10000})
  await browser.maximizeWindow()

})

When(/^Perform Web Interactions$/, async function(){
 // 1. Input box

   let strNum = "123";
   let ele = await $('//input[@type="number"]')
   //ele.addValue --- will clear the field first
   await ele.scrollIntoView()
   await ele.click()
   //await ele.setValue(strNum)
   
   for (let i =0; i < strNum.length; i++){
     let charStr = strNum.charAt(i)
     await browser.pause(1000)
     await browser.keys(charStr)

   }

   await browser.pause(3000)


})