import axios from "axios";
import { Todo } from "../pages/use-query/use-query";

export const apiProvider = {
    todo: {
        get: (count: number) => axios.get<Todo>("http://localhost:3000/todos/" + count).then((res) => res.data),
        getAll: () => axios.get<Todo[]>("http://localhost:3000/todos/").then((res) => res.data),
        delete: (count: number) => axios.delete<Todo>("http://localhost:3000/todos/" + count).then((res) => res.data),
    },
};
