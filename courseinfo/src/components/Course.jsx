const Header = ({course}) => {
  return(
    <h2>
      {course.name}
    </h2>
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({parts}) => (
  <>
    {parts.map(part=>
      <Part key={part.id} part={part} />  
    )}
  </>
)

const Total = ({parts}) => {
  const total=parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <h4>total of {total} exercises</h4>
  )
}

const Course=({courses})=>{
  return(
     <div>
      {courses.map(course=>
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course