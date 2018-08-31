"use strict";

// we have three ways to specify DATABASE_URL and TEST_DATABASE_URL:
//  through an environment variable, within the application using a global variable, or
// else we default to a local database.
// Here, we 've hard coded the development database name we created in the database setup step 
// ('restaurants - app ').

exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/restaurants-app";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/test-restaurants-app";
exports.PORT = process.env.PORT || 8080;
