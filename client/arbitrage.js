if (Meteor.isClient) {
  // refresh exchange rates
  Rates.refreshRates();

  Template.textinput.events({
    "submit .textinput": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var amount = event.target.amount.value;
      Session.setDefault('amount', amount);

      // Clear form
      // event.target.text.value = "";
    }
  });

  Template.textinput.helpers({
  });

  Template.menu.events({
    "onChange .menu": function (event) {
      event.preventDefault();

      var currencytemp = document.getElementById("select-currency");
      var currency = currencytemp[currencytemp.selectedIndex].value;

      Session.setDefault('currency', currency);
    }
  });

  //Template.menu.helpers({
  //});

  Template.arbitrate.events({
    'click button': function () {
      bellmanford(Session.get('amount'), Session.get('currency'));
    }
  });

  Template.arbitrate.helpers({
    bellmanford: function (a,c) {
      var NO_OF_CUR = 3;

      var nodes = ["USD","CAD","EUR"];
      var exchangeRates = [1,1.34,0.94
                          ,0.75,1,0.71
                          ,1.76,1.42,1];

      var weight = [];
      //weight = weight between edges
      var i,j,k;
      for (i=0;i<NO_OF_CUR*NO_OF_CUR;i++){
        weight [i] = - Math.log(exchangeRates[i]);
      }
      //initialise distances
      var dist = [];
      var pred = [];
      for (i = 0; i < NO_OF_CUR ; i++){
        dist[i] = Infinity;
        pred[i] = -1;
      }
      dist[0] = 0;

      for ( k = 0; k < NO_OF_CUR ; k ++ ){
        for ( i = 0; i < NO_OF_CUR; i ++ ){
          for (j = 0 ; j < NO_OF_CUR; j++)
            if (dist[i] + weight[i*NO_OF_CUR+ j] < dist[j]){
              dist[j] = dist[i] + weight[i*NO_OF_CUR+j];
              pred[j] = i;
              window.alert(weight[i*NO_OF_CUR+j]);
            }
        }
      }
      window.alert("final answer" + weight[2*NO_OF_CUR+2]);
      //checking for negative weight cycle
      for (i = 0; i < NO_OF_CUR; i++) {
        for (j = 0; j < NO_OF_CUR; j++) if (dist[i] + weight[i*NO_OF_CUR+j] < dist[j]) {
          window.alert(j + " Is a part of negative cycle");
        }
        else {
          window.alert ("No possibility for arbitrage");
        }
      }
    }



  });

}