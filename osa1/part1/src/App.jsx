import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
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

  const handleGoodClick = () => {
    const newClicks = {
      good: clicks.good + 1,
      neutral: clicks.neutral,
      bad: clicks.bad
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      good: clicks.good,
      neutral: clicks.neutral +1,
      bad: clicks.bad
      }
    setClicks(newClicks)
    }

  const handleBadClick = () => {
    const newClicks = {
      good: clicks.good,
      neutral: clicks.neutral,
      bad: clicks.bad +1
      }
    setClicks(newClicks)
    }
    

  return (
    <div>
      <Header header={header} />
      <button onClick={() => handleGoodClick(good +1)}>Good</button>
      <button onClick={() => handleNeutralClick(neutral +1)}>Neutral</button>
      <button onClick={() => handleBadClick(bad +1)}>Bad</button>
      <Statistics statistics={statistics} />
      good {clicks.good} <br></br>
      neutral {clicks.neutral} <br></br>
      bad {clicks.bad} <br></br>
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