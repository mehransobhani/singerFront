interface props{
    title:string,
    value:string
}
export default function ListItem({title,value}:props)
{
    return (
        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
        <p className="text-gray-600">
            {title}
        </p>
        <p>
            {value}
        </p>
    </div>
    )
}
