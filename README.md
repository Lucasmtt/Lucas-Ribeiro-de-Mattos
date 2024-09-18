# Lucas-Ribeiro-de-Mattos
Net-Empregos Application: Back End Developer - Remote

# 99Tech Code Challenge #1

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission

You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

## Problem 4: Three Ways to Sum to N

### Description

Implement three unique functions to calculate the sum of integers from 1 to `n`. Each function should have a different approach, and you should comment on the complexity and efficiency of each.

### Functions

- `sum_to_n_a(n: number): number` - Function A description and complexity.
- `sum_to_n_b(n: number): number` - Function B description and complexity.
- `sum_to_n_c(n: number): number` - Function C description and complexity.

## Problem 5: A Crude Server

### Description

Develop a backend server using ExpressJS with TypeScript. Implement a set of CRUD operations that allows users to interact with the service. 

### Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.

### Build

Run `npm run build` to compile the TypeScript code to JavaScript.

### Development

Run `npm run dev:problema5` to start the server in development mode with `nodemon`.

### Production

Run `npm run start:problema5` to start the server in production mode.

### API Endpoints

- **Create Resource**: `POST /api/resources`
- **List Resources**: `GET /api/resources`
- **Get Resource**: `GET /api/resources/:id`
- **Update Resource**: `PUT /api/resources/:id`
- **Delete Resource**: `DELETE /api/resources/:id`

## Problem 6: Architecture

### Description

Provide the specification for a software module that updates user scores. The specification should include a detailed `README.md` file, a flow diagram illustrating the score update process, and comments for improvement.

### Documentation

- **API Endpoint:** `/api/update-score`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "userId": "string",
    "score": "number",
    "authToken": "string"
  }
