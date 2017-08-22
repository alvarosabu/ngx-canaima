import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    Response,
    XHRBackend
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {
    Observable,
    BehaviorSubject,
    Subject
} from 'rxjs';
import 'rxjs/Rx';
import { Note } from './note';
import { FormatService } from '../misc/format.service';

@Injectable()
export class NotesService {
    public note: Note;
    public notesList: Note[];
    constructor(
        private http: Http,
        private formatService: FormatService
    ) {
    }
    public getNotes(noteId: string): Observable<Note[]> {
        return this.http
        .get(`${ API_URL }?postId=${noteId}`)
        .map((res: Response) => {
              const notes = res.json();
              this.notesList = this.formatService.listSnakeToCamel(notes);
              return this.notesList;
         }).catch((error: any) => this.handleError(error));
    }
    public getNote(id: string): Observable<Note[]> {
        return this.http
        .get('/notes/' + id)
        .map((res: Response) => {
              const note = res.json();
              this.note = this.formatService.snakeToCamel(note) as Note;
              return this.note;
         }).catch((error: any) => this.handleError(error));
    }
    public createNote(note: Note): Observable<Note[]> {
        const body = this.formatService.camelToSnake(note);
        return this.http
        .post(`${ API_URL }`, JSON.stringify(body))
        .map((res: Response) => {
              const notes = res.json();
              this.notesList = notes;
              return notes;
         }).catch((error: any) => this.handleError(error));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}
