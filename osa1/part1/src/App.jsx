const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total text="Number of exercises" parts={course.parts} />
    </div>
  )
}


const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

 const Content = ({ parts }) => {
    
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Total = ({ parts, text }) => {
  return (
    <div>
      <p>
      {text} {parts[1].exercises + parts[0].exercises + parts[2].exercises}
      </p>
    </div>
  )

}



export default App