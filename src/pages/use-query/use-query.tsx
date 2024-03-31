import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import css from "./use-query.module.css";
import { apiProvider } from "../../api-provider/api-provider";

export type Todo = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
};

export function UseQuery() {
    const [count, setCount] = useState(1);

    const query = useQuery<Todo>({
        queryKey: ["getTodo", count],
        // staleTime: 5 * 1000, // 20s,
        refetchOnWindowFocus: false,

        queryFn: () => apiProvider.todo.get(count),
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => apiProvider.todo.delete(count),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["getAllTodos"],
            });
        },
    });

    const todosQuery = useQuery<Todo[]>({
        queryKey: ["getAllTodos", count],
        queryFn: () => apiProvider.todo.getAll(),
    });

    const renderCard = () => {
        if (query.isLoading) return <h4>Загрузка...</h4>;
        if (query.isError || !query.data) return <h4>Произошла ошибка</h4>;

        return (
            <div className={css.card}>
                <p>Title: {query.data.title}</p>
                <button onClick={() => mutation.mutate()}>Delete</button>
            </div>
        );
    };

    const renderList = () => {
        if (todosQuery.isLoading) return <h4>Загрузка...</h4>;
        if (todosQuery.isError || !todosQuery.data) return <h4>Произошла ошибка</h4>;

        return (
            <ul>
                {todosQuery.data.map((todo) => {
                    return (
                        <li key={todo.id} style={{ backgroundColor: Number(todo.id) === count ? "lime" : "" }}>
                            {todo.id} {todo.title}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div>
            <div className={css.line}>
                <button onClick={() => setCount(count + 1)}>+</button>
                <p> {count}</p>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            {renderCard()}
            {renderList()}
        </div>
    );
}

// const shuffleArray = (array: string[]): string[] => {
//     const result: string[] = [];
//     const copy = [...array];

//     while (copy.length > 0) {
//         const randomIndex = getRandomInRange(0, copy.length - 1);
//         const deleted = copy.splice(randomIndex, 1)[0];
//         result.push(deleted);
//     }

//     return result;
// };

// console.log(shuffleArray(["a1", "a2", "a3", "a4", "a5", "a6"]));

// function getRandomInRange(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
