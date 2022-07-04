import styled from "styled-components";

export const Card = styled.div`
  max-width: 80%;
  font-size: calc(11px + 2vmin);
`;

export const HulkCard = styled.div`
  max-width: 70%;
  width: 60%;
  font-size: calc(11px + 2vmin);
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  .hulk {
    height: 80vmin;
    max-height: 60vmin;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 30px;
    input {
        margin-top: 10px;
        margin-bottom: 50px;
   }
  }

  .result {
      opacity: 0.5;
  }
`;

export const Nav = styled.div`
  min-width: 200px;
  width: 40%;
  max-width: 50%;
  display: flex;
  justify-content: space-between;
  a {
    color: #b18fcf;
    opacity: 0.4;
    cursor: pointer;
  }
  a:hover {
    opacity: 1;
  }
`;
