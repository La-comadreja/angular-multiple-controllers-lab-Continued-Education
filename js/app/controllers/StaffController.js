function StaffController() {
    this.name = 'Steve Jobs';
    this.email = 'steve@apple.com';
    this.phone = '444-444-4444';
}

angular
    .module('app')
    .controller('StaffController', StaffController);