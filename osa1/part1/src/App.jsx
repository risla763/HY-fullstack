import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   


  // tallenna napit omaan tilaansa
  // title:
  const header = {
    title: "give feedback"
  }
  const statistics = {
    text: "statistics"
  }
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setToValue(newValue)
    }


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState(0)
  const [points, setList] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const handleAnecdote = () => {
    const updateSelected = Math.floor(Math.random()*8)
    setSelected(updateSelected)
    console.log('anecdote', selected)

  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setList(copy)
    console.log('tätä nyt updated', selected)
    console.log('uus lista', copy)
  }

  const handleGoodClick = () => {
    console.log('good before', good)
    const updateGood = good + 1
    setGood(good + 1)
    console.log('good after', good)
    setTotal(updateGood + bad + neutral)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(neutral + 1)
    setTotal(good + bad + updateNeutral)

  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(bad + 1)
    setTotal(good + updateBad + neutral)

  }

  return (
    <div>
      {anecdotes[selected]} <br></br>
      has {points[selected]} votes <br></br>
      <Button text="vote" value={handleVote}/>
      <Button value={handleAnecdote} text="next anecdote"/>
      <Header header={header.title} />
      <ButtonInfo goodClick={handleGoodClick} badClick={handleBadClick} 
      neutralClick={handleNeutralClick}/>
      <Header header={statistics.text} />
      <Statistics good={good} textGood= {"good"} textBad= {"bad"} textNeutral= {"neutral"} 
      total = {total} textAverage= {"average"} textPositive= {"positive"}  bad={bad} neutral={neutral}
      average={(good - bad)/ total}
      positive = {good/ (0.01*total)} />
    </div>
  )


}

const ButtonInfo = (props) => {
  return (
    <div>
      <Button text="Good" value={props.goodClick}/>
      <Button text="Neutral" value={props.neutralClick}/>
      <Button text="Bad" value={props.badClick}/>
    </div>
  )
}

const Button = ( {text, value}) => {
  return (
  <>
    <button onClick={value}>{text}</button>
  </>
  )
}


const Header = ( {header} ) => {
  return <h1>{header}</h1>
}



const Statistics = (props) => {
  console.log(props)
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.total}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive + '%'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ( {text, value} ) => {
  return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
  )
}





export default App