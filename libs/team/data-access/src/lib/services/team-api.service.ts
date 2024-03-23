import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TeamDTO } from '@linksmt/team/api-interfaces';
import { BASE_API_URL } from '@linksmt/common/tokens';
@Injectable({
  providedIn: 'root',
})
export class TeamApiService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private baseApiUrl: string
  ) {}

  getTeams(): Observable<TeamDTO[]> {
    return this.http.get<TeamDTO[]>(`${this.baseApiUrl}/api/team`);
  }
}
