import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import moment from 'moment';
import Input from './ui/Input.component';
import Button from "./ui/Button.component";

// import useState and useEffect
import { useState } from 'react';

// import state
import { useTodoStore } from '../stores/todoStore';

const Todo = (
  { todo }: 
  { todo: any }
) => {
  // init state
  const [updateTodo, deleteTodo]: any = useTodoStore(state => [state.updateTodo, state.deleteTodo]);

  // set state
  const [updatedTodoName, setUpdatedTodoName] = useState(todo.name);

  // update Todo handler
  const updateTodoHandler = (id: string) => {
    if (updatedTodoName !== '') {
      setUpdatedTodoName(updatedTodoName);
      updateTodo(id, updatedTodoName);
    }
  };

  // delete Todo handler
  const deleteTodoHandler = (id: string) => {
    if (id) {
      deleteTodo(id);
    }
  };

  return (
    <div className="flex justify-start items-start w-full my-[2px]">
      <div className="
        bg-[#28364E] w-full p-2 bg-transparent 
        text-white text-sm white-glassmorphism
        mr-[2px] min-h-[40px]
      ">
        <div className="w-full flex justify-between items-center">
        <Input
            type="text"
            placeholder={updatedTodoName}
            name="todo-input"
            value={updatedTodoName}
            classProps="flex-1 pr-[15px] truncate ... max-w-[310px] todo-input"
            onChangeHandler={setUpdatedTodoName}
            title={updatedTodoName}
          />
          <span className="text-xs">{ moment(todo.created).format("MM/DD/YYYY") }</span>
        </div>
      </div>
      <Button
        type="button"
        content={<AiFillEdit className="tex-white text-sm" fontSize={25} />}
        name="edit-button"
        classProps="my-0 mr-[2px] min-h-[40px] max-w-[34px]"
        onClickHandler={() => updateTodoHandler(todo.id)}
      />
      <Button
        type="button"
        content={<AiFillDelete className="tex-white text-sm" fontSize={25} />}
        name="delete-button"
        classProps="my-0 min-h-[40px] max-w-[34px]"
        onClickHandler={() => deleteTodoHandler(todo.id)}
      />
    </div>
  );
};

export default Todo;
