import {useState} from "react";

export const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    return (
        <>
            <form onSubmit={e => console.log('submit')}>
            </form>
                <div>
                <label htmlFor="">first name: </label>
                <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    <p style={{color: "red"}}>
                    {(firstName.length > 0 && firstName.length < 2) && "first name must be at least 2 characters"}
                    </p>
                </div>
                <div>
                <label htmlFor="">last name: </label>
                <input type="text" onChange={e => setLastName(e.target.value)}/>
                    <p style={{color: "red"}}>
                    {(lastName.length > 0 && lastName.length < 2) && "last name must be at least 2 characters"}
                    </p>
                </div>
                <div>
                <label htmlFor="">email: </label>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
                    <p style={{color: "red"}}>
                    {(email.length > 0 && email.length < 5) && "Email must be at least 5 characters"}
                    </p>
                </div>
                <div>
                <label htmlFor="">password: </label>
                <input type="text" onChange={e => setPassword(e.target.value)}/>
                    <p style={{color: "red"}}>
                    {(password.length > 0 && password.length < 8) && "password must be at least 8 characters"}
                    {(password === confirmPassword && password !== "") && "passwords must match"}
                    </p>
                </div>
                <div>
                <label htmlFor="">confirm password: </label>
                <input type="text" onChange={e => setConfirmPassword(e.target.value)}/>
                    <p style={{color: "red"}}>
                    {(password.length > 0 && password.length < 8) && "password must be at least 8 characters"}
                    {(password !== confirmPassword && password !== "") && "passwords must match"}
                    </p>
                </div>
        </>
    )
}