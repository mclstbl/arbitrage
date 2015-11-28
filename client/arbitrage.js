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
      return ("Run algorithm and return list of conversions");
    }
  });

}