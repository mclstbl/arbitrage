if (Meteor.isClient) {
  Meteor.startup(function () {
  });
    
  Template.textinput.events({
  });

  Template.textinput.helpers({
  });

  Template.menu.events({
  });

  Template.menu.helpers({
  });

  Template.arbitrate.helpers({
  });
    
  Template.arbitrate.events({
    'click #arbitrate': function () {
      //event.preventDefault();
      amount = document.getElementById("textinput").value;
      currency = document.getElementById("select-currency").value;
      if (amount && currency)
        Meteor.call('bellmanFord', amount, currency);
    }
  });

}