import axios from 'axios';
import { useEffect, useState } from 'react';
import style from 'user/style/UserList.module.css'

const Table = ({columns, colspan, data}) => {
    return (
        <table className={style.table}>
        <thead>
            {/**<th key={column} className={tableStyles.td}><column}></th> */}
            <tr className={style.tr}>
            {columns.map((column) => (
                    <th key={column.username} className={style.td}>{column}</th>
            ))}
            </tr>        
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={style.tr}>
                                <td colSpan={colspan} className={style.td}>데이터가 없습니다.</td>
                                </tr>              
                                :data.map((user) => (
                                <tr className={style.tr} key={user.username}>
                                    <td className={style.td}>{user.username}</td>
                                    <td className={style.td}>{user.password}</td>
                                    <td className={style.td}>{user.name}</td>
                                    <td className={style.td}>{user.telephone}</td>
                                </tr>                
                    ))}
            </tbody>
        </table>
    );
}

export default function UserList() {
    const columns= ["Username", "Password", "Name", "Telephone"];   
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list')
        .then(res=>{setData(res.data.users)}).catch(err=>{})
    },[])
    
    return ( <>
        <h1>사용자목록</h1>
        <div className={style.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)

}