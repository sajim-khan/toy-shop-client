
import React from 'react';
import useTitle from '../../Hooks/Titile';

const Blogs = () => {
useTitle("Blogs");

    return (
      <div className="p-20">
        <h1 className="font-bold">
          Q-1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          <span className="font-bold">Ans : </span>An access token is like a
          digital key that allows you to access certain resources or perform
          actions on a system or service. It is typically given to you after you
          log in or authenticate yourself. Access token is usually short-lived
          and has an expiration time. <br />A refresh token is another type of
          token that is used to get a new access token after the current one
          expires. It's a long-lived token that is also obtained during the
          authentication process <br />
          Access tokens and refresh tokens work together in an authentication
          system to provide secure access to resources. When a user logs in or
          authenticates, the server verifies their credentials. The refresh
          token is sent to the server, and if valid, the server issues a new
          access token. <br />
          For web applications, it is recommended to store access tokens in
          HTTP-only cookies, which are cookies that cannot be accessed by
          client-side <br />
          In mobile applications, access tokens and refresh tokens can be stored
          securely in the device's secure storage mechanisms, such as the secure
          storage provided by the operating system.
        </p>
        <h1 className="font-bold mt-7">
          Q-2. Compare SQL and NoSQL databases?
        </h1>
        <p>
          <span className="font-bold">Ans : </span> SQL databases are based on a
          structured, relational data model and use SQL queries for data
          manipulation and retrieval. They provide strong consistency, ACID
          properties, and are well-suited for complex queries and transactions.{" "}
          <br /> NoSQL databases, on the other hand, offer a flexible schema and
          employ various data models like key-value, document, columnar, or
          graph. They prioritize scalability, high availability, and can handle
          large volumes of unstructured or semi-structured data. <br /> While
          SQL databases excel in maintaining data integrity and handling complex
          relationships, NoSQL databases offer greater flexibility, horizontal
          scalability, and are a popular choice for modern web applications, big
          data processing, and real-time analytics.
        </p>
        <h1 className="font-bold mt-7">
          Q-3 . What is express js? What is Nest JS?
        </h1>
        <p>
          <span className="font-bold"> Ans : </span>Express.js is a minimalist
          web application framework for Node.js that provides a simple and
          flexible way to build web applications and APIs. It offers a
          lightweight and unopinionated approach, allowing developers to
          customize and structure their applications according to their specific
          needs. <br /> NestJS is a progressive, opinionated framework for
          building scalable and efficient server-side applications using
          TypeScript. It is built on top of Express.js and provides a modular
          architecture inspired by Angular, making it easy to organize code into
          modules, controllers, and services, and facilitating dependency
          injection for better testability and maintainability.
        </p>
        <h1 className="font-bold mt-7">
          Q-4 . What is MongoDB aggregate and how does it work ?
        </h1>
        <p>
          <span className="font-bold"> Ans : </span> MongoDB's aggregate is a
          framework that enables advanced data aggregation and analysis within
          MongoDB. It allows you to perform complex operations on data, such as
          grouping, filtering, and computing aggregate values, using a sequence
          of stages defined in a pipeline. Each stage in the pipeline processes
          the data in a specific way, allowing you to transform and manipulate
          it to meet your analytical needs, providing powerful and flexible
          querying capabilities.
        </p>
      </div>
    );
};

export default Blogs;