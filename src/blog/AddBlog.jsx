import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createblog } from "../redux/modules/blog";
import { type } from "@testing-library/user-event/dist/type";

const AddBlog = (props) => {

  const writer = React.useRef(null);
  const text = React.useRef(null);

  const dispatch = useDispatch()

  const addcard = () => {
    // return props.setcard([
    //   ...props.card,
    //   { writer: writer.current.value, text: text.current.value },
    // ]);
    dispatch(createblog)
  };

  return (
    <div>
      {/* 이미지: <input type="text"/> <br /> */}
      작성자: <input type="text" ref={writer} /> <br />
      내용: <input type="text" ref={text} /> <br />
      <Link to="/">
        <button onClick={addcard}>게시</button>
      </Link>
    </div>
  );
};

export default AddBlog;
