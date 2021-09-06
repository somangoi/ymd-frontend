import React from 'react';
import { Table } from 'reactstrap';

function TaskTable () {
  return (
    <Table className="taskPage">
      <thead>
        <tr className="tableBG tHead">
          <th className="sizeLarge"><i className="fas fa-list tHeadIcon"/>Task</th>
          <th className="sizeSmall"><i className="fas fa-arrow-up tHeadIcon"/>Epic</th>
          <th className="sizeMedium"><i className="far fa-clock tHeadIcon"/>Schedule</th>
          <th className="sizeLarge"><i className="fas fa-user tHeadIcon"/>Engineers</th>
          <th className="sizeMedium"><i className="fab fa-font-awesome-flag tHeadIcon"/>By group</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
        <tr className="tableBG">
          <th scope="row">사용자 리스트 레이아웃</th>
          <td>메인페이지</td>
          <td>2021/09/30 - 2021/10/03</td>
          <td>@Somi Hwang</td>
          <td>In progress</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TaskTable;