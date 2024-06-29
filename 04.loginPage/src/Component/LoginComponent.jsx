const LoginComponent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorfield = document.getElementById("errorval");
        const { username, email, password } = e.target;
        errorfield.textContent = "";
        
        if (username.value.length < 5 || username.value.length >= 15) {
            errorfield.textContent = "Username should be between 5 and 15 characters long.";
            return;
        }
        let regex = /^[A-Za-z]+$/
        if (!regex.test(username.value)) {
            errorfield.textContent = "Username should be only Letters.";
            return;
        }
        let emailregex = /^[A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        if (!emailregex.test(email.value)) {
            errorfield.textContent = "Enter Valid email address.";
            return;
        }
        let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordregex.test(password.value)) {
            errorfield.textContent = "Enter Valid Password with length 8-15,a Capital letter, a small letter and a Special case letter.";
            return;
        }
        const submittedval = document.getElementById("submittedval");
        submittedval.innerHTML=`<h1>Hello ${username.value}</h1><h3>Email: ${email.value}</h3>`
        
    }

    return (
        <>
            <style>
                {`
                :root {
                    --primary-color: #4CAF50;
                    --error-color: red;
                    --input-border-color: #ccc;
                    --input-border-radius: 3px;
                    --input-font-size: 16px;
                    --button-bg-color: var(--primary-color);
                    --button-hover-bg-color: #45a049;
                    --button-text-color: white;
                    --button-border-radius: 3px;
                    --button-cursor: pointer;
                    --error-message-font-size: 14px;
                    --error-message-margin-top: 5px;
                }
                
                .login-form {
                    max-width: 300px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid var(--input-border-color);
                    border-radius: var(--input-border-radius);
                    background-color: #f9f9f9;
                }
                
                .login-form label {
                    display: block;
                    margin-bottom: 10px;
                }
                
                .login-form input {
                    width: calc(100% - 20px);
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid var(--input-border-color);
                    border-radius: var(--input-border-radius);
                    font-size: var(--input-font-size);
                }
                
                .login-form button {
                    width: 100%;
                    padding: 10px;
                    background-color: var(--button-bg-color);
                    color: var(--button-text-color);
                    border: none;
                    border-radius: var(--button-border-radius);
                    cursor: var(--button-cursor);
                    font-size: var(--input-font-size);
                }
                
                .login-form button:hover {
                    background-color: var(--button-hover-bg-color);
                }
                
                .error-message {
                    color: var(--error-color);
                    font-size: var(--error-message-font-size);
                    margin-top: var(--error-message-margin-top);
                }
                `}
            </style>
            
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Ex. John Doe" />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@email.com" />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" />
                    
                    <br />
                    <p id="errorval" className="error-message"></p>
                    
                    <button type="submit">Login</button>
                </form>
                <div id="submittedval">
                </div>
            </div>
        </>
    )
}

export default LoginComponent;
