// import zustand store
import create from 'zustand';

// import moment
import moment from 'moment';

// import uuidv4
import { v4 as uuidv4 } from 'uuid';

// init interface for todo item
interface Todo {
    id: string;
    name: string;
    created: any;
};

// init interface for todo store
interface TodoStore {
    todos: Todo[];
    createTodo: (name: string) => void;
    updateTodo: (id: string, name: string) => void;
    deleteTodo: (id: string) => void;
};

// init store of type TodoStore
export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [],
    createTodo: (name: string) => {
        const { todos } = get();
        const newTodo: Todo = {
            id: `${uuidv4()}_${new Date()}`,
            name: name,
            created: moment(new Date()).toDate()
        };

        set((state) => ({
            todos: [...state.todos, newTodo as Todo]
        }));
    },
    updateTodo: (id: string, name: string) => {
        set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? ({...todo, name: name} as Todo) : todo)
        }));
    },
    deleteTodo: (id: string) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }));
    }
}));
