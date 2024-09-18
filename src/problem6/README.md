# Problem 6: Architecture

## Overview

This document provides the specification for the software module responsible for managing and updating user scores in a live scoreboard system.

## System Requirements

1. **Scoreboard Display:** A website displays the top 10 user scores.
2. **Live Updates:** The scoreboard must be updated in real-time.
3. **Score Increase:** Users can perform actions that increase their scores.
4. **API Integration:** Upon completing an action, an API call updates the user's score.
5. **Security:** The system must prevent unauthorized score updates.

## Flow Diagram

The following diagram illustrates the flow of execution for updating user scores:

![Score Update Flow Diagram](src/problem6/score-update-flow-diagram.jpg)

### Flow Description

1. **User Completes Action:** The user performs an action which triggers a score update.
2. **Send Request to /api/update-score:** The action sends a request to the API to update the user's score.
3. **Server Validates Request:** The server validates the incoming request to ensure it is legitimate and authorized.
4. **Updates Database:** If validation is successful, the server updates the score in the database.
5. **Sends Update to Clients:** The server sends the updated score to all connected clients.
6. **Response to User:** The server responds to the user with a success or error message.

## API Endpoints

### Update Score

- **Endpoint:** `/api/update-score`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "userId": "string",
    "score": "number",
    "authToken": "string"
  }
