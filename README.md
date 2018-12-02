# Typescript backend server with GraphQL and Apollo Server

This is a simple Apollo server that uses NodeJs with Typescript on the backend and GraphQL

#### Setup (Debian based distros)

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

2. Get the dependencies
    ```
    yarn
    ```

3. Start the server 
    ```
    yarn start
    ```

Developed by [Adonis Murati](https://github.com/adoi)
