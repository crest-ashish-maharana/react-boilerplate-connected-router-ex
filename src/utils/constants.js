// Some Examples of Constants you can configure for your project
export const BASE_URL = process.env.APP_URL;
export const UserRole = {
    Admin: 0,
    Editor: 1,
};
export const defaultMenuType = 'menu-default';
export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
    { id: 'en', name: 'English - LTR', direction: 'ltr' },
    { id: 'es', name: 'Español', direction: 'ltr' },
    { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
];
export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = true;
export const defaultColor = 'light.purplemonster';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
    'bluenavy',
    'blueyale',
    'blueolympic',
    'greenmoss',
    'greenlime',
    'purplemonster',
    'orangecarrot',
    'redruby',
    'yellowgranola',
    'greysteel',
];