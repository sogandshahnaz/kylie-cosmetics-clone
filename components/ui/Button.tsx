type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
}


export default function Button({children}: ButtonProps) {
  return (
    <button className="bg-white py-2 px-5 cursor-pointer rounded-sm text-sm hover:bg-[#393939] hover:text-white transition-colors duration-200 text-[#393939] ">
        {children}
    </button>
  )
}

export function Button2({children, disabled}: ButtonProps) {
  return (
    <button disabled={disabled} className="border py-2 px-7 cursor-pointer rounded-sm text-sm hover:bg-[#393939] hover:text-white transition-colors duration-200 text-[#393939] 
        disabled:cursor-not-allowed
        disabled:hover:bg-transparent
        disabled:hover:text-[#393939]">
        {children}
    </button>
  )
}

export function Button3({children}: ButtonProps) {
  return (
    <button className="bg-[#393939] py-2 px-8 cursor-pointer rounded-sm text-sm hover:bg-white hover:text-[#393939] transition-colors duration-200 text-white ">
        {children}
    </button>
  )
}

export function Button4({children}: ButtonProps) {
  return (
    <button className="border py-2 px-7 cursor-pointer rounded-sm text-sm hover:bg-[#393939] hover:border-[#393939] hover:text-white transition-colors duration-200 text-white ">
        {children}
    </button>
  )
}
