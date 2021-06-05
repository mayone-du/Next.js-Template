import Link from "next/link";

export const Header: React.VFC = () => {
  return (
    <div>
      <header>
        <nav>
          <div>logo</div>
          <ul>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
