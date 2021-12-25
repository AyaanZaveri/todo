import React from 'react'

const Tasks = () => {

        const tasks = [
            {
                id: 1,
                task: 'Learn React',
                date: '12-28-2021'
            },
            {
                id: 2,
                task: 'Learn Vue',
            },
            {
                id: 3,
                task: 'Learn Angular',
            }
          ]

        return (
            <div>
                <h1 className='text-lg font-medium text-sky-900 hover:text-sky-700 transition'>Tasks:</h1>
                <ul>
                    {
                    tasks.map((task) => {
                        return <li className='text-sm text-sky-900 mt-2 hover:text-sky-700 font-normal bg-white hover:bg-slate-50 shadow-sm rounded-lg border px-3 py-2 w-80 transition' key={task.id}>{task.id}. {task.task}</li>
                    })
                }
                </ul>
            </div>
        )
    }

const AddItem = ({ name, onChange, onAdd }) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );

export default Tasks
