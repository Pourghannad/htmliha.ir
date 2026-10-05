import { GithubIcon, Logo, LogoType } from "./icons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 safe-top">
      <h1
        className={`text-xl sm:text-2xl md:text-3xl gap-2 sm:gap-3 flex items-center font-bold`}
      >
        <span className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex-shrink-0">
          <Logo />
        </span>
        <span className="w-24 sm:w-32 md:w-40">
          <LogoType />
        </span>
      </h1>
      <a
        aria-label="htmliha source page on github"
        className="flex-shrink-0"
        href="http://github.com/pourghannad/htmliha.ir"
        rel="noreferrer"
        target="_blank"
      >
        <GithubIcon className="sm:w-8 sm:h-8" size={28} />
      </a>
    </header>
  );
}
