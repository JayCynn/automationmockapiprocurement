# Mock API Service

This project implements a set of mock APIs for testing and development purposes. It's built with TypeScript, Express.js, and includes Swagger documentation.

## Available APIs

1. Order Creation API

   - Endpoint: `/edms/OrderCreation/MY/:company`
   - Method: POST
   - Creates purchase orders with different statuses

2. File Upload API

   - Endpoint: `/api/util/kubeops/submission/v2/uploadSubmissionFileBase64`
   - Method: POST
   - Handles file uploads with base64 encoding

3. File Content Validation API

   - Endpoint: `/procu-utils/validate-file-content`
   - Method: POST
   - Validates if file content is empty

4. String Concatenation API

   - Endpoint: `/procu-utils/concat-strings`
   - Method: POST
   - Concatenates strings to create filenames

5. DateTime API

   - Endpoint: `/procu-utils/getDateTime`
   - Method: POST
   - Returns formatted date and time

6. User Department API
   - Endpoint: `/edms/UserPODept/MY`
   - Method: POST
   - Returns department information for users

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access Swagger documentation:
   - Open http://localhost:3000/api-docs in your browser

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reload
- `npm run build`: Build the TypeScript code
- `npm test`: Run tests

## Development

The project uses:

- TypeScript for type safety
- Express.js for the web server
- Swagger UI for API documentation
- Jest for testing

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # API controllers
├── interfaces/     # TypeScript interfaces
├── routes/         # API routes
└── index.ts        # Application entry point
```

## API Documentation

Full API documentation is available through Swagger UI at http://localhost:3000/api-docs when the server is running.
