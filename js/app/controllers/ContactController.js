function ContactController() {
  this.name = 'Stuff';
  this.email = 'so@example.com';
  this.phone = '333-333-3333';
  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
    .module('app')
    .controller('ContactController', ContactController);