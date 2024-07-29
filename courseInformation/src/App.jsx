import {  } from 'react';

const Header = () => {
  return <h1>Web development curriculum</h1>
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}


/* Ejecuta el componente Part */

const Content = props => {
  return (
    <>
      <h3>{props.course.name}</h3>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />

      <h3></h3>
    </>
  )
}


const Course = props => {
  return (
    <>
      <Header />

      <Content
        course={props.course.name}
        part1={props.course.parts[0].name}
        part2={props.course.parts[1].name}
        part3={props.course.parts[2].name}
        exercises1={props.course.parts[0].exercises}
        exercises2={props.course.parts[1].exercises}
        exercises3={props.course.parts[2].exercises}
      />

      <Total parts={props.course.parts} />
    </>
  )
}


const Total = ({ parts }) => {
  let total = parts.reduce((a, n) => a + n.exercises, 1)
  return (
    <p>
      <b>Total of {total} exercises</b>
    </p>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of react',
        exercises: 10,
        id: 1
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },

      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },

      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }

    ]
  }

  return <Course course={course} />
}



export default App