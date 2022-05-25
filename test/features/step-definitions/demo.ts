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
  await browser.url("/tables"); // can be empty becouse base URL is set
  await browser.setTimeout({implicit: 15000, pageLoad: 10000})
  await browser.maximizeWindow()

})

When(/^Perform Web Interactions$/, async function(){
 
/**
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
 */
   //2. Dropdown********************************************************

   //2.2 Assert default option is selected
   //let ele = await $('//select/option[@selected="selected"]')
   //let val = await ele.getText()
   //chai.expect(val).to.equal("Please select an option")
  // await browser.pause(3000)
   
  //2.2 Select specific option by attribute, text , index
  // let ddEle = await $('#dropdown')
            //await ddEle.selectByVisibleText("Option 2")
   //await ddEle.selectByAttribute("value", "2")
   
   //2.3 Get a list of options
   //let eleArr = await $$("//select/option")    //use double $$ for list of things ot array 
   //let arr = []
   //for (let i =0; i < eleArr.length; i++){
   //let ele = eleArr[i]
   //let val = await ele.getText()
   //arr.push(val)
   //console.log(val)                   //it is possible to compare every Array element to my array to make sure it matches

   //}
   //console.log(`>> Options of the Array: ${arr} `);
   //await browser.pause(3000)

   //3. Checkboxes***********************************************************

   let eleArr = await $$(`//form[@id="checkboxes"]/input`)  // multiple items
      for (let i=0; i<eleArr.length; i++){
        let ele = eleArr[i]
        if (!await ele.isSelected()){ //not slected 
           await ele.click()
        } 

      }

     //let ele = await $(`//form[@id="checkboxes"]/input[2]`)
     //let isChecked = await ele.isSelected() //true or false
     //chai.expect(isChecked).to.be.true  //chainable asertions 
     //let ele = await $(`//form[@id="checkboxes"]/input[1]`)
   
   //if(!await ele.isSelected()){ // if not selected
   //  await ele.click()//base on value we make conditional call (TRUE")
   //}

   
   //await ele.click()
   //await browser.pause(3000)

   
   //4. Handling Windows************************************************************
   
   //Opemn mltiple windows and getting title of the window where control is
 /** 
   await $(`=Click Here`).click()
   await $(`=Elemental Selenium`).click()
   let currentWinTitle = await browser.getTitle()
   let parentWinHandle = await browser.getWindowHandle() // just one handle!!!!!!!!
   console.log(`currentWinTitle >>> ${currentWinTitle}`) 

   //Switch to specific window

   let winHandles = await browser.getWindowHandles() //array of strings
   for (let i=0; 0<winHandles.length; i++){
     console.log(`Win handle >>> ${winHandles[i]}`)
     await browser.switchToWindow(winHandles[i])
     currentWinTitle = await browser.getTitle()
     if (currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
       await browser.switchToWindow(winHandles[i])
       let headerTxtEle = await $(`<h1>`).getText()
       console.log(`headerTxtEle >>> ${headerTxtEle}`)
       //rest of the actions go here
       break // break the loop
     }
   }

   //Switch back to the parent window

   await browser.switchToWindow(parentWinHandle)
   let parrentWinTxt = await $(`<h3>`).getText()
   console.log(`parrentWinTxt >>> ${parrentWinTxt}`)
    //rest of the actions go here
*/

   // 5. Handling Alerts************************************************************************
   
   // specify https://choice:watermelon1!@choicepath.green/provider/admin?locale=en in the Base URL; leave it empty here

   //Confirm Alert
  // await $(`button=Click for JS Alert`).click()
   //if(await browser.isAlertOpen()){ //if it is, we start interact with it
   //   await browser.acceptAlert()
  // }

  
  // 6. File Upload  ************************************************************************
  //console.log(process.cwd()) // print current working directory
  
 // await $(`#file-upload`).addValue(`${process.cwd()}/data/file-upload/dummy.txt`) // set the value of input element
 // await await $(`#file-submit`).click()

  // 7. Frames *******************************************************************************

   //await $(`=iFrame`).click()
   //let ele = await $(`#mce_0_ifr`) 
   //await browser.switchToFrame(ele)
   // .... from this point we can interact with frame

  // await $(`#tinymce`).setValue("My text") // I targeted <body> ele instead of <p>   addValue will append content
   //await browser.switchToParentFrame()
   //await browser.pause(3000)

   // 8. Keys    *************************************************************************************

  //  await $(`=iFrame`).click()
  //  let ele = await $(`#mce_0_ifr`) 
  //  await browser.switchToFrame(ele)
   
  //  await $(`#tinymce`).click()
  //  await browser.keys(['Control', 'a']) // capital A does not work
  //  await browser.pause(1000)
  //  await browser.keys("Delete")

  //  await $(`#tinymce`).addValue("My text")
  //  await browser.switchToParentFrame()

  // 9. Scrolling      ************************************************************************************


  //  await $('span=Most wished for in Video Games').scrollIntoView(false)
   
 
  //10. Tables 
  //Check number of rows and columns
   let rowCount  = await $$(`//table[@id="table1"]/tbody/tr`).length
   chai.expect(rowCount).to.equal(4)
   console.log(`>> number of rows: ${rowCount}`)

   let colCount  = await $$(`//table[@id="table1"]/thead/tr/th`).length
   chai.expect(colCount).to.equal(6)
   console.log(`>> number of columns: ${colCount}`)

   //Get Table data *********************************************************************** 

  //  let arr = []
  //  for (let i =0; i<rowCount; i++){
  //   let personObj = {
  //     lastname: "",
  //     firsname: "",
  //     email: "",
  //     due: "",
  //     web: ""
  //   }
  //    for(let j=0; j<colCount; j++){
  //      let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
  //      console.log(`>> Cell value: ${cellVal}`)
  //      if (j===0)personObj.lastname = cellVal
  //      if (j===1)personObj.firsname = cellVal
  //      if (j===2)personObj.email = cellVal
  //      if (j===3)personObj.due = cellVal
  //      if (j===4)personObj.web = cellVal
  //    }
  //    arr.push(personObj)
  //  }
  // console.log(`>> Array of objects: ${JSON.stringify(arr)}`)

  // get single row based on condiotion *********************************************************************** 
    // let arr = []
    //  for (let i =0; i<rowCount; i++){
    //   let personObj = {
    //     lastname: "",
    //     firsname: "",
    //     email: "",
    //     due: "",
    //     web: ""
    //   }
    //    for(let j=0; j<colCount; j++){
    //      let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
        
    //      let firstName = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${2}]`).getText() 
    //      if (firstName === "Jason"){
    //       if (j===0)personObj.lastname = cellVal
    //       if (j===1)personObj.firsname = cellVal
    //       if (j===2)personObj.email = cellVal
    //       if (j===3)personObj.due = cellVal
    //       if (j===4)personObj.web = cellVal
    //      }
      
    //    }
    //    if(personObj.firsname){ // if value is NOT folsy it will be pushed
    //    arr.push(personObj) 
    //    }
    //  }
    // console.log(`>> Array of objects: ${JSON.stringify(arr)}`)
  
  // get single column based on condiotion *********************************************************************** 
    // let arr = []
    // for (let i =0; i<rowCount; i++){
    //   let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[4]`).getText()
    //   arr.push(cellVal)
    // }
    // console.log(`>> single column value: ${arr}`)
  
  // get single cell based on condiotion *********************************************************************** 
   let arr = [];
   for (let i = 0; i < rowCount; i++) {
   
       //let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j+1}]`).getText();
       let price = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
       let firstName = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
       if(+(price.replace("$", "")) > 50 ){ // unary + makes string numeric
       arr.push(firstName)
       }
     
   }
   console.log(`>> single cell value: ${arr}`);
   console.log(`browser is: ${JSON.stringify(browser)}`)
   
  await browser.pause(3000)


})