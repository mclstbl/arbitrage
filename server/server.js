
if (Meteor.isServer) {

  Rates.config({
    collectionName: 'rates',
    autoRefresh: false
  });

  Meteor.methods({
    'refreshRates': function () { 
      Rates.refreshRates();
    },

    'bellmanFord': function (amount,currency) {
      nodes = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "LTL", "LVL", "MXN"]; //, "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
      result1 = amount;
      cur_amount = amount;
      cur_currency = currency;
      //cur_currency_index = nodes.indexOf(cur_currency);
      max_amount = 0;
      max_index = 0; //index of path

//      nodes = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'LTL', 'LVL', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];
      node_indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];//,21,22,23,24,25,26,27,28,29,30,31,32,33]; // nodes is 34 elements long
      //remove root from nodes, but preserve nodes array
     // othernodes = node_indices;
     // var index = nodes.indexOf(currency);
     // if (index > -1) othernodes.splice(index,1);


/*
     pwr = Combinatorics.power(node_indices);
     pwr.forEach(function(a){
       perm = Combinatorics.permutation(a);
       perm.forEach(function(b){
         console.log(b.toArray());
       });
     });

      for (i = 2; i < 21; i++){
        cmb = Combinatorics.combination(node_indices,i); //,3,4,5]); //,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
        cmb.forEach(function(){

        });
      }
      for (i=0; i<cmb.toArray().length; i ++){
        j = 0;
        do {
          if (cmb.toArray().nth(i).indexOf(cur_currency_index) > -1){
            j++;
          }else{
            if (nodes[j] != currency) {
            Rates.convert(cur_amount, cur_currency, nodes[j], function (error, result) {
              if (error) {
                console.log('error',error);
              } else {
                console.log(result);
              }
              result1 = result;
            });
            }else if (j == cmb.toArray().nth(i).length){
              Rates.convert(cur_amount, cur_currency, currency, function (error, result) {
                if (error) {
                  console.log('error',error);
                } else {
                  console.log(result);
                }
                result1 = result;
              });
            }
            cur_amount = result1.exchangedAmount;
            cur_currency = result1.to;
            j ++;
          }
        }while(j < cmb.toArray().nth(i).length);
        if (cur_amount > max_amount){
          max_amount = cur_amount;
          max_index = i;
        }
      }
      
*/
      answer = 'best path is at ' + max_index + ' with ' + max_amount;
      console.log(answer);
    }
  });
}