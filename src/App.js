import React, { useState } from "react";
import Tasks from './components/Tasks'

const App = () => {

  var dateVal = new Date();
  var day = dateVal.getDate();
  var month = dateVal.getMonth()+1; 
  var year = dateVal.getFullYear();

  dateVal = year+'-'+month+'-'+day;

  const theme = 'Blue'
  const [text, setText] = useState('')
  const [date, setDate] = useState(dateVal)

  return (
    <div className='flex justify-center mt-7 appearance-none'>
      <div className='flex items-start flex-col gap-y-3 appearance-none'>
        <h1 className={`text-2xl w-80 font-bold text-${theme.toLowerCase()}-900 hover:text-${theme.toLowerCase()}-500 transition`}>To-Do List</h1>

        <Tasks color={theme} task={text} date={date} setText={setText} setDate={setDate} dateValue={date} />

      </div>
    </div>

  )
}

export default App
