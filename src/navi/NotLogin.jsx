import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotLogin() {
  return (
    <>
      <Navi>
        <Link to="/">
          <span>홈</span>
        </Link>
        <h3>안녕하세요</h3>
        <Link to="/Login">
          <Button variant="outline-light">로그인</Button>
        </Link>
        <Link to="/Signup">
          <Button variant="outline-light">회원가입</Button>
        </Link>
        <br />
      </Navi>
    </>
  );
}

export default NotLogin;

const Navi = styled.div`
  text-align: center;
  background-color: black;
  color: azure;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
