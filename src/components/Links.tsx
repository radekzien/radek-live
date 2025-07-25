import { githubMarkWhite, linkedinlogo } from "@/data/ImageLinks"
import { Link } from "lucide-react"

export const Links = () => {
    return(
        <div className="flex relative space-x-4 pl-4">
            <a
                    href="https://www.linkedin.com/in/radoslaw-zienkiewicz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedinlogo} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition duration-300" />
                </a>

                <a
                    href="https://github.com/radekzien"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubMarkWhite} alt="GitHub" className="w-6 h-6 hover:scale-110 transition duration-300" />
                </a>
        </div>
    )
}