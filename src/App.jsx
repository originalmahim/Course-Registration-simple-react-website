
import { useEffect, useState } from 'react';
import './App.css'
import Head from './Components/Head/Head'
import Main from './Main/Main';
import Purches from './Components/Purches/Purches';
import Swal from 'sweetalert2'
function App() {
  const [courses,setCourses] = useState([]);
  useEffect(() => {
  fetch('courses.json')
  .then(res => res.json())
  .then(data => setCourses(data))
},[])

const [select,setSelect] = useState([]);
const [credit,setCredit] = useState(0);
const [price,setPrice] = useState(0)
  const handleSelect = (item,time,money) =>{
  
    const isExist = select.find((things) => things === item)
  if (isExist) {
    return Swal.fire({
      icon: 'error',
      title: 'Sorry...',
      text: 'You can not add a course Multiple times',
    })
    }
    const newtitles = [...select,item]
    setSelect(newtitles);
    const newcredit = credit + time;
    setCredit(newcredit);
    const totalprice = price + money;
    setPrice(totalprice)
    
    }
  return (
    <>
    <Head></Head>
    <div className="my-5 flex justify-between gap-3">
    <div className='w-3/4 grid grid-cols-3 gap-5'>
      {
        courses.map(course => <Main key={course.id} handleSelect = {handleSelect} course = {course} ></Main>)
      }
      </div>
      <Purches credit = {credit} select ={select} price ={price}></Purches>
      </div>
    </>
  )
}

export default App
