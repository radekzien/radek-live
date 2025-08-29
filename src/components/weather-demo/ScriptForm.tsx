import { FadeInSection } from "../ui/FadeInSection";

export default function weatherDemo(){
    return(
        <FadeInSection>
            <div key="script-form" className="max-w-xl w-full mx-auto p-4 space-y-4">
                <form
                action= {"RUN SCRIPT"}
                method="POST"
                className="flex flex-col space-y-4 bg-[#383535] rounded-md p-6 shadow-md"
                >
                    <p className="font-bold text-lg">To run the script yourself, fill in your details. These will not be stored anywhere!</p>
                    <label className="text-sm font-medium text-white">
                        E-mail
                        <input
                        type="text"
                        name="email"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        />
                    </label>

                    <label className="text-sm font-medium text-white">
                            Name
                            <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            />
                    </label>

                        <label className="text-sm font-medium text-white">
                            Location
                            <input
                            type="text"
                            name="location"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                            />
                    </label>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 self-start"
                    >
                        Run
                    </button>
                </form>
            </div>
        </FadeInSection>
    )
}