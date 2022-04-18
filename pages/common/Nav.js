import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>메인</Link> </li>
        <li className={style.li}> <Link href='/admin/dashboard'>대쉬보드</Link> </li>
        <li className={style.li}> <Link href='/basic/calc'>계산기</Link> </li>
        <li className={style.li}> <Link href='/basic/counter'>카운터</Link> </li>
        <li className={style.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={style.li}> <Link href='/board/addArticle'>게시글 등록</Link> </li>
        <li className={style.li}> <Link href='/board/getArticles'>게시글 목록</Link> </li>
        <li className={style.li}> <Link href='/board/modifyArticle'>게시글 수정</Link> </li>
        <li className={style.li}> <Link href='/board/removeArticle'>게시글 삭제</Link> </li>
        <li className={style.li}> <Link href='/game/addgame'>게임 등록</Link> </li>
        <li className={style.li}> <Link href='/game/getGames'>게임 목록</Link> </li>
        <li className={style.li}> <Link href='/game/modifyGame'>게임 수정</Link> </li>
        <li className={style.li}> <Link href='/game/removeGame'>게임 삭제</Link> </li>
        <li className={style.li}> <Link href='/game/addTeam'>팀 등록</Link> </li>
        <li className={style.li}> <Link href='/game/getTeams'>팀 목록</Link> </li>
        <li className={style.li}> <Link href='/game/modifyTeam'>팀 수정</Link> </li>
        <li className={style.li}> <Link href='/game/removeTeam'>팀 삭제</Link> </li>
        <li className={style.li}> <Link href='/todo/addTodo'>투두추가</Link> </li>
        <li className={style.li}> <Link href='/todo/getTodos'>투두목록</Link> </li>
        <li className={style.li}> <Link href='/todo/modifyTodo'>투두수정</Link> </li>
        <li className={style.li}> <Link href='/todo/removeTodo'>투두삭제</Link> </li>
        <li className={style.li}> <Link href='/user/login'>로그인</Link> </li>
        <li className={style.li}> <Link href='/user/logout'>로그아웃</Link> </li>
        <li className={style.li}> <Link href='/user/join'>회원가입</Link> </li>
        <li className={style.li}> <Link href='/user/getUsers'>사용자목록</Link> </li>
        <li className={style.li}> <Link href='/user/updateUser'>사용자목록</Link> </li>
        <li className={style.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li>
      </ul>
    </nav>
  );
};