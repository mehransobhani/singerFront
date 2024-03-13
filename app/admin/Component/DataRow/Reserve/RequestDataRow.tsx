import Timer from "@/app/Component/Timer";
import Tr from "@/app/Component/Table/Tr";
import Td from "@/app/Component/Table/Td";
import DarkButton from "@/app/Component/Button/DarkButton";
import RoseButton from "@/app/Component/Button/RoseButton";

interface props{
    id:number,
    name:string,
    date:string,
    province:string,
    city:string,
    expire:number
}
export  default function RequestDataRow({item}:{item:props}){
    return(<>
        <Tr>
            <Td>{item.name}</Td>
            <Td>{item.province}</Td>
            <Td>{item.city}</Td>
            <Td>{item.date}</Td>
            <Td>
                <Timer timeStamp={item.expire*1000}/>
            </Td>

            <Td>
                <RoseButton title={"تایید"}/>

            </Td>

            <Td>
                <DarkButton title={"رد"}/>
            </Td>
        </Tr>
    </>)
}
