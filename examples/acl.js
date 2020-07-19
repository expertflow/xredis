'use strict';

var redis = require('redis');
var client1 = redis.createClient();
var client2 = redis.createClient();


// In order to use ACL commands, put all the commands in an array and put the array in the first argument of the function
// and callback in the second argument. 

client1.acl(['setuser', 'someusername', 'on', 'nopass', '~*', '+@all'], ((err, succ) => {
    if (err) {
        console.log(err)
    }
    if (succ) {
        console.log(succ)
    }
}));


client2.acl(['deluser', 'someusername'], ((err, succ) => {
    if (err) {
        console.log(err)
    }
    if (succ) {
        console.log(succ)
    }
}));