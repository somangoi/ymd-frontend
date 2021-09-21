import React from "react";
import styled from "styled-components";
import Title from "../components/Title/Title";
import CalendarSection from "../components/Calendar/CalendarSection";

function Calendar() {
  return (
    <CalendarWrapper>
      <Title />
      <CalendarSection />
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  margin-top: 50px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackground};
  padding: 20px 30px;
`;

export default Calendar;
