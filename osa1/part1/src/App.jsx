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
      <Content content={part1} exercises={exercises1} content2={part2} exercises2={exercises2} content3={part3} exercises3={exercises3}/>
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


 const Part = (props) => {
    
  return (
    <div>
      <p>
        {props.content} {props.exercises}
      </p>
    </div>
  )
}

 const Content = (props) => {
    
  return (
    <div>
      <Part content={props.content} exercises={props.exercises}/>
      <Part content={props.content2} exercises={props.exercises2}/>
      <Part content={props.content3} exercises={props.exercises3}/>
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