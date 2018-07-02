import {Tag} from './tag-list/tag.model';
import {Place} from './place.model';
import { TagListComponent } from './tag-list/tag-list.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { EventEmitter } from '@angular/core';

export class TagSearchService{
    tagClicked = new EventEmitter<Tag>();
    
    places: Place[] = [
        new Place('Menza', 
        "https://www.itraveljerusalem.com/wp-content/uploads/2017/01/rst-menza-4-1.jpg", 
        'Modern kitchen in the center of the city',
        [
            'Luxury',
            'Breakast'
          ]),
        new Place('Rimon', 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcv1BCUv4ABDPSFE9iPh6F3uc67wcovdX4OrUeF-Vq-3dRaDaCTg", 
        'Good family restaurant with tasty food and excellent friday morning boufett',
        [
            'Kosher',
            'Breakast',
            'Family',
            'Dairy'
        ] ),
        new Place('Roladin', 
        "https://www.roladin.co.il/web/files/branch/normal/malha2.jpg", 
        'Cozy bakery with a big choice of desserts and hand made sourdough breads',
        [
            'Kosher',
            'Breakast',
            'Bakery',
            'Dairy'
        ] ),
        new Place('Just Meat', 
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/0f/82/5e/just-meat.jpg", 
        'Best street food in Jerusalem - sandwiches with meat. Unforgettable culinary experience',
        [
            'Kosher',
            'Streetfood',
            'Meat'
        ] )
      ];

    searchForPlaces(clickedTag: Tag) {
        for(place in this.places){
            for(tag in place.tags){
                if(clickedTag.text == tag)
                {
                    
                }
            }
        }
      }

}