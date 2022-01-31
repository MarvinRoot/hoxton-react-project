import { useNavigate } from "react-router-dom"

export function SignIn() {
    const navigate = useNavigate()
    return (
        <div className="sign-in">
            <h1 className="logo">Hoxtify</h1>
            <h2>Your daily music dose</h2>
            <form>
                <div className="container">
                    <h1>Hey there!</h1>

                    <label>
                        <span>Enter your email adress</span>
                        <input required type="email" placeholder="Enter your email adress" />
                    </label>

                    <label>
                        <span>Enter your password</span>
                        <input required type="password" placeholder="Enter your password" />
                    </label>

                    <button type="submit" value="Submit">
                        Sign In
                    </button>

                    <p onClick={() => navigate('/sign-up')}>Don't have an account? Create one</p>
                </div>
            </form>
        </div>
    )
}