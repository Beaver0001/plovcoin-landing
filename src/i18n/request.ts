import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = (locale && ['en', 'ru'].includes(locale)) ? locale : 'en';
  console.log('Requested locale:', validLocale); // Отладка
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});