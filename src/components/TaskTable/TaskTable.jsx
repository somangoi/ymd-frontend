import React from 'react';
import { Table } from 'reactstrap';

function TaskTable () {
  return (
    <Table>
      <thead>
        <tr className="taskPage">
          <th className="taskPage"><i className="fas fa-list"/>Task</th>
          <th className="taskPage"><i className="fas fa-arrow-up"/>Epic</th>
          <th className="taskPage"><i className="far fa-clock"/>Schedule</th>
          <th className="taskPage"><i className="fas fa-user"/>Engineers</th>
          <th className="taskPage"><i className="fab fa-font-awesome-flag"/>By group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
        <tr>
          <th scope="row" className="taskPage">사용자 리스트 레이아웃</th>
          <td className="taskPage">메인페이지</td>
          <td className="taskPage">2021/09/30 - 2021/10/03</td>
          <td className="taskPage">@Somi Hwang</td>
          <td className="taskPage">In progress</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TaskTable;