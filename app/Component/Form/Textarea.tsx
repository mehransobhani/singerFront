interface props{
    value:string,
    name:string,
    placeHolder:string,
    cssClass?:string
}
export default function Textarea({value,name,placeHolder,cssClass}:props)
{
    return (<textarea
        name={name}
                      className={["block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   focus:outline focus:outline-1 focus:outline-rose-500 ",cssClass].join(" ")}
                      placeholder={placeHolder}>
        {value}
    </textarea>)
}
