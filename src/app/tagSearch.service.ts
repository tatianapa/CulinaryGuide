
import {Place} from './_models/place';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TagSearchService {

    public foundPlaces: Observable<Place[]>;
    public places: Place[] = [];
    // constructor() {
    //     this.fillPlaces();
    // }
    // private fillPlaces() {
    //     let retPlaces: Place[] = [];
    //     retPlaces.push(new Place('Menza',
    //             'https://www.itraveljerusalem.com/wp-content/uploads/2017/01/rst-menza-4-1.jpg',
    //             'Modern kitchen in the center of the city',
    //             [
    //                 'Luxury',
    //                 'Breakast'
    //       ]));
    //       retPlaces.push( new Place('Rimon', 
    //             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcv1BCUv4ABDPSFE9iPh6F3uc67wcovdX4OrUeF-Vq-3dRaDaCTg', 
    //             'Good family restaurant with tasty food and excellent friday morning boufett',
    //             [
    //                 'Kosher',
    //                 'Breakast',
    //                 'Family',
    //                 'Dairy'
    //       ] ));
    //       retPlaces.push(new Place('Roladin', 
    //             'https://www.roladin.co.il/web/files/branch/normal/malha2.jpg', 
    //             'Cozy bakery with a big choice of desserts and hand made sourdough breads',
    //             [
    //                 'Kosher',
    //                 'Breakast',
    //                 'Bakery',
    //                 'Dairy'
    //         ] ));
    //         retPlaces.push(new Place('Menza', 
    //             'https://www.itraveljerusalem.com/wp-content/uploads/2017/01/rst-menza-4-1.jpg', 
    //             'Modern kitchen in the center of the city',
    //             [
    //                 'Luxury',
    //                 'Breakast'
    //         ]));
    //         retPlaces.push(new Place('Just Meat',
    //               'https://media-cdn.tripadvisor.com/media/photo-s/0e/0f/82/5e/just-meat.jpg', 
    //               'Best street food in Jerusalem - meat sandwiches. Unforgettable culinary experience',
    //               [
    //                   'Kosher',
    //                   'Streetfood',
    //                   'Meat'
    //               ]));
    // }


    // tagClicked(tagText: string) {
    //     // tslint:disable-next-line:no-debugger
    //     for (const place of (this.places as Place[])) {
    //         for (const placeTag of place.tags) {
    //             if (tagText === placeTag) {
    //                 this.foundPlaces.push(place);
    //             }
    //         }

    //     }
    // }
    // getFoundPlaces() {
    //     return this.foundPlaces as Place[];
    // }

    // Clean() {
    //     this.foundPlaces = new Array<Place>();
    // }
}
