import {useState, useEffect} from 'react';
import {Statistic, Card, Row, Col} from 'antd';

function Account() {
  let [belAmount, setBelAmount] = useState(14,34);
  let [belToClaim, setBelToClaim] = useState(25);
  let [tasksAssigned, setTasksAssigned] = useState(4); //TODO change initial

  //TODO implement retrieval of stats

  return (
    <>
      <Row>
        <Col span={8}>
          <Card>
            <Statistic title="Total (BEL)" value={belAmount} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Tâches assignées" value={tasksAssigned} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="BEL à gagner" value={belToClaim} precision={2} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Account;
