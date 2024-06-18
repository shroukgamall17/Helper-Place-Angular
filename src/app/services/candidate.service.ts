import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICandidates } from '../models/icandidates';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient: HttpClient) { }

  getAllCandidates(): Observable<ICandidates[]> {
    return this.httpClient.get<ICandidates[]>(`${environment.baseUrl}/Candidate/GetAll`);
  }

  addCandidate(Candidate: ICandidates): Observable<ICandidates> {
    return this.httpClient.post<ICandidates>(`${environment.baseUrl}/Candidate/Insert`, Candidate);
  }

  GetCandidateById(id: number): Observable<ICandidates> {
    return this.httpClient.get<ICandidates>(`${environment.baseUrl}/Candidate/GetById/${id}`);
  }

  UpdateCandidate(Candidate: ICandidates, id: number): Observable<ICandidates> {
    return this.httpClient.put<ICandidates>(`${environment.baseUrl}/Candidate/Update/${Candidate.id}`, Candidate);
  }

  DeleteCandidate(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/Candidate/Delete/${id}`);
  }
}
