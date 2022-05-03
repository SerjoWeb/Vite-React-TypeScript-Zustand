import Todo from "./Todocomponent";

const List = (
  { list }: 
  { list: any }
) => {
  return (
    <div className="w-full flex flex-col justify-start items start my-2">
      {
        list.length 
          ? 
          list.map((todo: any, index: number) => (
            <Todo key={`todo_${index}`} todo={todo} />
          ))
          :
          <p className="text-sm text-white text-gradient p-2">There are no todo's yet!</p>
      }
    </div>
  );
};
  
export default List;
