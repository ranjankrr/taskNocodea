import {NavLink} from 'react-router-dom';
const NotFound =()=>{
    return(
        <>
           <h3 className='notfound'>Page NotFound!</h3>
           <NavLink to="/"><p className='Back'>Back to Home!</p></NavLink>

        </>
    )
}
export default NotFound