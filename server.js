'use strict';

const Hapi = require('@hapi/hapi');
const Mongoose = require("mongoose");
const Joi = require("joi");


const init = async () => {
    // Connection to MongoDB
    Mongoose.connect("mongodb://127.0.0.1:27017/test");

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: "POST",
        path: "/person",
        options: {
            validate: {}
        },
        handler: async (request, h) => {}
    });
    
    server.route({
        method: "GET",
        path: "/people",
        handler: async (request, h) => {}
    });
    
    server.route({
        method: "GET",
        path: "/person/{id}",
        handler: async (request, h) => {}
    });
    
    server.route({
        method: "PUT",
        path: "/person/{id}",
        options: {
            validate: {}
        },
        handler: async (request, h) => {}
    });
    
    server.route({
        method: "DELETE",
        path: "/person/{id}",
        handler: async (request, h) => {}
    });
    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();