import React, { useState } from 'react';

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

const Course = ({ courses }) => {
  const [total, setTotal] = useState(42);

const totall = courses.reduce( (s, p) => {
  console.log('what is happening', s, p)
  return s+p.exercises
}, 0)

  return (
    <div>
      <Header courses={courses}/>
      <Content courses={courses}/>
      <h3>total of {totall} exercises</h3>
    </div>
  )
}

const Header = ({ courses }) => {
  console.log(courses.name)
  return <h1>{courses.name}</h1>
}

const Content = ({ courses }) => {
  return (
    <div>
      <p>{courses.parts[0].name} {courses.parts[0].exercises}</p>
      <p>{courses.parts[1].name} {courses.parts[1].exercises}</p>
      <p>{courses.parts[2].name} {courses.parts[2].exercises}</p>
      <p>{courses.parts[3].name} {courses.parts[3].exercises}</p>
    </div>
  )
}

export default App;
