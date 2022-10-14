import  {useState} from  'react';
import {useHistory} from 'react-router-dom';
const Adduser =()=>{
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [birth, setBirth] =useState('');
  const [email, setEamil] =useState('');
  const [phone, setPhone] =useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] =useState('');
  const [city, setCity] =useState('');
  const [pincode, setPincode] =useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [hobbies, setHobbies] =useState('')
  const [showhide, setShowhide] = useState('')
  const history = useHistory();

    const handlingSubmit =(e)=>{
      e.preventDefault();
        const records ={firstName, lastName, birth, email, phone, gender, address, city,pincode, state, country, hobbies};
        fetch("http://localhost:8087/Students", {
          method:'POST',
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(records)
        }).then(()=>{
          console.log("success");
          history.push('/')
        })
    
     }
     const checkboxHandle =(e)=>{
      setHobbies(e.target.value);
      console.log(e.target.value);
     }
     const  showInput =(e)=>{
         setShowhide(e.target.value);
     }

    return(
        <>
        <div className='register-header'>
        <div className="register-form">
        <h4>Filled Deatils's Users!</h4>
        <form onSubmit={handlingSubmit}>
           <lable for="fname" className="title-name">First Name:</lable>
           <input type="text" name="fname" className='fullname' onChange={(e)=>setFirstName(e.target.value)}/><br/>
           <lable for="lname" className="title-name">Last Name:</lable>
           <input type="text" name="lname" className='fullname' onChange={(e)=>setLastName(e.target.value)}/><br/>
           <lable for="date" className="title-name">Date Of Birth:</lable>
           <input type="date" name="Date-of-brith" className='date-birth' onChange={(e)=>setBirth(e.target.value)}/><br/>
           <lable for="emai" className="title-name" >Email ID:</lable>
           <input type="email" name="Email" className='date-birth email-filled' onChange={(e)=>setEamil(e.target.value)}/><br/>
           <lable for="phone" className="title-name">Mobile Number:</lable>
           <input type="text" name="phone" className='date-birth phone-filled' onChange={(e)=>setPhone(e.target.value)}/><br/>
           <lable for="gender" className="title-name">Gender:</lable>
           <input type="radio" name="gender" value='male' className='radio-button' onChange={(e)=>setGender(e.target.value)}/>
           <label for="male">Male</label>
           <input type="radio" name="gender" value='female' className='radio-button' onChange={(e)=>setGender(e.target.value)}/>
           <label for="female">Female</label>
           <input type="radio" name="gender" value='others' className='radio-button' onChange={(e)=>setGender(e.target.value)}/>
           <label for="other">other</label><br/>
           <label for="address" className="title-name">Address:</label>
           <textarea name="address" className='text-area' onChange={(e)=>setAddress(e.target.value)}></textarea><br/>
           <label for="city" className="title-name">City:</label>
           <input type="text" name="city" className='date-birth city-filled' onChange={(e)=>setCity(e.target.value)}/><br/>
           <label for="code" className="title-name">Pin Code:</label>
           <input type="text" name="pincode" className='date-birth code-filled' onChange={(e)=>setPincode(e.target.value)}/><br/>
           <label for="state" className="title-name">State:</label>
           <input type="text" name="state" className='date-birth state-filled' onChange={(e)=>setState(e.target.value)}/><br/>
           <label for="country" className="title-name">Country:</label>
           <input type="text" name="country" className='date-birth country-filled' onChange={(e)=>setCountry(e.target.value)}/><br/>
           <label for="Hobbies" className="title-name">Hobbies:</label><br/>
           <input type="checkbox" className='checkBox' onChange={checkboxHandle} value="singing" />
           <label for="singing">Singing</label><br/>
           <input type="checkbox"  className='checkBox' onChange={checkboxHandle} value="dancing"/>
           <label for="dancing">Dancing</label><br/>
           <input type="checkbox"  className='checkBox'onChange={checkboxHandle} value="drawing"/>
           <label for="drawing">Drawing</label><br/>
           <input type="checkbox"  className='checkBox' onClick={showInput} value="other"/>
           <label for="other">Other</label>
           {
            showhide === 'other' && (
              <input type="text" onChange={checkboxHandle}/>
            )
           }
          <br/>
          <button className='submit-btn'>Submit</button>
          </form>
          </div>
          </div>
        </>
    )
}
export default Adduser;