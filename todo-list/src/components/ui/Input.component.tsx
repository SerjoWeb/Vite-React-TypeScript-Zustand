const Input = (
  { type, placeholder, name, value, classProps, onChangeHandler, title }: 
  { type: string, placeholder: string, name: string, value: string, classProps: string, onChangeHandler: any, title: string }
) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={`
        my-2 w-full rounded-l p-2 outline-none 
        border-none bg-transparent text-white 
        text-sm white-glassmorphism mr-[2px]
        focus:outline-[#28364E] ${classProps}
      `}
      onChange={(e) => onChangeHandler(e.target.value)}
      title={title}
    />
  );
};
  
export default Input;
