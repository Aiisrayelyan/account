"use client"

import axios from "axios"

interface Props{
    params: {id:number}
}
export default function Page({params}:Props){
    const handleUpdate = () => {
        axios
        .put("/users/"+params.id, {name:"OK"})
        .then(res => {
            console.log(res.data)
        })
    }
    return <>
        <h3>User Details No. {params.id}</h3>
        <button onClick={handleUpdate}>update</button>
    </>
}