import React, { useEffect, useState } from "react"

const User = {
  email: "test@gmail.com",
  pw: "test1212!",
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState(false)
  const [notAllow, setNotAllow] = useState(true)

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    if (regex.test(email)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value)
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
    if (regex.test(e.target.value)) {
      setPwValid(true)
    } else {
      setPwValid(false)
    }
  }

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("Welcome Back!")
    } else {
      alert("Please check Login information")
    }
  }

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false)
      return
    }
    setNotAllow(true)
  }, [emailValid, pwValid])

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
            type="text"
            className="input"
            placeholder="E-mail"
            value={email}
            // onChange가 들어가지 않으면 기본 밸류값에서 setEmail로 변경이 되지 않기때문에 입력이 되지않음,
            onChange={handleEmail}
          />
        </div>
        <div className="errormessagewrap">
          <div>
            {!emailValid && email.length > 0 && (
              <div>Please enter correct your E-mail</div>
            )}
          </div>
        </div>

        <div style={{ marginTop: "40px" }} className="inputtitle">
          Password
        </div>
        <div className="inputwrap">
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={pw}
            // onChange가 들어가지 않으면 기본 밸류값에서 setPw로 변경이 되지 않기때문에 입력이 되지않음,
            onChange={handlePw}
          />
        </div>
        <div className="errormessagewrap">
          {!pwValid && pw.length > 0 && (
            <div>
              Please enter at least 8 characters including letters, numbers, and
              special symbols
            </div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          className="bottombutton"
        >
          {" "}
          Summit
        </button>
      </div>
    </div>
  )
}

export default Login
