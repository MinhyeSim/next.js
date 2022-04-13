import react from 'react';
import { useEffect, useState } from "react";
import Head from "next/head";

const Table = ({colspan, data}) => {

}

export default function TodoList(){
    const column=["Todo"];
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/todo-list')
        .then(res=>{setData(res.data.todos)})

    },[])
    return(<><h1>스케쥴</h1>
    <Table data={data}></Table>
    </>)
}