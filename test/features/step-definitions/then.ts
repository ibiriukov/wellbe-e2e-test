import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (numberOfProducts) {
  if (!numberOfProducts) throw Error(`Invalid number: ${numberOfProducts}`);

  let eleArr = await $$(`.inventory_item_name`); // array of objects
  chai.expect(eleArr.length).to.equal(parseInt(numberOfProducts));
});
/**
 * 1. Get Price List
 * 2. Convert String to number
 * 3. Assert if there are any values <= 0
 *
 */
Then(/^Validate all products have valid price$/, async function () {
  //1. Get Price List
  let eleArr = await $$(`.inventory_item_price`);

  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceString = await eleArr[i].getText();
    priceStrArr.push(priceString);
  }
  console.log(`>>Price with $: ${priceStrArr}`);

  //2. Convert String to number
  let priceNumberArr = await priceStrArr.map((ele) => +ele.replace("$", "")); // map will access every single ele ,, unary + convert string to number as it is
  console.log(`>> Price is: ${priceNumberArr}`);

  //3. Assert if there are any values <= 0
  let invalidPriceArr = priceNumberArr.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});
