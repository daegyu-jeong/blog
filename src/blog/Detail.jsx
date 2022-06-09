import React from "react"
import {useParams} from "react-router-dom"

const Detail = () => {

    const params = useParams()

    return (
        <div>
            이미지: <input /> <br />
            내용: <input /> <br />
            <button>수정</button>
        </div>
    )
}

export default Detail