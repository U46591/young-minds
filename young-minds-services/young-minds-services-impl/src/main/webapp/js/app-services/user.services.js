/**
 * 
 */
(function () {
    'use strict';

    angular
        .module('youngMindApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http,$location,$cookieStore) {
    	alert('USER SERVICE *************');
        var services = {};
        
        services.GET=GET;
        services.POST=POST;
        return services;
        
        function GET(url){
        	return $http.get(url).then(handleSuccess,handleError);
        }
        function POST(url,data){
        	alert('service layer post method ');
        	return $http({
        		method:'POST',
        		url:url,
        		data:data,
        		headers:{
        			'Content-Type':'application/com.indra.api.services.User-1+json',
        			'Accept' :'application/com.indra.api.services.User-1+json'
        		}
        	}).then(handleSuccess,handleError);
        	//return $http.post(url,data).then(handleSuccess,handleError);
        }
        
        // private functions
        function handleSuccess(res) {
        	alert('handle success');
            return res
        }

        function handleError(error) {
        	alert('handle error');
        	return error;
           /* return function () {
                return { success: false, message: error };
            };*/
        }
    }

})();