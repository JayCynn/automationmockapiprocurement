import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mock API Documentation",
      version: "1.0.0",
      description:
        "API documentation for Mock API endpoints - No Authentication Required",
    },
    servers: [
      {
        url: process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000",
        description: "API Server",
      },
    ],
    components: {
      schemas: {},
      securitySchemes: {}, // No security schemes needed
    },
    security: [], // No security requirements
  },
  apis: ["./src/routes/*.ts"], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
