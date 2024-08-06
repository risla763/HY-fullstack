import React, { useState } from 'react';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({ course }) => {
  const [total, setTotal] = useState(42);

const totall = course.parts.reduce( (s, p) => {
  console.log('what is happening',s,p)
  return s+p.exercises
}, 0)

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <h3>total of {totall} exercises</h3>
    </div>
  )
}

const Header = ({ course }) => {
  console.log(course.name)
  return <h1>{course.name}</h1>
}

const Content = ({ course }) => {
  return (
    <div>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  )
}

export default App;
