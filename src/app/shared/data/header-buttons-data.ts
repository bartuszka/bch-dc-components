import {
  BchDcHeaderButtonModel
} from '../../../../projects/bch-dc-components/src/lib/bch-dc-header/models/bch-dc-header-button.model';
import {
  BchDcNavigationLinkModel
} from '../../../../projects/bch-dc-components/src/lib/bch-dc-header/models/bch-dc-navigation-link.model';

export const headerButtonsData: BchDcHeaderButtonModel[] = [
  {
    message: 'Documentation',
    url: BchDcNavigationLinkModel.DOCUMENTATION
  },
  {
    message: 'About Library',
    url: BchDcNavigationLinkModel.ABOUT_LIBRARY
  }
];
