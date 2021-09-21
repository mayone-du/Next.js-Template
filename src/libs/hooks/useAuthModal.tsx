import { useReactiveVar } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { isOpenAuthModalVar } from "src/graphql/apollo/cache";
import { handleSignIn } from "src/libs/functions/handleSignIn";

export const useAuthModal = () => {
  const isOpenAuthModal = useReactiveVar(isOpenAuthModalVar);

  // 認証モーダルの開閉
  const handleOpenModal = useCallback(() => {
    isOpenAuthModalVar(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    isOpenAuthModalVar(false);
  }, []);

  // モーダルの中身のボタンをクリックした時
  const handleClick = useCallback(async () => {
    await handleSignIn();
    handleCloseModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // コンポーネントを返す関数
  const renderModal = () => {
    return (
      <Transition appear show={isOpenAuthModal} as="div">
        <Dialog
          as="div"
          className="overflow-y-auto fixed inset-0 z-10 bg-gray-400 bg-opacity-40"
          onClose={handleCloseModal}
        >
          <div className="flex justify-center items-center px-4 min-h-screen">
            <Transition.Child
              as="div"
              enter="ease-out duration-50"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as="div"
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="overflow-hidden p-6 m-auto w-80 sm:w-96 bg-white rounded-lg shadow-xl transition-all transform">
                <Dialog.Title as="h3" className="text-2xl font-bold text-center text-gray-900">
                  TODO App
                </Dialog.Title>

                <p className="mt-4 text-xs text-gray-500">コンセプト</p>

                <div className="mt-4">
                  <button
                    type="button"
                    className="flex items-center py-2 px-4 mx-auto bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 focus-visible:ring-2 active:ring-2 ring-blue-200 focus-visible:ring-blue-300 shadow hover:shadow-md transition-all outline-none"
                    onClick={handleClick}
                  >
                    <FcGoogle className="w-6 h-6" />
                    <span className="mx-4 font-bold">SignIn with Google</span>
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  <Link href="/terms">
                    <a
                      // onClick={handleCloseModal}
                      className="hover:text-blue-500 underline hover:no-underline transition-colors"
                    >
                      利用規約
                    </a>
                  </Link>
                  、
                  <Link href="/privacy-policy">
                    <a
                      // onClick={handleCloseModal}
                      className="hover:text-blue-500 underline hover:no-underline transition-colors"
                    >
                      プライバシー・ポリシー
                    </a>
                  </Link>
                  に同意したうえでログインしてください
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return {
    handleOpenModal,
    renderModal,
  };
};
