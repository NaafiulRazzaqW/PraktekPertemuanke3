

function LoginForm() {
    return (
    <>
    <div className="header">
        <h3>Form Login</h3>
    </div>
    <div className="formInput">
        <h3>Tugas Pertemuan ke 3</h3>
        <div className="Username">
            <form action="">
                <label>
                    Username:
                    <input type="text" />
                </label>
            </form>
        </div>
        <div className="Password">
            <form action="">
                <label>
                    Password:
                    <input type="text" />
                </label>
            </form>
        </div>
        <br />
        <div className="Button">   
            <button>Login</button>
        </div>
        <br />
        <div>
            
        </div>
    </div>
    </>
    )
    
}

export default LoginForm;