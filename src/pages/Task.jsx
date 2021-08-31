import React, { Fragment } from "react";

//컴포넌트
import Example from '../components/TaskTable';
import Title from '../components/Title/Title';

function Task() {
  return <Fragment>
    <Title></Title>
    <Example></Example>
  </Fragment>;
}

export default Task;
