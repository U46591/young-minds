/**
 * 
 */
(function(){
	'use strict';
	
	angular
    	.module('youngMindApp')
    	.controller('RegisterController', RegisterController)
    	.directive('passwordValidattion',PasswordValidation)
    	.directive('validPasswordC',ValidatePasswordC);
	
	RegisterController.$inject=['UserService','$location'];
	function RegisterController(UserService){
		alert('register controller ***');
		var ym = this;
		ym.register = Register;
		
		function Register(){
			alert('register ------');
            UserService.POST('http://',ym.user)
            .then(function (response) {
                if (response.success) {
                    //FlashService.Success('Registration successful', true);
                    $location.path('/successPage');
                } else {
                    //FlashService.Error(response.message);
                    //vm.dataLoading = false;
                }
            });
		}
	}
	
	function PasswordValidation(){
		alert('password validation -------');
	}
	
	function ValidatePasswordC(){
		alert('password validation C-------');
	}
	
})();