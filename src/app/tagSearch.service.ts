
import {Place} from './place.model';
import { Injectable } from '@angular/core';


@Injectable()
export class TagSearchService {

    private foundPlaces: Place[] = [];
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
        'Best street food in Jerusalem - meat sandwiches. Unforgettable culinary experience',
        [
            'Kosher',
            'Streetfood',
            'Meat'
        ] )
      ];

    
    tagClicked(tagText: string) 
    {
        for(let place of this.places)
        {
            for(let placeTag of place.tags)
            {
                if(tagText === placeTag)
                {
                    this.foundPlaces.push(place);
                }
            }
        
        }
    }
    getFoundPlaces()
    {
        return this.foundPlaces;
    }
  
}
