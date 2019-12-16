# Install nvm for MACOS
Install via Homebrew

```brew install nvm```

# Install nodejs 
Install the latest node version with: 

```nvm install node```

Use the latest node version with 

```nvm use node```

# Check version:

```node --version```

# Install yarn

```brew install yarn```

# Install Package 
    
```yarn install```

# Run health:

```http :3000/health```

#Crud
Get all user

```curl -X GET http://0.0.0.0:5555/users```

Get 1 User

```curl -X GET http://0.0.0.0:5555/users/1```

Post

```curl -X POST http://0.0.0.0:5555/users  -d '{"name": "Quang Hai","dob": "2000-01-01" }'```

Update
 
```curl -X PUT http://0.0.0.0:5555/users/1 -d '{"name": "Tua", "dob": "2003-01-01"}'```
 
Delete 

```curl -X DELETE http://0.0.0.0:5555/users```

#Run Docker
```docker-compose up```
# Run API:

```nodemon src/server.js```