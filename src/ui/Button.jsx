import { Link } from "react-router-dom"

export default function Button({children,disabled,to,type,onClick}){
    const className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    const base="inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    const styles={
    primary:base+ " px-4 py-3 md:px-6 md:py-4",
    small:base +" px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2.5 text-sm"
}
    if (to)
    return <Link className={styles[type]} to={to}>{children}</Link>
   if(onClick)
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    )
    return (
        <button  disabled={disabled} className={className}>
            {children}
        </button>
    )
}