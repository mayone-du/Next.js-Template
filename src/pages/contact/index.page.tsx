import type { CustomNextPage } from "next";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Layout } from "src/layouts";
import { SITE_NAME } from "src/utils/constants/SITE_NAME";

type ContactInputs = {
  title: string;
  content: string;
};

const ContactIndexPage: CustomNextPage = () => {
  const PAGE_NAME = "お問い合わせ";

  const { register, handleSubmit } = useForm<ContactInputs>();

  const onSubmit = (data: ContactInputs) => {
    const toastId = toast.loading("送信中...");
    try {
      alert(JSON.stringify(data));
      toast.success("送信しました", {
        id: toastId,
      });
    } catch (error) {
      console.error(error);
      toast.error("送信が失敗しました", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <NextSeo title={`${PAGE_NAME} | ${SITE_NAME}`} />
      <div>
        <h1>お問い合わせ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="block border"
            {...register("title", { required: true, maxLength: 100 })}
          />
          <textarea
            {...register("content", { required: true })}
            className="border resize-none"
          ></textarea>
          <button type="submit" className="block text-center rounded-md border">
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactIndexPage;

ContactIndexPage.getLayout = Layout;
