import React from 'react';

export const Header = ({ title }) => <h1>{title}</h1>;

export const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    ))}
  </>
);
export const Total = ({ parts }) => (
  <p>
    <strong>
      {`total of ${parts
        .map(part => part.exercises)
        .reduce((acum, cur) => acum + cur)} exercises`}
    </strong>
  </p>
);

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
