import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { BchDcHeaderButtonModel } from './models/bch-dc-header-button.model';

@Component({
  selector: 'bch-dc-header',
  templateUrl: './bch-dc-header.component.html',
  styleUrls: ['./bch-dc-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BchDcHeaderComponent {
  @Input() public title: string = 'Title';
  @Input() public sideMenuWidth: number = 270;
  @Input() public buttons: BchDcHeaderButtonModel[];
  @Output() public pageSelected: EventEmitter<BchDcHeaderButtonModel> = new EventEmitter<BchDcHeaderButtonModel>();

  // constructor(@Inject(WORD_HANDLING_TOKEN) private errorHandlingService: WordsServerAbstractService) {}

  public menuOpened: boolean = false;

  // public ngOnInit(): void {
  //   this.errorHandlingService.fetchWords().pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.log('ERROR CAUGHT BY LIBRARY');
  //       this.title = error.message;
  //       return EMPTY;
  //     })
  //   ).subscribe((words: Word[]) => this.title = words[0].name)
  // }

  public selectPage(button: BchDcHeaderButtonModel): void {
    this.menuOpened = false;
    this.pageSelected.emit(button);
  }
}
