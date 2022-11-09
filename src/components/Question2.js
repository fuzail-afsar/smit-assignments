import React from "react";

const Question2 = () => {
  return (
    <div id="question-2">
      <h1>Question: 2</h1>
      <h2>Difference between "default import" VS "named import"</h2>
      <p>
        In JavaScript there are two ways to export/import variables, functions,
        classes from one file to another file. One is Default export/import and
        another is named export/import.
      </p>
      <h3>Default Export/Import</h3>
      <p>
        Default Export/Import is used when you want that variable, function,
        class to be exported as default, which means that when you import that
        variable, function, class from another file you don't care about the
        name to be match or not. but it's better to use same name from origin
        file. Only one default can be used in one file.
      </p>
      <div>Example</div>
      <code>import myFunction from "./path";</code>
      <h3>Named Export/Import</h3>
      <p>
        Named Export/Import is used when you want that variable, function, class
        to be exported with name, which means that when you import that
        variable, function, class from another file you care about the name to
        be match. You can export multiple variables, functions, classes from one
        file.
      </p>
      <div>Example</div>
      <code>import {"{myVariable, myFunction, myClass}"} from "./path";</code>
    </div>
  );
};

export default Question2;
