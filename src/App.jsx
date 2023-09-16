
import { useEffect, useState } from 'react';
import './App.css'
import Head from './Components/Head/Head'
import Main from './Main/Main';
function App() {
  const [courses,setCourses] = useState([]);
  useEffect(() => {
  fetch('courses.json')
  .then(res => res.json())
  .then(data => setCourses(data))
},[])
  return (
    <>
    <Head></Head>
    <div className='w-3/4 grid grid-cols-3 gap-5
'>
      {
        courses.map(course => <Main key={course.id} course = {course}   ></Main>)
      }
      </div>
    </>
  )
}

export default App
