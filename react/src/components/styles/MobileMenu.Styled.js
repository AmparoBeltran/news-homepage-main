import styled from "styled-components";

export const MobileMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  gap: 5em;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 2em;

  & img {
    width: 30px;
    align-self: flex-end;
  }

  & nav {
    gap: 2em;
  }
`;
