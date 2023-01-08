import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { NavLink } from "react-router-dom";

const Completion = () => {
  return (
    <Wrapper>
      <h1>Thank you! 🎉</h1>;
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Completion;
