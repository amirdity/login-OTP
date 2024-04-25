import React, { useRef } from "react";
import {firestore} from '../firebase'
import {addDoc, collection} from '@firebase/firestore'
function Something() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages")

  const handleSave = async(e)=>{
    e.preventDefault();
    console.log(messageRef.current.value)
    let data = {
      message: messageRef.current.value
    }
    try{
      addDoc(ref, data)
    }catch (e){
      console.log(e)
    }
  }
  return (
  <div>
    
    <form onSubmit={handleSave}>
      <label className="dark:text-white"> enter yout message</label>
      <input type="text" ref={messageRef}/>
      <button  type="submit">save</button>
    </form>

  </div>);
}

export default Something;
