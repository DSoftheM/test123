import { Link, Outlet } from "react-router-dom";
import { sidebarLinks } from "../nav";
import css from "./sidebar.module.css";

export function Sidebar() {
    return (
        <div className={css.root}>
            <div className={css.sidebar}>
                {sidebarLinks.map((link, i) => {
                    return (
                        <Link key={i} to={link.url}>
                            {link.text}
                        </Link>
                    );
                })}
            </div>
            <div className={css.content}>
                <Outlet />
            </div>
        </div>
    );
}
