import React,{useState} from "react";


export default function TodoList() {
    const [inputs,setInputs] = useState({})
    const {team} = inputs;

    return (<><h1>todo-list</h1>
    
    <label><b>name</b></label>
    <input id = "name" type=""/><br/>
    
    </>
    )
}
