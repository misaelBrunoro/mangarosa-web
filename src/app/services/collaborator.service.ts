import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICollaborator } from '../models/collaborator.model';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  constructor(private _http: HttpClient) {}

  public show(id: string) {
    return this._http.get<any>(environment.API_URL + '/collaborators/' + id, {
      observe: 'body',
    });
  }

  public index() {
    return this._http.get<any>(environment.API_URL + '/collaborators', {
      observe: 'body',
    });
  }

  public store(body: ICollaborator) {
    return this._http.post<any>(environment.API_URL + '/collaborators', body, {
      observe: 'body',
    });
  }

  public destroy(id: string) {
    return this._http.delete<any>(
      environment.API_URL + '/collaborators/' + id,
      {
        observe: 'body',
      }
    );
  }

  public patch(id: string) {
    return this._http.patch<any>(environment.API_URL + '/collaborators/' + id, {
      observe: 'body',
    });
  }
}
