import React from "react"

const Login = () => {
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
          <input className="input" />
        </div>
        <div className="errormessagewrap">Please enter correct E-mail</div>

        <div className="inputtitle">Password</div>
        <div className="inputwrap">
          <input className="input" />
        </div>
        <div className="errormessagewrap">
          Please enter at least 8 characters including letters, numbers, and
          special symbols.
        </div>
      </div>

      <div>
        <button>Summit</button>
      </div>
    </div>
  )
}

export default Login
