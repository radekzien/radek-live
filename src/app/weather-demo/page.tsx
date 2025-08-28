import { Rights } from "@/components/Rights";
import DemoInbox from "@/components/weather-demo/DemoInbox";
import ScriptForm from "@/components/weather-demo/ScriptForm";

export default function weatherDemo(){
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <p className="text-left font-semibold text-xl mb-2">Demo Inbox</p>
                <DemoInbox />
            </div>
            <ScriptForm />

            <Rights />
        </div>

    )
}