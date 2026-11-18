import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { en } from './en';
import { pt } from './pt';
import type { Locale, TranslationDictionary } from './types';

export type { Locale, PortfolioCopy, PortfolioId, TranslationDictionary } from './types';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'pt'];

const dictionaries: Record<Locale, TranslationDictionary> = {
  en,
  pt,
};

export function getTranslations(locale: Locale): TranslationDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function getLocaleUrl(locale: Locale): string {
  return getRelativeLocaleUrl(locale);
}

export function getAbsoluteUrl(locale: Locale): string {
  return getAbsoluteLocaleUrl(locale);
}
