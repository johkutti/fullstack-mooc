import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props.part)
  return (
    <div>
      <p>
        {props.part['name']} {props.part['exercises']} 
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.osaset[0]} />
      <Part part={props.osaset[1]} />
      <Part part={props.osaset[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osaset[0]['exercises']+props.osaset[1]['exercises']+props.osaset[2]['exercises']}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content osaset={course.parts}  />
      <Total osaset={course.parts} />
    </div>
  )
}

export default App