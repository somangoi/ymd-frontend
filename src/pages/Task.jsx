import styled from 'styled-components';

//컴포넌트
import TaskTable from '../components/TaskTable/TaskTable';
import Title from '../components/Title/Title';

function Task() {
  return <TaskWrapeer>
    <Title />
    <TaskTable></TaskTable>
  </TaskWrapeer>;
}


const TaskWrapeer = styled.div`
  margin-top: 50px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackground};
  padding: 20px 30px;`



export default Task;
