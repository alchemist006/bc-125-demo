# bootcamp-125-checkr

# user - service

# This service is used to authenticate the user and service like login , logout.

# Tech-stack:

- springboot
- mySql

# Api's

 ### Accessing all the endpoints via api-gateway

-  http://localhost:9191/api/v1/users
    ### getting all the users present in database

- http://localhost:9191/api/v1/users/{id}
   ### getting particular user by their id

-  http://localhost:9191/api/v1/users
   ### creating a user and posting in database

- http://localhost:9191/api/v1/users/email/{email}
   ### Getting user data by their email

-  http://localhost:9191/api/v1/users/login
    ### generating token or valid user
