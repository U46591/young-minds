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
	
	function RegisterController(){
		alert('register controller ***');
	}
	
	function PasswordValidation(){
		alert('password validation -------');
	}
	
	function ValidatePasswordC(){
		alert('password validation C-------');
	}
	
})();