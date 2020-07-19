'use strict';

var redis = require('redis');

// auth for default user
redis.auth('password',(callback));

//auth for ACL user
redis.auth('username','password',(callback));
