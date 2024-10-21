# MyApp REST API

## Description
This is a simple REST API built with Node.js, Express, and MongoDB. It allows CRUD operations on a collection of items (e.g., sports equipment or music items).

## API Endpoints
- `GET /api/getall` - Retrieve all items
- `GET /api/:id` - Retrieve one item by ID
- `POST /api/add` - Add a new item
- `PUT /api/update/:id` - Update an item by ID
- `DELETE /api/delete/:id` - Delete an item by ID

## Installation
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your MongoDB URI in `.env`.
4. Run the server: `npm start`.

## Testing
Use Postman or CURL to test the API endpoints.

## Deployment
This API is deployed at: https://fullstack-rest-api.onrender.com
