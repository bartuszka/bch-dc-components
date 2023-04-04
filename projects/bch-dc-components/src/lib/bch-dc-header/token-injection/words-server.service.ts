import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class WordsServerAbstractService {
  public abstract fetchWords(): Observable<any>;
  public abstract addWord(word: any): Observable<any>;
  public abstract editWord(word: any): Observable<any>;
}
