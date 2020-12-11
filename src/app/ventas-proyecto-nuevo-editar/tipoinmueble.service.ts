import { Injectable } from '@angular/core'
import { Tipoinmueble } from './tipoinmueble'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { URL_BACKEND } from '../config/config'

@Injectable()
export class TipoinmuebleService {
    private urlEndPoint: string = URL_BACKEND + 'tipoinmueble/'

    constructor(private http: HttpClient) {}

    getTipoinmueble(): Observable<any> {
        return this.http.get(this.urlEndPoint).pipe(
            map((data: any) => {
            ;(data as Tipoinmueble[]).map((tipoinmueble) => {
                return tipoinmueble
            })
            return data
            })
        )
    }
}