const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Appointment Backend API",
      version: "1.0.0",
      description: "Swagger docs for the appointment booking backend",
    },
    servers: [{ url: "http://localhost:8000" }],
    paths: {
      "/api/health": {
        get: {
          summary: "Health check",
          responses: {
            200: {
              description: "Server is healthy",
            },
          },
        },
      },
      "/api/doctors": {
        get: {
          summary: "Get all doctors",
          responses: {
            200: {
              description: "List of doctors",
            },
          },
        },
      },
      "/api/appointments": {
        get: {
          summary: "Get all appointments",
          responses: {
            200: {
              description: "List of appointments",
            },
          },
        },
        post: {
          summary: "Create a new appointment",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    date: { type: "string", example: "1405/04/01 16:00" },
                    description: { type: "string", example: "test" },
                    doctor_id: { type: "integer", example: 2 },
                    full_name: { type: "string", example: "alireza miladi" },
                    id: { type: "integer", example: 4 },
                    phone: { type: "string", example: "09123454343" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Appointment created",
            },
          },
        },
      },
      "/api/appointments/{id}": {
        put: {
          summary: "Update an appointment",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    created_at: {
                      type: "string",
                      example: "2026-07-20 18:53:07",
                    },
                    date: { type: "string", example: "1405/04/01 16:00" },
                    description: { type: "string", example: "test" },
                    doctor_id: { type: "integer", example: 2 },
                    full_name: { type: "string", example: "alireza miladi" },
                    id: { type: "integer", example: 4 },
                    phone: { type: "string", example: "09123454343" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Appointment updated",
            },
            404: {
              description: "Appointment not found",
            },
          },
        },
        delete: {
          summary: "Delete an appointment",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            200: {
              description: "Appointment deleted",
            },
            404: {
              description: "Appointment not found",
            },
          },
        },
      },
      "/api/admin/stats": {
        get: {
          summary: "Get admin stats",
          responses: {
            200: {
              description: "Admin statistics",
            },
          },
        },
      },
    },
  },
  apis: [],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Appointment backend is running" });
});

app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

module.exports = app;
