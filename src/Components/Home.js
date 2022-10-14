import React, { useEffect, useState } from 'react';

const Home =()=>{
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');

    const getData =async()=>{
        const res = await fetch("http://localhost:8087/Students");
        const actualData = await res.json();
        setList(actualData);
    }
    useEffect(()=>{
        getData()
    },[]);

    const handleDeltButton =(id)=>{
       fetch(`http://localhost:8087/Students/${id}`, {
       method: 'DELETE'
       }).then(()=>{
             getData();
       })
    }
    return(
        <>
        
        <div className='table-content'>
        <div className='fluid-container table-responsive'>
         <input type="search" onChange={(e)=>setSearch(e.target.value)} className="search-box" placeholder="Please search your first name..."/>
           <table className='table table-hover bg-aliceblue'>
                <thead className='bg-success text-light'>
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>PinCode</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.filter((elem)=>elem.firstName.toLowerCase().includes(search)).map((items)=>{
                            return(
                                <tr key={items.id}>
                                    <td>{items.firstName}</td>
                                    <td>{items.lastName}</td>
                                    <td>{items.birth}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.gender}</td>
                                    <td>{items.address}</td>
                                    <td>{items.pincode}</td>
                                    <td>{items.city}</td>
                                    <td>{items.state}</td>
                                    <td>{items.country}</td>
                                    <td>{items.hobbies}</td>
                                    <td>
                                        <button onClick={()=>handleDeltButton(items.id)} className='delete-btn'><i class="bi bi-trash3"></i></button>
                                        <button className="delete-btn bg-success"><i class="bi bi-pencil-square"></i></button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
          </div> 
        </div>    
        </>
    )
}
export default Home;