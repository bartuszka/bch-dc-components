enum LibraryColor {
  COLOR_PRIMARY_DARK = 'color-primary-dark',
  COLOR_PRIMARY_MEDIUM = 'color-primary-medium',
  COLOR_PRIMARY_LIGHT = 'color-primary-light',
  COLOR_SECONDARY_DARK = 'color-secondary-dark',
  COLOR_SECONDARY_MEDIUM = 'color-secondary-medium',
  COLOR_SECONDARY_LIGHT = 'color-secondary-light',
  COLOR_WARNING_YELLOW = 'color-warning-yellow',
  COLOR_ERROR_RED = 'color-error-red',
  COLOR_SUCCESS_GREEN = 'color-success-green',
  COLOR_WHITE = 'color-white',
  COLOR_LIGHT_GRAY = 'color-light-gray',
  COLOR_MEDIUM_GRAY = 'color-medium-gray',
}

export enum DoubleColorMode {
  BASIC = 'BASIC',
  BASIC_LIGHT = 'BASIC_LIGHT',
  PRIMARY_DARK = 'PRIMARY_DARK',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  SECONDARY_DARK = 'SECONDARY_DARK',
  SECONDARY_LIGHT = 'SECONDARY_LIGHT',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DISABLED = 'DISABLED'
}

export interface DoubleColorData {
  textColor: LibraryColor,
  backgroundColor: LibraryColor
}

export const doubleColorModes: Map<DoubleColorMode, DoubleColorData> = new Map();

doubleColorModes.set(DoubleColorMode.BASIC, {
  textColor: LibraryColor.COLOR_PRIMARY_DARK,
  backgroundColor: LibraryColor.COLOR_WHITE
});

doubleColorModes.set(DoubleColorMode.PRIMARY_DARK, {
  textColor: LibraryColor.COLOR_WHITE,
  backgroundColor: LibraryColor.COLOR_PRIMARY_DARK
});

doubleColorModes.set(DoubleColorMode.PRIMARY_LIGHT, {
  textColor: LibraryColor.COLOR_PRIMARY_DARK,
  backgroundColor: LibraryColor.COLOR_PRIMARY_MEDIUM
});


doubleColorModes.set(DoubleColorMode.SECONDARY_DARK, {
  textColor: LibraryColor.COLOR_WHITE,
  backgroundColor: LibraryColor.COLOR_SECONDARY_DARK
});

doubleColorModes.set(DoubleColorMode.SECONDARY_LIGHT, {
  textColor: LibraryColor.COLOR_SECONDARY_DARK,
  backgroundColor: LibraryColor.COLOR_SECONDARY_MEDIUM
});

doubleColorModes.set(DoubleColorMode.DISABLED, {
  textColor: LibraryColor.COLOR_MEDIUM_GRAY,
  backgroundColor: LibraryColor.COLOR_LIGHT_GRAY
});
