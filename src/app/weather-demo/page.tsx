import { Rights } from "@/components/Rights";
import DemoInbox from "@/components/weather-demo/DemoInbox";
import ScriptForm from "@/components/weather-demo/ScriptForm";
import DemoNavBar from "@/components/DemoNavBar";

export default function weatherDemo(){
    return (
        <div id="root" className="p4">
            <DemoNavBar />
            <div className="flex flex-col items-center justify-center p-4 pt-16">
                <div className="w-full max-w-2xl">
                    <p className="text-left font-semibold text-xl mb-2">Demo Inbox</p>
                    <DemoInbox />
                </div>
                <ScriptForm />

                <Rights />
            </div>
        </div>
    )
}