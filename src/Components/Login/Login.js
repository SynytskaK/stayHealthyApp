import './Login.css'

const Login = () => {
    return(
         <div className="container"> 
        <div className="signup-grid"> 
            <div> 
                <h1 className="signup-text">Login</h1>
            </div>
            <div className="signup-text1"> 
                Are you a new member? <span><a href="../Login/Login.html">  Sign Up Here</a></span>
            </div>
            <div className="signup-form"> 
                <form>
                    <div className="form-group"> 
                        <label for="email">Email</label> 
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" /> 
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label> 
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" /> 
                    </div>

                    <div className="btn-group"> 
                        <button type="submit" className="btn btn-primary">Login</button> 
                        <button type="reset" className="btn btn-danger">Reset</button> 
                    </div>
                </form> 
            </div>
        </div>
        <div className="reset_password">Forgot Password?</div>
    </div>
    )
}

export default Login;