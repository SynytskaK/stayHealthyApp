import './Sign_Up.css'

const Sign_Up = () => {
    return (
        <div class="wrapper" >
            <div class="signup-wrapper">
                <div>
                    <h1 class="signup-text">Sign Up</h1>
                </div>
                <div class="signup-text1">
                    Already a member? <span><a class="orangeText" href="login"> Login</a></span>
                </div>
                <div class="signup-form">
                    <form>
                        <div class="form-group">
                            <label for="role">Role</label>
                            {/* <input type="text" name="role" id="role" required class="form-control" placeholder="Select role" aria-describedby="helpId" />  */}
                            <select id="role" class="form-control">
                                <option value="">Select Role</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel"  pattern="\d{10}"
    maxlength="10" name="phone" id="phone" required class="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>

                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign_Up