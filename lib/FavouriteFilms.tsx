import { useEffect, useState } from "react";
interface Fetch {
    id:number
    url:string
    method:string
}
export function AddDeleteFavouriteFilm({id,url}:Fetch){
    const[list,setList] = useState<[]>([])
    useEffect(()=>{
        const fetchFilm = async()=>{
            try {
                const res=await fetch(url)

                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`)
                }
                const data=await res.json()
                setList(data)
            }
            catch(err) {
                console.error(err instanceof Error ? err.message: "Неизвестная ошибка")
            }

        }
        fetchFilm()
    },[])
}