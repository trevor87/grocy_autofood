# grocy_autofood
Greasemonkey-script to automatically fill grocy product data via openfoodfacts (only tested with firefox)

## Usage

1. Install [Greasemonkey](https://addons.mozilla.org/en/firefox/addon/greasemonkey/)
2. Install the script by clicking the monkey symbol in firefox and then choose "New user script"
3. In the new window copy the contents of grocy_autofood.user.js 
4. In grocy: Go to "Purchase" and then add a unknown Barcode in the "Product" field and press enter
5. Choose "Add as new product and prefill barcode"

Now the script should at least prefill name, calories and weight of the product. There is way more information in that database (e.g. images) but I have not yet managed to make use of that.
