const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  console.log(part1.name)
  return (
    <div>
      <Header course={course} />
      <Content content={part1} content2={part2} content3={part3}/>
      <Total text="Number of exercises" total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}




const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
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

 const Content = ({ content, content2, content3 }) => {
    
  return (
    <div>
      <p>{content.name} {content.exercises}</p>
      <p>{content2.name} {content2.exercises}</p>
      <p>{content3.name} {content3.exercises}</p>
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