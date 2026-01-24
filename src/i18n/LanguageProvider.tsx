import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import {
  fallbackLocale,
  Locale,
  Messages,
  messages,
  supportedLocales,
} from './translations';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  messages: Messages;
  loading: boolean;
  availableLocales: typeof supportedLocales;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const PREFERRED_LOCALE_KEY = 'preferred_locale';
const GEO_COUNTRY_ENDPOINT = 'https://ipapi.co/country/';
const GEO_TIMEOUT_MS = 2500;

const isLocale = (value: string | null | undefined): value is Locale =>
  value === 'en' || value === 'ka';

const detectNavigatorLocale = (): Locale => {
  const candidates = [
    ...((navigator.languages || []) as string[]),
    navigator.language,
  ].filter(Boolean);

  const match = candidates.find((lang) => lang?.toLowerCase().startsWith('ka'));
  return match ? 'ka' : fallbackLocale;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(fallbackLocale);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(PREFERRED_LOCALE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      setLoading(false);
      return;
    }

    const navigatorLocale = detectNavigatorLocale();

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      GEO_TIMEOUT_MS,
    );

    fetch(GEO_COUNTRY_ENDPOINT, {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-store',
    })
      .then((response) => (response.ok ? response.text() : null))
      .then((countryCode) => {
        if (countryCode?.trim().toUpperCase() === 'GE') {
          setLocaleState('ka');
        } else {
          setLocaleState(navigatorLocale);
        }
      })
      .catch(() => {
        setLocaleState(navigatorLocale);
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(PREFERRED_LOCALE_KEY, locale);
  }, [locale]);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      messages: messages[locale],
      loading,
      availableLocales: supportedLocales,
    }),
    [locale, loading],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
