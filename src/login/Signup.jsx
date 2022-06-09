import React from "react";

const Signup = () => {
  return (
    <div>
      아이디(이메일): <input /> <br />
      이름: <input /> <br />
      비밀번호: <input type="password" /> <br />
      비밀번호 확인: <input type="password" /> <br />
      <button>회원가입</button>
    </div>
  );
};

export default Signup;
