"use client"
import { useEffect, useState } from "react"
import { ChevronRight, Mail } from "lucide-react";
export default function demoInbox(){
    const [messages, setMessages] = useState<any[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<any>(null);

    useEffect(()=>{
        fetch('/api/inbox').then(res=>res.json()).then(data=>setMessages(data.messages))
    },[])

    return(
        <div>
            <div className = "m-2">
                {messages.map(msg=>(
                    <div key={msg.id} className="bg-[#4D4D4D40] p-4 rounded max-w-sm md:max-w-2xl mx-auto text-sm m-2 opacity-90 hover:scale-105 transition"
                    onClick={()=>setSelectedMessage(msg)}>
                        <div className="flex items-center justify-between">
                            <div>
                                <Mail className="w-5 h-5 inline mr-2" /> 
                                <strong className="text-xl block">{msg.subject}</strong>
                                <p className="italic">from {msg.from}</p>
                            </div>

                            <ChevronRight className="w-5 h-5 text-white ml-4" />
                        </div>

                        <p className="sm:hidden md:block mt-2">{msg.snippet}</p>
                    </div>
                ))}
            </div>
            
            {selectedMessage && (
                    <div
                    className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
                    onClick={() => setSelectedMessage(null)}
                    >
                    <div
                        className="bg-[#4D4D4D40] rounded p-6 w-full max-w-2xl max-h-[80vh] flex flex-col relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                        onClick={() => setSelectedMessage(null)}
                        className="absolute top-2 right-2 text-white hover:opacity-25 text-xl"
                        aria-label="Close"
                        >
                        ✕
                        </button>
                        <p className="text-2xl font-bold mb-2">{selectedMessage.subject}</p>
                        <p className="text-sm italic mb-4">From: {selectedMessage.from}</p>
                        <div
                            className="email-body overflow-y-auto flex-grow"
                            dangerouslySetInnerHTML={{ __html: selectedMessage.body }}
                        />
                    </div>
                    </div>
                )}
        </div>
    )
}