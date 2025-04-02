# FeathersJS API Boilerplate

A boilerplate for creating RESTful APIs using [FeathersJS](https://feathersjs.com/).

## Features

- RESTful API endpoints
- Real-time functionality with Socket.io
- In-memory service for users (can be replaced with a database adapter)
- Logging with Winston
- Error handling
- CORS support
- Compression
- Security with Helmet

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

   For development with auto-reload:

   ```
   npm run dev
   ```

4. The server will be running at http://localhost:3030

## API Endpoints

### Users Service

- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Replace a user
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Order Creation API

- `POST /dms/OrderCreation/MY/:company` - Create a new order for the specified company

#### Request Format:

```json
{
  "orderCreation": {
    "pUserId": "[[userId]]",
    "pOrderDate": "[[orderDate]]",
    "preferenceID": "[[preferenceID]]",
    "porderStatus": "[[orderStatus]]",
    "porderNo": "[[orderNo]]",
    "porderDept": "[[orderDept]]",
    "porderRaisedBy": "[[orderRaisedBy]]",
    "pvendorNo": "[[vendorNo]]",
    "porderDuedate": "[[orderDueDate]]",
    "porderValidityDuration": "[[number:orderValidityDuration]]",
    "porderValidityUnit": "[[orderValidityUnit]]",
    "porderTotal": "[[number:orderTotal]]",
    "porderAddress": "[[orderAddress]]",
    "porderNotes": "[[orderNotes]]",
    "pOdetail": "[[object:pOdetail]]"
  }
}
```

#### Response Format:

```json
{
  "response": {
    "orderCreationResponse": {
      "pONumber": "415562",
      "pONoStatus": "Raised",
      "pOPdf": "Kota Stationers-415562.pdf"
    }
  }
}
```

### File Submission API

- `POST /api/util/kubeops/submission/v2/uploadSubmissionFileBase64` - Upload a file submission with base64 encoding

#### Request Format:

```json
{
  "clientId": "Procu.Gdms",
  "clientSecret": "Procu.Gdms",
  "baseUrl": "https://my-myform-uat.simedarbymotors.com/",
  "formId": "[[formId]]",
  "submissionRefNo": "[[submissionRefNo]]",
  "fileUploads": [
    {
      "fieldCode": "[[fieldCode]]",
      "formFiles": [
        {
          "shortFileName": "[[shortFileName]]",
          "fullFileName": "[[fullFileName]]",
          "base64FileData": "[[base64FileData]]",
          "fileExtension": "application/pdf"
        }
      ]
    }
  ]
}
```

#### Response Format:

```json
{
  "response": {
    "statusId": "",
    "responseData": "True",
    "success": "True"
  }
}
```

### File Validation API

- `POST /procu-utils/validate-file-content` - Validate file content

#### Request Format:

```json
{
  "base64data": "[[filedata]]"
}
```

#### Response Format:

```json
{
  "response": {
    "validateIsFileEmptyResponse": "False"
  }
}
```

### String Concatenation API

- `POST /procu-utils/concat-strings` - Concatenate strings

#### Request Format:

```json
{
  "vendorName": "[[VendorName]]",
  "PONo": "[[PONo]]",
  "isAmended": "[[isAmended]]"
}
```

#### Response Format:

```json
{
  "response": {
    "concatResponse": "Kota Stationers-415562.pdf"
  }
}
```

### Date Time API

- `POST /procu-utils/getDateTime` - Get formatted date and time

#### Request Format:

```json
{
  "format": "[[DatetimeFormat]]"
}
```

#### Response Format:

```json
{
  "response": {
    "dateTime": "14 Mar 2025 11:00:22"
  }
}
```

### User PO Department API

- `POST /dms/UserPODept/MY` - Get user PO department information

#### Request Format:

Empty JSON object `{}`

#### Response Format:

```json
{
  "response": {
    "data": {
      "userPODeptResponse": {
        "UserDeptMaster": [
          {
            "poDept": "AD",
            "deptName": "Damansara Admin",
            "deptType": "Administration"
          }
        ]
      }
    }
  }
}
```

#### Testing the APIs

You can test these APIs using the provided HTML interfaces:

- `/test-order-creation.html` - Test the Order Creation API
- `/test-api-endpoints.html` - Test the File Submission, File Validation, String Concatenation, Date Time, and User PO Department APIs

## Project Structure

```
/
├── config/               # Configuration files
│   └── default.json      # Default configuration
├── public/               # Public assets
│   ├── index.html        # Welcome page
│   ├── test-order-creation.html  # Order Creation API test page
│   ├── test-api-endpoints.html   # New APIs test page
│   └── favicon.ico       # Favicon
├── src/                  # Source code
│   ├── hooks/            # Custom hooks
│   ├── middleware/       # Express middleware
│   ├── services/         # Feathers services
│   │   ├── users/        # Users service
│   │   ├── order-creation/  # Order creation service
│   │   ├── file-submission/ # File submission service
│   │   ├── validate-file/   # File validation service
│   │   ├── concat-strings/  # String concatenation service
│   │   ├── get-datetime/    # Get date time service
│   │   └── user-po-dept/    # User PO department service
│   ├── app.hooks.js      # Application hooks
│   ├── app.js            # Express/Feathers application
│   ├── channels.js       # Real-time event channels
│   ├── index.js          # Server entry point
│   └── logger.js         # Winston logger
└── package.json          # npm dependencies and scripts
```

## Adding a Database

This boilerplate uses in-memory storage. To add a database:

1. Install the appropriate adapter:

   ```
   npm install @feathersjs/mongodb --save
   ```

   (or another adapter like @feathersjs/mongoose, @feathersjs/sequelize, etc.)

2. Update the service to use the adapter.

## Testing

Run tests with:

```
npm test
```

## License

MIT
