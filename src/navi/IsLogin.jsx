import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function IsLogin() {

  return (
    <>
      <Navi>
        <Link to="/">
            <span>홈</span>
        </Link>
        <h3>안녕하세요</h3>
        <Button variant="outline-light" >로그아웃</Button>
        <br/>
      </Navi>
    </>
  );
}

export default IsLogin;



const Navi = styled.div`
  text-align: center;
  background-color: black;
  color: azure;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
