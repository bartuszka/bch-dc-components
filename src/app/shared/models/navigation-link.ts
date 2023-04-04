export enum NavigationLink {
  DOCUMENTATION = '/documentation',
  ABOUT_LIBRARY = '/about-library',
}

export const headerNavigationLinkSet: Set<NavigationLink> = new Set(Object.values(NavigationLink));
