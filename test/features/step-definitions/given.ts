import { Given } from "@wdio/cucumber-framework";
import chai from "chai"; // assertion library

Given(/^Login inventory web app$/, async function(){
    //1. Launch Browser    
    await browser.url("https://www.saucedemo.com"); // can be empty becouse base URL is set
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    //await browser.maximizeWindow();
    
    //2. login to inventory app  
    await $(`#user-name`).setValue('standard_user')
    await $(`#password`).setValue('secret_sauce')
    await $(`#login-button`).click()

})