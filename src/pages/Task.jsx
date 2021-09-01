import styled from 'styled-components';

//컴포넌트
import TaskTable from '../components/TaskTable';
import Title from '../components/Title/Title';

function Task() {
  return <TaskWrapeer>
    <Title></Title>
    <TaskTable></TaskTable>
  </TaskWrapeer>;
}


const TaskWrapeer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackground};
  padding: 0 30px`;



export default Task;
