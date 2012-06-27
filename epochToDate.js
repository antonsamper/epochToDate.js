var epochToDate = (function () {

    'use strict';
    
    var pad = function (number) {
	    
	    return (number < 10) ? ('0' + number) : number;
	    
    };

    return function (epoch) {

        var dateObject = new Date(epoch * 1000);

        return {
	        'day'    :pad(dateObject.getDate()),
	        'month'  :pad(dateObject.getMonth() + 1),
	        'year'   :dateObject.getFullYear(),
	        'hours'  :pad(dateObject.getHours()),
	        'minutes':pad(dateObject.getMinutes()),
	        'seconds':pad(dateObject.getSeconds())
        };

    };

}());