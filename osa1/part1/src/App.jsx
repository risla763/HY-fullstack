const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={part1} exercises={exercises1}/>
      <Content content={part2} exercises={exercises2}/>
      <Content content={part3} exercises={exercises3}/>
      <Total text="Number of exercises" total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

 const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )

 }

 const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.content} {props.exercises}
      </p>
    </div>
  )

}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.text} {props.total}
      </p>
    </div>
  )

}



export default App