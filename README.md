# Threads project

This project is a simple React application to manage threads. It uses React Query for data fetching and state management.

## Features

- Display a list of threads grouped by certain criteria.
- Show more details of a selected thread.
- Dynamic styling based on thread properties.

## APIs

The project uses a mocked API defined in a JSON file. Check src/services/thread.ts for more details.

## Custom Hooks

- useThreads: Fetches the threads data and returns it along with loading and error states. Located in src/lib/hooks/useThreads.ts.

## Components

- ThreadComponent: Displays individual threads.
- CustomDate: Custom date component for formatting dates.

## Type Definitions

- Thread: Defines the shape of a thread object.
- ThreadsResponse: Defines the API response shape.
- CustomError: Error type.
