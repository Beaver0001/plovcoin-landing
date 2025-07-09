import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ params }) => {
  const locale = params?.locale || 'en'; // Получаем локаль из params
  console.log('Requested locale:', locale); // Отладка
  const validLocale = ['en', 'ru'].includes(locale) ? locale : 'en';
  console.log('Resolved locale:', validLocale); // Отладка
  try {
    const messages = (await import(`../../messages/${validLocale}.json`)).default;
    console.log('Loaded messages:', messages); // Отладка
    return {
      locale: validLocale,
      messages,
    };
  } catch (error) {
    console.error('Failed to load messages for locale:', validLocale, error);
    return {
      locale: validLocale,
      messages: {},
    };
  }
});