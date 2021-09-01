import React from 'react';
import { Table } from 'reactstrap';

function TaskTable () {
  return (
    <Table>
      <thead>
        <tr style={borderStyle}>
          <th style={borderStyle}><i style={{marginRight: '10px'}} className="fas fa-list"/>Task</th>
          <th style={borderStyle}><i style={{marginRight: '10px'}} className="fas fa-arrow-up"/>Epic</th>
          <th style={borderStyle}><i style={{marginRight: '10px'}} className="far fa-clock"/>Schedule</th>
          <th style={borderStyle}><i style={{marginRight: '10px'}} className="fas fa-user"/>Engineers</th>
          <th style={borderStyle}><i style={{marginRight: '10px'}} className="fab fa-font-awesome-flag"/>By group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
        <tr>
          <th scope="row" style={borderStyle}>사용자 리스트 레이아웃</th>
          <td style={borderStyle}>메인페이지</td>
          <td style={borderStyle}>2021/09/30 - 2021/10/03</td>
          <td style={borderStyle}>@Somi Hwang</td>
          <td style={borderStyle}>In progress</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TaskTable;

const borderStyle = {
  background: '#FFFFFF',
  border : '1px solid #CCCCCC'
}



// Table.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   size: PropTypes.string,
//   bordered: PropTypes.bool,
//   borderless: PropTypes.bool,
//   striped: PropTypes.bool,
//   dark: PropTypes.bool,
//   hover: PropTypes.bool,
//   responsive: PropTypes.bool,
//   // Custom ref handler that will be assigned to the "ref" of the inner <table> element
//   innerRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.string,
//     PropTypes.object
//   ])
//   };