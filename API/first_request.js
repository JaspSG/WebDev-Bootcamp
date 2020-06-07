var request = require('request');

request('http://www.google.com', function(error, response, body){
    if(error){
        console.log("Error!")
        console.log(error);
    }
    else{
        if(response.statusCode == 200){ //status code 200 usually means all good.
            //things worked
            console.log(body);
        }
    }
});