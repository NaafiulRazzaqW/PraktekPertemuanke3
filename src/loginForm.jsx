import "./loginForm.css";

function LoginForm() {
  return (
    <>
      <div className="margin">
        <div className="header">
          <h1>Form Login</h1>
        </div>
        <div className="body">
          <div className="formInput">
            <h1>Tugas Pertemuan ke 3</h1>

            <div className="username">
              
                <div>
                  <label className="labelpass"><b>Username:</b></label>
                </div>
                <div>
                  <input type="text" className="uname" />
                </div>
              
            </div>

            <div className="password">
              <div>
              <label className="labelpass">
                  <b>Password:</b>
                  
                </label>
              </div>
                <div>
                <input type="text" className="pass" />
                </div>
                
              
            </div>

            <br />

            <div className="buttonbglogin">
              <input type="button" value="Login" className="buttonLogin" />
            </div>

            <br />
            <div className="checkbox">
              <input type="checkbox" name="Remember Me" id="" />
              <span>Remember me</span>
            </div>
            <br />
            <div className="buttonbgcancel">
              <button className="buttonCancel">Cancel</button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
