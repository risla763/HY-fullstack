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
      <Statistics statistics={statistics} />
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad} <br></br>
      all {total}<br></br>
      average {(good - bad)/ total} <br></br>
      positive {good/ (0.01*total)} % <br></br>

    </div>
  )
}

const Header = ({ header }) => {
  return <h1>{header.title}</h1>
}

const Statistics = ({ statistics }) => {
  return <h1>{statistics.text}</h1>
}


export default App