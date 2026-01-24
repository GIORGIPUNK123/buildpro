import { useLanguage } from '../i18n/LanguageProvider';
import type { Locale } from '../i18n/translations';

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales, loading } = useLanguage();

  return (
    <label className='flex items-center gap-2 text-sm font-medium text-gray-700'>
      <span className='sr-only'>Language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        disabled={loading}
        className='rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm shadow-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 disabled:cursor-not-allowed disabled:opacity-70'
      >
        {availableLocales.map((entry) => (
          <option key={entry.value} value={entry.value}>
            {entry.nativeName}
          </option>
        ))}
      </select>
      {loading && (
        <span className='text-xs text-gray-500'>Detecting locale…</span>
      )}
    </label>
  );
};
