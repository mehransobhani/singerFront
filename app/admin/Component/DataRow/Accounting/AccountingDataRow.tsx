import Tr from "@/app/Component/Table/Tr";
import Td from "@/app/Component/Table/Td";

interface props{
    id:number,
    amount:number,
    stock:number,
    date:string,
    description:string,
}
export  default function AccountingDataRow({item}:{item:props}){
    return(<>
        <Tr cssClass={item.amount>0?"bg-green-50 hover:bg-green-100":"bg-red-50 hover:bg-red-100"}>
            <Td>{item.amount}</Td>
            <Td>{item.stock}</Td>
            <Td>{item.date}</Td>
            <Td>{item.description}</Td>
        </Tr>
    </>)
}
