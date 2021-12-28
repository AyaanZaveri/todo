import React from "react";
import Button from "./Button";
import Input from './Input'

const Tasks = (props) => {
  const tasks = [
  ];

  const taskProp = props.task;
  const dateProp = props.date;
  const setTextProp = props.setText;
  const setDateProp = props.setDate;
  const dateValueProp = props.dateValue;

  const [list, setList] = React.useState(tasks);

  const handleAdd = () => {
    const newList = list.concat({id: Math.round(Math.random() * 10000), task: taskProp, date: dateProp});
    setList(newList);
  };

  return (
    <div>
      <h1 className={`text-lg font-medium text-${props.color.toLowerCase()}-900 hover:text-${props.color.toLowerCase()}-700 transition underline decoration-${props.color.toLowerCase()}-500 decoration-2 underline-offset-1`}>
        Tasks
      </h1>
      {list.map((task) => {
        return (
          <div key={task.id-1} className={`flex flex-col text-sm mt-2 hover:text-${props.color.toLowerCase()}-700 bg-white hover:bg-slate-50 shadow-sm rounded-lg border px-3 py-2 w-80 transition`}>
            <span className={`inline-flex text-${props.color.toLowerCase()}-900 font-medium`} key={task.id}>
              {task.task}
            </span>

            <span className={`text-${props.color.toLowerCase()}-500 font-normal`} key={task.id+1}>
              {task.date}
            </span>


          </div>
        );
      })}
      <Input id='task' placeholder='What needs to be done?' color={props.color.toLowerCase()} width='80' handleText={setTextProp} handleDate={setDateProp} dateValue={dateValueProp}/>
      <div className="mt-3" onClick={taskProp ? handleAdd : null}>
        <Button text='Add' color={props.color.toLowerCase()} icon='PlusIcon' />
      </div>
    </div>
  );
};

export default Tasks;
