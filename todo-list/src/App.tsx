import Input from './components/ui/Input.component';
import Button from './components/ui/Button.component';
import List from './components/List.component';

// import useState and useEffect
import { useState } from 'react';

// import state
import { useTodoStore } from './stores/todoStore';

const App = () => {
  // init state
  const [todos, createTodo]: any = useTodoStore(state => [state.todos, state.createTodo]);

  // state for input
  const [todoName, setTodoName] = useState('');

  // add Todo handler
  const addTodoHandler = () => {
    if (todoName !== '') {
      createTodo(todoName);
      setTodoName('');
    }
  };

  return (
    <div className="App w-full h-screen flex justify-center items-center bg-slate-800 px-4">
      <div className="block border-solid rounded-md border-2 border-slate-500 p-4 sm:w-[270px] md:w-[500px]">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient p-2">
          TODO-LIST
        </h1>
        <p className="text-sm text-white text-gradient p-2">
          Techs: ViteJS, ReactJS, TypeScript, Zustand, TailwindCSS.
        </p>
        <div className="h-[1px] w-full bg-gray-400 my-4"></div>
        <div className="flex justify-start items-start w-full">
          <Input
            type="text"
            placeholder="Enter what to do"
            name="todo-input"
            value={todoName}
            classProps=""
            onChangeHandler={setTodoName}
            title=""
          />
          <Button
            type="button"
            content="Add"
            name="add-button"
            classProps="max-w-[70px]"
            onClickHandler={addTodoHandler}
          />
        </div>
        <List list={todos} />
      </div>
    </div>
  );
};

export default App;
