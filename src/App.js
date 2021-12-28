import React, { useState } from "react";
import Button from './components/Button'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Theme from './components/Theme'

const App = () => {

  const [theme, setTheme] = useState('Blue')
  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className='flex justify-center mt-7 appearance-none'>
      <div className='flex items-start flex-col gap-y-3'>
        <h1 className={`text-2xl w-80 font-bold text-${theme.toLowerCase()}-900 hover:text-${theme.toLowerCase()}-700 transition`}>To-Do List</h1>

        <Tasks color={theme} task={text} date={date} />

        <Input id='task' placeholder='What needs to be done?' color={theme} width='80' handleText={setText} handleDate={setDate}/>
        <Theme handleTheme={setTheme} />

      </div>
    </div>

  )
}

export default App