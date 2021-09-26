import React, {useState} from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// Unit on käytännössä vain %-merkkiä varten. Jokin järkevämpi ratkaisu?
const StatisticsLine = ({name, value, unit}) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{value}{unit}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  if (all === 0)
  return(
    <div>
      Annahan palautetta!
    </div>
  )
  return(
    <table>
      <tbody>
        <StatisticsLine name="hyvä" value={good} />
        <StatisticsLine name="ok" value={neutral} />
        <StatisticsLine name="huono" value={bad} />
        <StatisticsLine name="all" value={all} />
        <StatisticsLine name="average" value={(good-bad)/all} />
        <StatisticsLine name="positive" value={(good/all)*100} unit=" %"/>
      </tbody>
    </table>
  )
}


function App() {

  // painikkeet
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <p>Anna palautetta</p>
      <Button handleClick={() => setGood(good+1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral+1)} text="ok" />
      <Button handleClick={() => setBad(bad+1)} text="huono" />

      <p>Tilastot</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

/*
// Toinen versio - kaikki samassa tilassa
function App() {

  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })

  return (
    <div>
      <p>Anna palautetta</p>
      <Button handleClick={() => setFeedback({...feedback, good: feedback.good+1})} text="hyvä" />
      <Button handleClick={() => setFeedback({...feedback, neutral: feedback.neutral+1})} text="ok" />
      <Button handleClick={() => setFeedback({...feedback, bad: feedback.bad+1})} text="huono" />

      <p>Tilastot</p>
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
    </div>
  );
}
*/

export default App;
