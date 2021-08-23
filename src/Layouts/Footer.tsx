import { memo } from "react";

export const Footer: React.VFC = memo(() => {
  return (
    <footer>
      <p className="py-6 text-center">copyright&copy;</p>
    </footer>
  );
});

Footer.displayName = "Footer";
