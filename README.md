# Social Network API

## Description

This project is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB as the database, and Mongoose as the ODM. It provides endpoints for users, thoughts, reactions, and friends management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
  - [Friend Routes](#friend-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/BrendaHaight/social-network-api.git
```

2. Navigate to the project directory:

```bash
cd social-network-api
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Make sure MongoDB is running. If you're using a local MongoDB instance, you can start it using:

```bash
mongod
```

2. Start the server:

```bash
npm run dev
```

3. The server will start on http://localhost:3001

## API Routes

### User Routes

- **Create a User**
  - **POST** `/api/users`
  - **Body:**

```bash
  {
  "username": "user1",
  "email": "user1@example.com"
}
```

- **Get All Users**

  - GET `/api/users`

- **Get a Single User by ID**

  - GET `/api/users/:userId`

- **Update a User by ID**
  - PUT `/api/users/:userId`
  - Body:

```bash
{
  "username": "updatedUser",
  "email": "updatedUser@example.com"
}
```

- **Delete a User by ID**
  - DELETE `/api/users/:userId`

### Thought Routes

- **Create a Thought**
  - POST `/api/thoughts`
  - Body:

```bash
{
  "thoughtText": "Here's a cool thought...",
  "username": "user1",
  "userId": "replace_with_user1_id"
}
```

- **Get all Thoughts**

  - GET `/api/thoughts`

- **Get a single Thought by ID**

  - GET `api/thoughts/:thoughtId`

- **Update a Thought by ID**
  - PUT `/api/thoughts/:thoughtId`
  - Body:

```bash
{
  "thoughtText": "Updated thought text"
}
```

- **Delete a Thought by ID**
  - DELETE `/api/thoughts/:thoughtId`

### Reaction Routes

- **Add a Reaction to a Thought**
  - POST `/api/thoughts/:thoughtId/reactions`
  - Body:

```bash
{
  "reactionBody": "This is a reaction",
  "username": "user1"
}
```

- **Remove a Reaction from a Thought**
  - DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`

### Friend Routes

- **Add a Friend to a User's Friend List**

  - POST `/api/users/:userId/friends/:friendId`

- **Remove a Friend from a User's Friend List**
  - DELETE `/api/users/:userId/friends/:friendId`

### Walkthrough Video\*\*

For a detailed walkthrough of the API functionality, please refer to the following video link: ![Walkthrough Video](https://drive.google.com/file/d/1dz8CzKYPRQ3uSwZge0FQY71RsGaDYf0X/view?usp=sharing)

## License

This project is licensed under the MIT License.
