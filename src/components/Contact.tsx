import { FadeInSection } from "./ui/FadeInSection";

export const Contact = () => {
  return (
    <FadeInSection>
      <div key="contact" className="max-w-xl w-full mx-auto p-4 space-y-4">
        <form
          action= {process.env.FORM_CARRY}
          method="POST"
          className="flex flex-col space-y-4 bg-[#383535] rounded-md p-6 shadow-md"
        >
            <p className="font-bold text-lg">Fill out this form to send me an email! Please include your email if you wish for me to reply</p>
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
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </label>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 self-start"
          >
            Send
          </button>
        </form>
        </div>
    </FadeInSection>
  );
};
