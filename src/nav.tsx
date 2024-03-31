import { ReactNode } from "react";
import { Main } from "./pages/main";
import { UseQuery } from "./pages/use-query/use-query";

export const Nav = {
    main: "/",
    useQuery: "/useQuery",
};

type Link = {
    url: string;
    text: string;
    element: ReactNode;
};

export const sidebarLinks: Link[] = [
    { text: "Главная страница", url: Nav.main, element: <Main /> },
    { text: "Запросы", url: Nav.useQuery, element: <UseQuery /> },
];
