import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Links = () => {
    return(
        <div className="flex relative space-x-4 pl-4">
            <a
                    href="https://www.linkedin.com/in/radoslaw-zienkiewicz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="w-6 h-6 hover:scale-110 transition duration-300 text-white-600" />
                </a>

                <a
                    href="https://github.com/radekzien"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="w-6 h-6 hover:scale-110 transition duration-300 text-white-600" />
                </a>
        </div>
    )
}