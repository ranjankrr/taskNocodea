import React,{useState} from 'react';
//import BlueDelete from './BlueDelete';
const Blue =()=>{
    let [add, setAdd] = useState("");
    let [list, setList] = useState([]);
    let textChange = (e) =>{
      setAdd(e.target.value);
    }
    let textAdd = () =>{
      if(add ===""){
        alert("please enter your item")
      }else{
        setList( (oldItem)=>{
          return [add, ...oldItem];
      })
      
      }
      setAdd(""); 
    }
    const deletBtn = (id) =>{
      
        setList((oldItem)=>{
          console.log("deleted...")
          return oldItem.filter((index)=>{
              return index !== id;
          })
        })
    }
    return(
        <>
          <h4 className="text-center m-1">This is Blue Tab</h4>
          <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <textarea className='input-add' onChange={textChange} value={add}></textarea><br/>
          <button className='add-btn' onClick={textAdd}>Add</button>
           <div>
               {
                list.map((items, id)=>{
                    return(
                        <>
                        <span className='para'>{items}</span>
                        <button className='delete-btn'  onClick={()=>deletBtn(id)}><i class="bi bi-trash3"></i></button>
                        <button className='delete-btn bg-success'><i class="bi bi-pencil-square"></i></button>
                        <br/>
                       
                    </>
                    )
                })
               }
           </div>
        </>
    )
}
export default Blue;
