import { Rights } from "@/components/Rights";
import DemoInbox from "@/components/weather-demo/DemoInbox";
import DemoNavBar from "@/components/DemoNavBar";
import { FaGithub } from "react-icons/fa";

export default function WeatherDemo(){
    return (
        <div id="root" className="p-4">
            <DemoNavBar />
            <div className="flex flex-col items-center justify-center p-4 pt-16">
                <div className="w-full max-w-2xl">
                    <p className="text-left font-semibold text-xl mb-2">Demo Inbox</p>
                    <p className="flex">Below you can see emails fetched from a real inbox, showing the end result of the automation project.
                    Emails and their respective locations are fetched from a database. The weather data for each location
                    is fetched from a weather API and stored. The script then compares where each email is located and
                    generates an email using the fetched weather data. The email is then sent to the respective email address.

                    You can visit the github repository for this project by pressing the github icon below.
                    </p>
                    <a href={'https://github.com/radekzien/weather-automation'} target="_blank" rel="noopener noreferrer" 
                    className="mt-2 inline-flex items-center" aria-label="View the GitHub Repository"> 
                        <FaGithub className="w-6 h-6 hover:scale-110 transition-all duration-300" />
                    </a>
                    <DemoInbox />
                </div>
                <Rights />
            </div>
        </div>
    )
}