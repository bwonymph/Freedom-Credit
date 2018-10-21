var request = require('request');


function createCard(){
	create_card = {
	  "start_date": "2018-10-20",
	  "name": "Freedom Credit Card",
	  "config": {
	    "fulfillment": {
	      "payment_instrument":"VIRTUAL_PAN"
	     },
	    "poi": {
	      "ecommerce": true
	    },
	    "card_life_cycle": {
	      "activate_upon_issue": true
	    }
	  }
	}
	request.post(
	    'https://shared-sandbox-api.marqeta.com/v3/',
	    { json: create_card },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);
}



function issueCredit(){
	// Issue monies Marqueta Digital Card
	// Uses Marqueta API to create card

	fill_json = {
	  "user_token": "****",
	  "amount": "1000",
	  "currency_code": "USD",
	  "funding_source_token": "****"
	}

	request.post(
	    'https://shared-sandbox-api.marqeta.com/v3/',
	    { json: fill_json },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);
}

function payment_marqueta(int amount, string description){
	// Send Emergency payment from piggy bank to Marqueta Card
	// Approve payment to be added in the future

	int tax = 0.07; //arbitrary tax
	int total = amount * tax + amount;


	payment_to_marqueta= '{
	  "intent": "sale",
	  "payer": {
	    "payment_method": "paypal"
	  },
	  "transactions": [
	    {
	      "amount": {
	        "total": "30.11",
	        "currency": "USD",
	        "details": {
	          "subtotal": "30.00",
	          "tax": "0.07",
	          "shipping": "0.03",
	          "handling_fee": "1.00",
	          "shipping_discount": "-1.00",
	          "insurance": "0.01"
	        }
	      },
	      "description": "The payment transaction description.",
	      "custom": "EBAY_EMS_90048630024435",
	      "invoice_number": "48787589673",
	      "payment_options": {
	        "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
	      }
	    }
	  ]
	  }
	}'

	request.post(
	    'https://api.sandbox.paypal.com/v1/payments/payment',
	    { json: payment_to_marqueta },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
	);

}




// curl -v -X POST https://api.sandbox.paypal.com/v1/payments/payment \



