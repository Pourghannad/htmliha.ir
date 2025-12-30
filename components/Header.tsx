import { Link } from "@heroui/link";

import { GithubIcon, Logo } from "./icons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-3">
      <Link
        href="http://github.com/pourghannad/htmliha.ir"
        size="lg"
        target="_blank"
      >
        <GithubIcon size={32} />
      </Link>
      <h1 className="text-3xl flex gap-3 items-center font-bold">
        {"اچ‌تی‌ام‌الی‌ها"}
        <Logo />
      </h1>
    </header>
  );
}
