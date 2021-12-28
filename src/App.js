import React, { useState } from "react";
import Input from './components/Input'
import Tasks from './components/Tasks'

const App = () => {

  const theme = 'Blue'
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className='flex justify-center mt-7 appearance-none'>
      <div className='flex items-start flex-col gap-y-3 appearance-none'>
        <h1 className={`text-2xl w-80 font-bold text-${theme.toLowerCase()}-900 hover:text-${theme.toLowerCase()}-700 transition`}>To-Do List</h1>

        <Tasks color={theme} task={text} date={date} setText={setText} setDate={setDate} />

      </div>
    </div>

  )
}

export default App