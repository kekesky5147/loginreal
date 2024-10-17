import React, { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")

  return (
    <div className="page">
      <div className="titlewrap">
        Please enter
        <br />
        E-mail and Password
      </div>

      <div className="contentwrap">
        <div className="inputtitle">E-mail</div>
        <div className="inputwrap">
          <input
            className="input"
            placeholder="E-mail"
            value={email}
            // onChange가 들어가지 않으면 기본 밸류값에서 setEmail로 변경이 되지 않기때문에 입력이 되지않음,
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="errormessagewrap">Please enter your E-mail</div>

        <div style={{ marginTop: "40px" }} className="inputtitle">
          Password
        </div>
        <div className="inputwrap">
          <input
            className="input"
            placeholder="Password"
            value={pw}
            // onChange가 들어가지 않으면 기본 밸류값에서 setPw로 변경이 되지 않기때문에 입력이 되지않음,
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="errormessagewrap">
          Please enter at least 8 characters including letters, numbers, and
          special symbols
        </div>
      </div>

      <div>
        <button disabled={true} className="bottombutton">
          {" "}
          Summit
        </button>
      </div>
    </div>
  )
}

export default Login
