import Link from "next/link";
import { memo } from "react";
import { HEADER_MENUS } from "src/utils/HEADER_MENUS";

export const Header: React.VFC = memo(() => {
  return (
    <header className="px-32">
      <nav className="flex justify-between items-center">
        <div className="m-2">
          <Link href="/">
            <a>logo</a>
          </Link>
        </div>
        <ul className="flex">
          {HEADER_MENUS.map((menu, index) => {
            return (
              <li key={index.toString()} className="m-2">
                <Link href={menu.href}>
                  <a>{menu.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = "Header";
