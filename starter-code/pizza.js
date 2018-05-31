// wait for DOM to load
$(document).ready(function() {
  
  var ingredients = [
    { topping: 'green peppers',   price: 1,  selected: true },
    { topping: 'mushrooms',       price: 1,  selected: true  },
    { topping: 'pepperonni',      price: 1,  selected: true },
    { topping: 'sauce',           price: 3,  selected: true },
    { topping: 'gluten-free crust',price: 5, selected: false },
    { topping: 'pinapple',        price: 1,  selected: false },
    { topping: 'hot peppers',     price: 2,  selected: false },
    { topping: 'sausage',         price: 3,  selected: false },
    { topping: 'pastrami',         price: 3,  selected: false },
    { topping: 'cornichons',         price: 3,  selected: false },
  ];
  
  
  // ingredients constructor
  function Pizza () {
    // load toppings from ingredients array
    this.toppings = ingredients;
    this.basePrice = 10;
  }
  
  Pizza.prototype.makeButtons = function() {
   
    for (var i=0; i<pizza.toppings.length; i++)
    var html = '';
    pizza.toppings.forEach(function (item, index) {
      
      var act = '';
      if ( item.selected )
      act = 'active'
      
      var id = 'b-' + index;
      html += '<li><button id="' + id + 
      '" class="btn btn-crust ' + act +
      '">' + item.topping + 
      '</button></li>';
    });  
    return html;  
  }
  
  Pizza.prototype.listenButtons = function() {
    console.log("make buttons method")
    pizza.toppings.forEach(function (item, index) {
      var sel = '#b-' + index;
     
      $(sel).click(function(){
        // $(".pep").toggle();
       
        $(sel).toggleClass('active')
        
        if (item.selected) 
          item.selected = false;
        else
          item.selected = true;
        // $("#pep").toggleClass("hide") 

        var html = pizza.displayPrice();
        $('#prices').html(html);

        var total = pizza.calculatePrice();
        var html = '$' + total;
        $('#total').html(html);
      });  
    });  
  }
  

  Pizza.prototype.calculatePrice = function() {
    
    return pizza.toppings.reduce(function (total, topping) {
      
      if (topping.selected)
        return total + topping.price;
      else
        return total
    },pizza.basePrice) 
  }

  
  Pizza.prototype.displayPrice = function() {
    
    for (var i=0; i<pizza.toppings.length; i++)
    var html = '';
    pizza.toppings.forEach(function (item, index) {
      if (item.selected) {
        html += '<li>$' + item.price + ' ' + item.topping + '</li>';
      }
    });    
    return html;
  }
  
  // instanciate class
  var pizza = new Pizza();
  
  // Initialize page
  var html = pizza.makeButtons();
  $('#buttons').html(html);
  
  var html = pizza.displayPrice();
  $('#prices').html(html);

  var total = pizza.calculatePrice();
  var html = '$' + total;
  $('#total').html(html);
  
  pizza.listenButtons();
  
});


