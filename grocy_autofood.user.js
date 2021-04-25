// ==UserScript==
// @name     Grocy Autofood
// @namespace     https://github.com/trevor87/grocy_autofood
// @description   Script to automatically fill grocy product data via openfoodfacts
// @version  0.1
// @include       */product/new?flow=InplaceNewProductWithBarcode&barcode=*
// ==/UserScript==

const language = document.documentElement.lang;

const grocyUrl = window.location.href;
let barcode = grocyUrl.match(/&barcode=(\d+)/)[1];

let requestURL = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const foodFacts = request.response['product'];
  
  let grocyValues = new Object();
  
  grocyValues['name'] = foodFacts['brands'] + ' ' + foodFacts['product_name_' + language];
  // "Description is not working properly as it is not a normal text field (somehow works on reload)
  //grocyValues['description'] = foodFacts['generic_name_' + language];
  //Total calories for whole paket (often not correct, e.g. if it is something that needs to be prepared)
  grocyValues['calories'] = foodFacts['product_quantity'] / foodFacts['serving_quantity'] * foodFacts['nutriments']['energy-kcal_serving'];
  grocyValues['tare_weight'] = foodFacts['product_quantity'];
  
  for(var key in grocyValues) {
    document.getElementById(key).value=grocyValues[key];
  }
}


