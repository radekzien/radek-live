"use client"
import { use, useEffect, useState } from "react"
export default function demoInbox(){
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(()=>{
        fetch('/api/inbox').then(res=>res.json()).then(data=>setMessages(data.messages))
    },[])

    return(
        <ul>
            {messages.map(msg=>(
                <li key={msg.id}>
                    <strong>{msg.subject}</strong> from {msg.from}
                    <p>{msg.snippet}</p>
                </li>
            ))}
        </ul>
    )
}