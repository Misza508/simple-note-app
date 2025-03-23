import { getRandomNumber } from "@/lib/getRandomNumber";
import { delay, http, HttpResponse } from "msw";

export const noteHandlers = [
  http.get(`/api/notes`, async () => {
    await delay(getRandomNumber());
    return HttpResponse.json([
      {
        id: "a1f2c9e7-4a1c-4d8e-9c2b-7e0a5f8d2a4b",
        title: "Node.js Basics - Introduction to npm",
        description: "Understanding Node Package Manager (npm) and its usage.",
        content:
          "A detailed explanation of npm, how to install packages, and manage dependencies in a Node.js project.",
        createdAt: "3/23/2025, 10:15:32 AM",
      },
      {
        id: "d8e9b4a2-6f3d-4c1a-8e7b-2a9c1f8d3e5c",
        title: "JavaScript Fundamentals - Working with Arrays",
        description:
          "Exploring various array methods and operations in JavaScript.",
        content:
          "Learn how to manipulate arrays, iterate through them, and perform common array tasks with examples.",
        createdAt: "3/22/2025, 08:47:59 PM",
      },
      {
        id: "b3c7a1f8-2e5a-4b9d-7c1e-9f4d8b2a6c7e",
        title: "HTML & CSS - Styling with Flexbox",
        description: "Mastering the basics of CSS Flexbox for layout design.",
        content:
          "Learn how to use flex containers and items to create responsive and flexible web layouts.",
        createdAt: "3/23/2025, 01:58:11 PM",
      },
      {
        id: "e4f5d2c6-1b7d-5a2e-8f3c-5e1a7b9d4f2c",
        title: "Python for Beginners - Introduction to Data Types",
        description:
          "Understanding fundamental data types in the Python programming language.",
        content:
          "An overview of integers, floats, strings, booleans, and other basic data types in Python with examples.",
        createdAt: "3/22/2025, 11:32:45 AM",
      },
      {
        id: "c9a8b5e1-7d9f-3b6a-2c4e-8a0f6d1b3e9a",
        title: "Git and GitHub - Version Control Basics",
        description:
          "Introduction to Git for version control and using GitHub for collaboration.",
        content:
          "Learn essential Git commands and how to effectively use GitHub for managing your projects.",
        createdAt: "3/23/2025, 04:22:08 PM",
      },
      {
        id: "f2e1d7c0-3a8c-6b1f-9d5e-2b7a4c8d1f6e",
        title: "React Components - Understanding Props and State",
        description:
          "Exploring the concepts of props and state in React components.",
        content:
          "Learn how to pass data using props and manage component-specific data using state.",
        createdAt: "3/22/2025, 07:19:51 AM",
      },
      {
        id: "a7b6c3d9-5e2b-4a7f-1c8d-6f9e2a4b8c1d",
        title: "RESTful APIs - Introduction and Concepts",
        description: "Understanding the principles of RESTful API design.",
        content:
          "An explanation of RESTful architecture, HTTP methods, and API design best practices.",
        createdAt: "3/23/2025, 09:03:27 AM",
      },
      {
        id: "d1e8f4a6-9c4d-2b8e-7a1f-3e5c7b9a2d8f",
        title: "JavaScript ES6 - Working with Promises",
        description:
          "Understanding and using Promises for asynchronous JavaScript operations.",
        content:
          "Learn how Promises simplify asynchronous code and handle success and error scenarios.",
        createdAt: "3/22/2025, 05:55:14 PM",
      },
      {
        id: "b8c2a9f7-4f1e-7d6a-5c9b-1a3e5f2c7b8a",
        title: "Database Basics - Introduction to SQL",
        description:
          "An introduction to Structured Query Language (SQL) for database interaction.",
        content:
          "Learn basic SQL commands for querying, inserting, updating, and deleting data in a database.",
        createdAt: "3/23/2025, 11:48:53 AM",
      },
      {
        id: "e3f9d1c4-6b5a-3c2e-8d7f-4a1e9b6c3f2a",
        title: "Web Security - Introduction to Cross-Site Scripting (XSS)",
        description:
          "Understanding and preventing Cross-Site Scripting (XSS) vulnerabilities.",
        content:
          "Learn about XSS attacks and how to implement security measures to protect your web applications.",
        createdAt: "3/22/2025, 02:30:19 PM",
      },
      {
        id: "c6a1b7e2-8d7c-5a9f-2b4e-7f8a1c9d5e3b",
        title: "TypeScript Fundamentals - Basic Types and Syntax",
        description:
          "Introduction to TypeScript and its basic data types and syntax.",
        content:
          "Learn how TypeScript adds static typing to JavaScript for improved code maintainability.",
        createdAt: "3/23/2025, 03:11:41 PM",
      },
      {
        id: "a9d3e5c1-2f8a-4b6c-9e1d-6c7e3a2b4d9f",
        title: "React Router - Navigation in React Applications",
        description:
          "Implementing navigation and routing in React applications using React Router.",
        content:
          "Learn how to set up routes, navigate between pages, and handle dynamic routes in React.",
        createdAt: "3/22/2025, 09:59:07 AM",
      },
      {
        id: "d5b2c8a7-7a3d-1f9e-6b4c-8e2a5f1d7c8b",
        title: "Python Libraries - Working with the Requests Library",
        description:
          "Using the Requests library in Python for making HTTP requests.",
        content:
          "Learn how to send HTTP requests to web servers and handle responses using the Requests library.",
        createdAt: "3/23/2025, 06:45:22 PM",
      },
      {
        id: "b1e9f3a6-5c7b-8d2a-4f9e-1a3b7c8d2e1f",
        title: "CSS Grid Layout - Creating Advanced Layouts",
        description:
          "Exploring the capabilities of CSS Grid for creating complex web layouts.",
        content:
          "Learn how to use grid containers, grid tracks, and grid items to build sophisticated layouts.",
        createdAt: "3/22/2025, 04:12:38 PM",
      },
      {
        id: "e7c4a2b9-1d6e-3f8a-7c2b-5a9d1e4f6b7c",
        title: "JavaScript Events - Handling User Interactions",
        description:
          "Understanding and handling events in JavaScript for user interaction.",
        content:
          "Learn about different event types and how to add event listeners to respond to user actions.",
        createdAt: "3/23/2025, 12:37:56 PM",
      },
    ]);
  }),
];
