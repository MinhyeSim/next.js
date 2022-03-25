import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>to A</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;