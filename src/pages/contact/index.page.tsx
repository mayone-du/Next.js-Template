import type { CustomNextPage } from "next";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { Layout } from "src/layouts";

const ContactIndexPage: CustomNextPage = () => {
  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("お問い合わせ");
  }, []);
  return (
    <div>
      <h1>お問い合わせ</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="px-3 w-full">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              Nickname
            </label>
            <input
              className="block py-3 px-4 mb-3 w-full leading-tight text-gray-700 bg-gray-200 focus:bg-white rounded border border-gray-200 focus:border-gray-500 appearance-none focus:outline-none"
              id="nick"
              type="text"
            />
            <p className="text-xs italic text-gray-600">Remove if not needed</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="px-3 w-full">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="block py-3 px-4 mb-3 w-full leading-tight text-gray-700 bg-gray-200 focus:bg-white rounded border border-gray-200 focus:border-gray-500 appearance-none focus:outline-none"
              id="email"
              type="email"
            />
            <p className="text-xs italic text-gray-600">Some tips - as long as needed</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="px-3 w-full">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="block py-3 px-4 mb-3 w-full h-48 leading-tight text-gray-700 bg-gray-200 focus:bg-white rounded border border-gray-200 focus:border-gray-500 appearance-none focus:outline-none resize-none"
              id="message"
            ></textarea>
            <p className="text-xs italic text-gray-600">
              Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="py-2 px-4 font-bold text-white bg-green-400 rounded shadow focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactIndexPage;

ContactIndexPage.getLayout = Layout;
