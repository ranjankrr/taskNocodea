
const Login =(props)=>{
    return(
        <>
    <div className="register-header">
         <div className="register-form">
         <h4>Login!</h4>
           <form>
                <input type="text" placeholder="Enter username like email"/>
                <input type="password" placeholder="password..."/>
                <button>Submit</button>
                
           </form>
        </div>
    </div>
        </>
    )
}
export default Login;