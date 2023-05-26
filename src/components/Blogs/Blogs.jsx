import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
  return (
    <div>
      <div className="">
        <div className="text-center mt-10">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className="btn btn-outline" onClick={toPdf}>Download PDF</button>}
        </Pdf>
        </div>
        <div ref={ref} className="container md:w-[85vh] my-10 mx-auto">
          <div className="p-5 border shadow rounded-md my-3">
            <h1 className="text-2xl font-bold my-5">
              <span className="underline">Question:</span> The differences
              between uncontrolled and controlled components.
            </h1>
            <p>
              <span className="font-bold underline">Answer:</span>
              <br />
              <span className="font-bold">Uncontrolled components:</span>{" "}
              Uncontrolled components are those that manage their own state
              internally and do not rely on external inputs to manage their
              behavior. This means that uncontrolled components have their own
              internal state and are responsible for managing it. <br />
              <span className="font-bold">Controlled components:</span>{" "}
              Controlled components, on the other hand, are those that rely on
              external inputs to manage their behavior. These inputs are
              typically passed down to the component through properties or
              state, and the component will update its behavior accordingly.
            </p>
          </div>
          <div className="p-5 border shadow rounded-md my-3">
            <h1 className="text-2xl font-bold my-5">
              <span className="underline">Question:</span> How to validate React
              props using PropTypes?
            </h1>
            <p>
              <span className="font-bold underline">Answer:</span>
              <br />
              React PropTypes is a library that allows developers to define the
              types of props that their React components expect to receive.
              PropTypes can help catch errors early in the development process
              by ensuring that props are of the expected type. <br />
              <span className="underline">
                Here are some commonly used PropTypes:
              </span>{" "}
              <br />
              <div className="ms-5">
                <li>PropTypes.string</li>
                <li>PropTypes.number</li>
                <li>PropTypes.bool</li>
                <li>PropTypes.object</li>
                <li>PropTypes.symbol</li>
                <li>PropTypes.element</li>
              </div>
            </p>
          </div>
          <div className="p-5 border shadow rounded-md my-3">
            <h1 className="text-2xl font-bold my-5">
              <span className="underline">Question:</span> Tell us the
              difference between nodejs and express js.
            </h1>
            <p>
              <span className="font-bold underline">Answer:</span>
              <br />
              <span className="font-bold">Express JS:</span> Express is a
              minimal and flexible NodeJS framework that provides a robust set
              of features for web applications like routing, sessions, caching,
              etc. Comparing Node JS vs Node JS Express, the latter manages all
              the clutter that comes with setting up a server and gives you a
              simple interface to build your routes and then use them for
              handling requests made by the users. <br />
              <span className="font-bold">Node.JS:</span> Node.JS uses an
              event-driven, non-blocking I/O model which makes it lightweight
              and efficient for the server environment that has to handle
              multiple concurrent connections with low latency. Using NodeJS
              will allow you to create such an application because it has high
              performance and speed.
            </p>
          </div>
          <div className="p-5 border shadow rounded-md my-3">
            <h1 className="text-2xl font-bold my-5">
              <span className="underline">Question:</span> What is a custom
              hook, and why will you create a custom hook?
            </h1>
            <p>
              <span className="font-bold underline">Answer:</span>
              <br />
              <span className="font-bold">Custom hook:</span>In React, a custom
              hook is a reusable function that allows you to share stateful
              logic between components. Custom hooks are created using the use
              prefix, and they follow the same rules as regular hooks. <br />
              <span className="font-bold">Uses of custom hook:</span> Express is
              a minimal and flexible NodeJS framework that provides a robust set
              of features for web applications like routing, sessions, caching,
              etc. Comparing Node JS vs Node JS Express, the latter manages all
              the clutter that comes with setting up a server and gives you a
              simple interface to build your routes and then use them for
              handling requests made by the users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
