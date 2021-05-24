import React, {useState} from 'react';
import {Card} from 'antd';
import moment from 'moment';

const Task = ({
  title,
  description,
  dueDate,
  assignee
}) => {

  return !title ? null : (
    <>
      <Card data-testid="task-card" title={title} extra={moment(dueDate).format('YYYY-MM-DD')}>
        {description}
      </Card>
    </>
  )
}

export default Task;