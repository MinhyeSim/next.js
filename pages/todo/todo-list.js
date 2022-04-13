import axios from "axios";
import { useEffect, useState } from "react";

const Table = ({data}) => (<>
    <table>
        <thead>
            <tr>
                <th>일정</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>일정이 없습니다</td>
            </tr>
            <tr>
                <td>일정이 있습니다</td>
            </tr>
        </tbody>
    </table>
    </>
)

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