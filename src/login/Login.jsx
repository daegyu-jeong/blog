import React from "react";
import { Link } from "react-router-dom"

const Login = () => {

    return (
        <div>
            아이디(이메일): <input /> <br />
            비밀번호: <input type="password" /> <br />
            <button >로그인</button>
        </div>
    )
}

export default Login