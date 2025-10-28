import { Button } from "@heroui/button";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-3">
      <h1 className="text-3xl font-bold">اچ‌تی‌ام‌الی‌ها</h1>
      <Button color="primary">ورود\ثبت‌نام</Button>
    </header>
  );
}
