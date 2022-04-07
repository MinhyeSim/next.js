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
            <tr className={style.tr}>
                <td colSpan={colspan} className={style.td}>데이터가 없습니다</td>
            </tr>    
        </tbody>
    </table>
    );
}

export default function UserList() {
    const columns= ["Username", "Password", "Name", "Telephone"];    
    return ( <>
    <h1>UserList</h1>
    <div className={style.td}>
    <Table columns={columns} colspan={4}/>
    </div>
    </>)

}