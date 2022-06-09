import React from "react";
import { useSelector } from "react-redux";
//boots
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//router
import { Link, useNavigate } from "react-router-dom";
//styled
import styled from "styled-components";

const BlogList = (props) => {
  const navigate = useNavigate()

  // const cardlists = props.card;
  const cardlists = useSelector((state) => state.blog.card)

  return (
    <>
      {cardlists.map((card, index) => {
        console.log(card);
        return (
          <Card onClick={() => {
            navigate("/detail/" + index)
          }} key={index}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{card.writer}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <span>👍</span>
              <small className="text-muted">작성 시간</small>
            </Card.Footer>
          </Card>
        );
      })}
      <Link to="/AddBlog">
        <ADDBUTTON>+</ADDBUTTON>
      </Link>
    </>
  );
};

const ADDBUTTON = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export default BlogList;
