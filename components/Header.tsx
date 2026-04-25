import { GithubIcon, Logo, LogoType } from "./icons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-3">
      <h1 className={`text-3xl gap-3 flex items-center font-bold`}>
        <Logo />
        <LogoType />
      </h1>
      <a
        aria-label="htmliha source page on github"
        href="http://github.com/pourghannad/htmliha.ir"
        rel="noreferrer"
        target="_blank"
      >
        <GithubIcon size={32} />
      </a>
    </header>
  );
}
