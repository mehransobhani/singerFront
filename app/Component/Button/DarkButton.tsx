interface props{
    title:string,
    click?:any
    cssClass?:string
}
export default  function DarkButton({title,click,cssClass}:props)
{
    return (
        <button
            type="submit"
            onClick={click}
            className={["rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700  focus:border-0  focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0" , cssClass ].join(" ")}
        >
            {title}
        </button>
    )
}
