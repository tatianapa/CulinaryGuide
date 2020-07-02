import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../_models/place';
import { map } from 'rxjs/operators';
import { Tag } from '../_models/tag';

@Injectable()
export class PlacesService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }
getTagsForPlace(id: number): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.baseUrl + 'places/gettagsforplace/' + id);
}
getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(this.baseUrl + 'places').
    pipe(map(places => 
        {
            places.forEach(place => {
                this.getTagsForPlace(place.placeId)
                .subscribe(
                    tags => {place.tags = tags;}
                );
            });
            return places;
        }
        ));
}

getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.baseUrl + 'places/gettags');
}
getPlacesForTag(id: number): Observable<Place[]>{
    return this.http.get<Place[]>(this.baseUrl + 'places/getplacesfortag/' + id);
}
}



