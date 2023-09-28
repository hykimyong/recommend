import React from 'react'
import styled from "@emotion/styled";
import Register from "../components/Register";
import RegisterBj from "../components/RegisterBj";

const Base = styled.div`
  text-align: center;
`;

const Bjscreen: React.FC = () => {
  return (
    <Base>
      <Register/>
      <RegisterBj/>
    </Base>

  );
}

export default Bjscreen;