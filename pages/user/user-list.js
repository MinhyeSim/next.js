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
                    <th key={column.userid} className={style.td}>{column}</th>
            ))}
            </tr>        
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={style.tr}>
                                <td colSpan={colspan} className={style.td}>데이터가 없습니다.</td>
                                </tr>              
                                :data.map((user) => (
                                <tr className={style.tr} key={user.userid}>
                                    <td className={style.td}>{user.userid}</td>
                                    <td className={style.td}>{user.name}</td>
                                    <td className={style.td}>{user.email}</td>
                                    <td className={style.td}>{user.phone}</td>
                                    <td className={style.td}>{user.birth}</td>
                                    <td className={style.td}>{user.address}</td>
                                </tr>                
                    ))}
            </tbody>
        </table>
    );
}

export default function UserList() {
    const columns= ["사용자 ID",  "이메일","이름", "연락처", "생일", "주소"];   
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list')
        .then(res=>{setData(res.data.users)}).catch(err=>{})
    },[])
    
    return ( <>
        <h1>사용자 목록</h1>
        <div className={style.td}>
        <Table columns={columns} colspan={6} data={data}/>
        </div>
        </>)    

}