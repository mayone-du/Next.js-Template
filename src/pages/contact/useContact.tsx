import { useCallback } from "react";
import toast from "react-hot-toast";

export const useContact = () => {
  // お問い合わせの内容を送信
  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      toast.success("送信しました。");
    } catch (error) {
      console.error(error);
      toast.error("エラーが発生しました。");
    }
  }, []);

  return { handleSubmit };
};
