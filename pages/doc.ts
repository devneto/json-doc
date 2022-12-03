export const doc = `
  {
    "title": "My Json Documentation",
    "description": "This is a description of my json documentation",
    "version": "1.0.0",
    "paths": [
      {
        "title": "Users",
        "description": "Everything about your Users",
        "methods": [
          {
            "path": "/users",
            "method": "GET",
            "description": "Get all users",
            "response": {
              "status": 200,
              "body": [
                {
                  "id": 1,
                  "name": "John Doe"
                }
              ]
            }
          },
          {
            "path": "/users",
            "method": "POST",
            "description": "Create a new user",
            "request": {
              "body": {
                "name": "John Doe"
              }
            },
            "response": {
              "status": 201,
              "body": {
                "id": 1,
                "name": "John Doe"
              }
            }
          },
        {
            "path": "/users/:id",
            "method": "GET",
            "description": "Get a user by id",
            "response": {
                "status": 200,
                "body": {
                    "id": 1,
                    "name": "John Doe"
                }
            }
        },
        {
            "path": "/users/:id",
            "method": "PUT",
            "description": "Update a user by id",
            "request": {
                "body": {
                    "name": "John Doe"
                }
            },
            "response": {
                "status": 200,
                "body": {
                    "id": 1,
                    "name": "John Doe"
                }
            }
        },
        {
            "path": "/users/:id",
            "method": "DELETE",
            "description": "Delete a user by id",
            "response": {
                "status": 204
            }
        }
        ]
      }
    ]
  }
`