# EyeBuild

EyeBuild is a project consisting of a client-side and server-side application. The server is built with NestJS, and the client is built with NextJS. The project also uses a MongoDB database and a proxy server (which is not yet connected).

## Project Structure

- **Client-side** — developed using NextJS, responsible for the user interface and user interaction.
- **Server-side** — built with NestJS, handles API requests, application logic, and database interaction.
- **Database** — MongoDB is used for storing application data.
- **Proxy** — not yet connected.

## Setup and Running the Project

### Local Development

To run the project locally, you can use Docker Compose. Follow these steps:

1. Navigate to the root directory of the project:
    ```bash
    cd eyebuild
    ```

2. Run all services using Docker Compose:
    ```bash
    docker-compose up
    ```

   This will start both the client and server applications in containers.

### Running Services Separately

You can also run the services separately if you prefer not to use Docker Compose.

#### Client-side (NextJS):

1. Navigate to the client directory:
    ```bash
    cd services/web-client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

#### Server-side (NestJS):

1. Navigate to the server directory:
    ```bash
    cd services/core
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm run start
    ```

### Database Connection

MongoDB is connected through configuration provided in environment variables. Make sure the database connection is properly set up.

## Documentation

- **API server** based on NestJS is available on port `8000`.
- **Client application** built with NextJS is available on port `3000`.

## Development

It is recommended to use Docker Compose for development, as it simplifies the environment setup and interaction with different services. If you prefer to work with individual services, make sure to start them separately as outlined above.

## Testing

Testing will be set up in the future; the current version of the application focuses on basic environment configuration and the interaction between the client and server.

## License

This project is licensed under the [MIT License](LICENSE).
