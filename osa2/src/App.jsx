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
      <MainHeader header="Web development curriculum"/>
      {courses.map(course => (
      <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

const MainHeader = ({ header }) => {
  return <h1>{header}</h1>}

const Course = ({ course }) => {

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
  return (<h2>{course.name}</h2>)
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => (
        <p key={part.id}>{part.name} {part.exercises}</p>
      ))}
    </div>
  )
}


/*const Content = ({ course }) => { 
  return (
    <div>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  )
}*/

export default App;
