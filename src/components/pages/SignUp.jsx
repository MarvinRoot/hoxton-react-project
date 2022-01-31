import { useNavigate } from "react-router-dom"

export function SignUp() {
    const navigate = useNavigate()

    return (
        <div className="sign-up">
            <h1 className="logo">Hoxtify</h1>
            <h2>Your daily music dose</h2>
            <form>
                <div className="container">
                    <h1>SIGN UP!</h1>

                    <label>
                        <span>Username</span>
                        <input required type="text" placeholder="Create a username" />
                    </label>

                    <label>
                        <span>Email</span>
                        <input required type="email" placeholder="Enter your email adress" />
                    </label>

                    <label>
                        <span>Password</span>
                        <input required type="password" placeholder="Create a password" />
                    </label>

                    <button type="submit" value="Submit">
                        Sign Up
                    </button>

                    <p onClick={() => navigate('/sign-in')}>Already have an account? Sign in</p>
                </div>
            </form>
        </div>
    )
}