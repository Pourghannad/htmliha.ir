import {Button} from '@heroui/button'; 
export default function Header() {
  return (
      <header className='flex mt-6 justify-between items-center'>
        <Button>{'ورود / ثبت‌نام'}</Button>
        <h1 className='text-4xl font-bold'>اچ‌تی‌ام‌الی‌ها</h1>
      </header>
  );
}
