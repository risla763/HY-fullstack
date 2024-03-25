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