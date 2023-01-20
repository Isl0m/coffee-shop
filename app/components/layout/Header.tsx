import { useUser } from "@supabase/auth-helpers-react";
import LogOut from "@ui/log-out/LogOut";
import Heading from "@ui/text/Heading";
import Link from "next/link";
import { FC, memo } from "react";
import { MenuItemProps } from "./layout.types";
import MenuItem from "./MenuItem";

const menu: MenuItemProps[] = [
  { name: "Home", link: "/" },
  { name: "Auth", link: "/auth" },
  { name: "Admin", link: "/admin" },
];

const Header: FC = () => {
  const user = useUser();
  return (
    <header className="flex items-center justify-between px-8">
      <Link href="/">
        <Heading isSmall>LOGO</Heading>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          {menu?.map((item) => (
            <MenuItem key={item.link} name={item.name} link={item.link} />
          ))}
          {user && (
            <li>
              <LogOut />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
