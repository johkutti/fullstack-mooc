import React, { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [allVotes, setVotes] = useState(new Uint8Array(anecdotes.length))
  // const votes = new Array(anecdotes.length);
  // for (let i=0;i<anecdotes.length;++i) votes[i] = 0;

  const getRandom = (max) => {
    const rand = Math.floor(Math.random()*max) // [0, max)
    // console.log(rand)
    return(rand)
  }
  
  const vote = (sel) => {
    const copy = [...allVotes]
    copy[sel] += 1
    setVotes(copy)
    
    // Etsitään ja tallennetaan uuden maksimin paikka
    /* let max = 0
    let maxIndex = 0
    for (let index = 1; index < copy.length; index++) {
      if (max < copy[index]) {
        max = copy[index]
        maxIndex = index
      }
    }
    setMostVotes(maxIndex)
    */
    if (copy[sel] > mostVotes) setMostVotes(sel)

    return(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={allVotes[selected]} />
      <button onClick={() => vote(selected)}>Vote!</button>
      <button onClick={() => setSelected(getRandom(anecdotes.length))}>Next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[mostVotes]} votes={allVotes[mostVotes]} />
    </div>
  )
}

// Huolehtii vain anekdoottitekstin ja äänimäärän näyttämisestä allekkain
const Anecdote = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes.</p>
    </div>
  )
}

export default App