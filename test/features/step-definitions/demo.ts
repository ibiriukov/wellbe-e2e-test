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