## About

Spring Cloud Config is part of the Spring Cloud set of solutions 
to help implement patterns found in distributed systems.

[Spring Cloud](http://projects.spring.io/spring-cloud/)

Spring Cloud Config provides server and client-side support for 
externalized configuration in a distributed system. With the 
Config Server you have a central place to manage external 
properties for applications across all environments.

[Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/)

## Why

Configuration in microservices is a pain. External solution helps.

## Requirements

- Platform, language, and cloud-independent.

- Centralized

- Dynamic: can update settings while application is runinng

- Passive: im dumb, clients self-register and tell me they exist. 
  I dont have be configured up front with every client detail.

## How

- Config server gets configuration from SCM.

- Clients on bootup look for config server to get settings.

- 

## Setup

#### server
application.yml points to repo with properties.

#### client
clients have configure themselves to point to config server.

    bootstrap.yml
        spring:
          cloud:
            config:
              uri: http://localhost:9292
              

## Testing

Getting properties from server
- http://<server>:<port>/<spring.application.name>/<profile>
when no profile use default, e.g.
http localhost:9000/watchlist-service/default


    > http localhost:9000/watchlist-service/default  
                               
    HTTP/1.1 200 OK
    Content-Type: application/json;charset=UTF-8
    Date: Sat, 20 Feb 2016 18:34:57 GMT
    Server: Apache-Coyote/1.1
    Transfer-Encoding: chunked
    X-Application-Context: application:9000
    
    {
        "label": null, 
        "name": "watchlist-service", 
        "profiles": [
            "default"
        ], 
        "propertySources": [
            {
                "name": "https://github.com/enlightendev/spring-cloud-config/watchlist-service.yml", 
                "source": {
                    "spring.data.mongodb.uri": "mongodb://localhost:27017/watchlist-service", 
                    "spring.data.rest.base-path": "/api"
                }
            }
        ], 
        "version": "fefbdd32c7c0cec9c9ecbd67f3f14a73a0e3ec91"
    }
    

