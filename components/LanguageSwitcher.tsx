'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="border rounded-md p-1 bg-white text-sm text-gray-700"
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export default LanguageSwitcher;