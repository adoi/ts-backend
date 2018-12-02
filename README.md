## Typescript backend server with GraphQL and Apollo Server

This is a simple Apollo server that uses NodeJs with Typescript on the backend and GraphQL

#### Setup (Debian based distros):

1. Install yarn globally 

    1.1

    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    ````

    1.2 
    ```
    sudo apt-get update && sudo apt-get install yarn
    ```
2. Clone the repo
    ```
    git clone https://github.com/adoi/ts-backend
    ```

3. Get the dependencies
    ```
    yarn
    ```
    
4. Upgrade to the latest versions
    ```
    yarn upgrade-interactive --latest
    ```
5. Create the db (Make sure you have PostgreSQL installed)
    ```
    createdb ts-backend-server
    ```
    *Note*: This is the name of the datase you set in the ormconfig.json file.

6. Start the server 
    ```
    yarn start
    ```
---

*Note*: You can test the resolvers on http://localhost:4000/graphql.

Example: 
 
    query {
        initialMessage
    }
    
Should return : 
    
    {
        "data": {
            "initialMessage": "From GraphQL"
        }
    }

---

Developed by [Adonis Murati](https://github.com/adoi)
