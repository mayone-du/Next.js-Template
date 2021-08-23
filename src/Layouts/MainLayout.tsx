import type { NextPage } from "next";

export const MainLayout = (page: NextPage) => {
  return (
    <div>
      <header>headerです</header>
      {/* <div>{data?.newsCount}件</div> */}
      <main>
        <div>
          {page}
          {/* <LayoutErrorBoundary>{page}</LayoutErrorBoundary> */}
        </div>
      </main>
      <footer>footerです</footer>
    </div>
  );
};
