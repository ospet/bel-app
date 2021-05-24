import React, {useState} from 'react';
import Task from './Task';

// TODO remove hardcoded values
const tasks = [
  {
    title: 'Task 1',
    description: 'My first task',
    assignee: 'Olivier',
    bels: 1,
    dueDate: new Date()
  },
  {
    title: 'Task 2',
    description: 'My second task',
    assignee: 'Olivier',
    bels: 2,
    dueDate: new Date()
  },
  {
    title: 'Task 3',
    description: 'My third task',
    assignee: 'Olivier',
    bels: 1,
    dueDate: new Date()
  }
]

const TaskList = () => {
  return (
    <>
      {
      tasks.map(task => <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        assignee={task.assignee}
        key={task.title}
      />)
      }
    </>
  )
}

export default TaskList;