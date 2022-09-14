
const Registration =()=>{
    return(
        <>
        <div className="register-header">
           <div className="register-form">
              <h3>Registration Form!</h3>
              <form>
                <input type="text" placeholder="Enter Your FullName..." autocomplete="off"/>
                <input type="email" placeholder="Enter Your Email..." autocomplete="off"/>
                <input type="text" placeholder="Enter Your Phone Number..." autocomplete="off"/>
                <input type="password" placeholder="Create Password..."/>
                <input type="text" placeholder="Confirm Password..."/>
                <button>Submit</button>
            </form>
           </div>
        </div>   
        </>
    )
}
export default Registration;