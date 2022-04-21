import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>메인</Link> </li>
        <li className={style.li}> <Link href='/admin/dashboard'>대쉬보드</Link> </li>
        <li className={style.li}> <Link href='/basic/basicNav'>BASIC</Link> </li>
        <li className={style.li}> <Link href='/board/boardNav'>게시판</Link> </li>
        <li className={style.li}> <Link href='/game/gameNav'>게임 등록</Link> </li>
        <li className={style.li}> <Link href='/todo/todoNav'>스케줄관리</Link> </li>
        <li className={style.li}> <Link href='/user/userNav'>사용자관리</Link> </li>
      </ul>
    </nav>
  );
};