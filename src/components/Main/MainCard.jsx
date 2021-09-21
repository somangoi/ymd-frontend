import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MAIN_API } from "../../config";

function MainCard({ title, id }) {
  const [memberList, setMember] = useState([]);

  useEffect(() => {
    fetch(`${MAIN_API}/${id}/members`)
      .then((res) => res.json())
      .then((res) => {
        setMember(res.results.members);
      });
  }, [id]);

  return (
    <Card>
      <BoardTitle>
        <h4>{title}</h4>
      </BoardTitle>
      <BoardMembers>
        {memberList?.map((item, idx) => {
          return <BoardMember key={idx}>{item.last_name}</BoardMember>;
        })}
      </BoardMembers>
    </Card>
  );
}

const Card = styled.li`
  background-color: #2a5d9b;
  border-radius: 10px;
  padding: 20px;
  overflow-wrap: normal;
  cursor: pointer;
`;

const BoardTitle = styled.div`
  ${({ theme }) => theme.displayFlex("flex-start", "center")};
  margin-bottom: 30%;

  h4 {
    overflow-wrap: anywhere;
    color: white;
  }
`;

const BoardMembers = styled.ul`
  ${({ theme }) => theme.displayFlex("flex-end", "center")};
`;

const BoardMember = styled.li`
  ${({ theme }) => theme.displayFlex("center", "center")};
  background: #b6d8ee;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 2px;
`;

export default MainCard;
