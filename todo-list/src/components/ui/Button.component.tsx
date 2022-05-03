const Button = (
  { type, content, name, classProps, onClickHandler }: 
  { type: any, content: any, name: string, classProps: string, onClickHandler: any }
) => {
  return (
    <button
      type={type}
      name={name}
      className={`
        my-2 w-full p-2 border-l outline-none 
        border-none bg-transparent text-white 
        text-sm white-glassmorphism 
        hover:bg-[#28364E] ${classProps}
      `}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
};

export default Button;
