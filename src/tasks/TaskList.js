import React, {useState} from 'react';
import Task from './Task';
import useApi from '../hooks/useApi';

const TaskList = () => {

  const { loading, refresh, data } = useApi('/api/v1/tasks', {
    method: 'GET'
  });
  if (loading)
    return <h3>Chargement des tâches...</h3>
  if (data)
    return (
      <>
        {
          data.tasks.map(task => <Task
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            key={task.title}
          />)
        }
      </>
    )
  else
    return (
      <h3>Pas de tâches assignées</h3>
    )
}

export default TaskList;