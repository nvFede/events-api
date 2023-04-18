# Events API
This is an API to manage events, built with Node.js, Express.js and MongoDB.
## Getting started
To get started with the API, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory of the project with the following variables:


```
MONGODB_URI=<your MongoDB URI>
PORT=<your desired port number>

```
Run

```
npm start
``` 

to start the development server.

## API endpoints
The following endpoints are available:
### GET `/api/events`
Get a list of all events.
### GET `/api/events/:id`
Get details for a specific event by ID.
### GET `/api/events/city/:city`
Get a list of events for a specific city.
### POST `/api/events`
Create a new event.
### PUT `/api/events/:id`
Update an event by ID.
### DELETE `/api/events/:id`
Delete an event by ID.
## Event schema
The following fields are available for an event:

- `name` (required): the name of the event
- `description` (required): a description of the event
- `date` (required): the date of the event
- `time` (required): the time of the event
- `location` (required): the location of the event
- `city` (required): the city of the event
- `country` (required): the country of the event
- `category` (required): the category of the event
- `price` (required): the price of the event
- `images` (optional): an array of images for the event

## Validation
Input data is validated using the <a href="https://joi.dev/" target="_new">Joi</a> library.
## Error handling
Errors are handled using middleware functions. The API returns JSON responses with appropriate error messages.

## Testing
To run the tests, run `npm test`. The tests use the <a href="https://jestjs.io/" target="_new">Jest</a> library.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.


***

Exported on 18 de abril de 2023 7:04 p. m..
