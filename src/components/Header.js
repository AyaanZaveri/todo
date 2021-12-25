import React from 'react'
import Button from './Button'
import Input from './Input'
import Tasks from './Tasks'

const Header = (props) => {

    return (
        <div className='flex items-start flex-col gap-y-3'>
            <h1 className={`text-2xl w-80 font-bold text-${props.color.toLowerCase()}-900 hover:text-${props.color.toLowerCase()}-700 transition`}>To-Do List</h1>
            <Tasks />
            <Input id='task' placeholder='What needs to be done?' color='Sky' width='80'/>
            <Button text='Add' color='Sky' icon='PlusIcon'/>
        </div>
    )
}


export default Header