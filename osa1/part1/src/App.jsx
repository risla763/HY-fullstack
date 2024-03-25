import { useState } from 'react'



const App = () => {
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
      <Header header={header} />
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <StatisticsText statistics={statistics} />
      <Statistics good={good} textGood= {"good"} textBad= {"bad"} textNeutral= {"neutral"} 
      total = {total} textAverage= {"average"} textPositive= {"positive"}  bad={bad} neutral={neutral}
      average={(good - bad)/ total}
      positive = {good/ (0.01*total)} />
    </div>
  )
}

const Header = ({ header }) => {
  return <h1>{header.title}</h1>
}

const StatisticsText = ({ statistics }) => {
  return <h1>{statistics.text}</h1>
}

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
    {props.textGood} {props.good}<br></br>
    {props.textNeutral} {props.neutral}<br></br>
    {props.textBad} {props.bad} <br></br>
    all {props.total} <br></br>
    {props.textAverage} {props.average}<br></br>
    {props.textPositive} {props.positive} %<br></br>
    </div>
  )
}

export default App