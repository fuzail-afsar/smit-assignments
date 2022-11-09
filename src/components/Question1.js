import React from "react";

const name = "Hello World";
const obj = { name: "Hello World Object" };
const data = ["We", "are", "United"]; //Show these in seperate tags
const list = [
  { name: "Hello World 1" },
  { name: "Hello World 2" },
  { name: "Hello World 3" },
]; //Show these in seperate tags
const complex = [
  { company: "XYZ", jobs: ["Javascript", "React"] },
  { company: "ABC", jobs: ["AngularJs", "Ionic"] },
];

const Question1 = () => {
  return (
    <div id="question-1">
      <h1>Question: 1</h1>
      <p>{name}</p>
      <p>{obj.name}</p>
      <p>
        <strong>Data</strong>
      </p>
      <ul>
        {data.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
      <p>
        <strong>List</strong>
      </p>
      <ul>
        {list.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>
        <strong>Complex</strong>
      </p>
      <ul>
        {complex.map(({ company, jobs }) => (
          <li key={company}>
            <strong>Company</strong>
            <p>{company}</p>
            <ul>
              {jobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question1;
