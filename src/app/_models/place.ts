import { Tag } from './tag';

export interface Place
{
    placeId: number;

    Name: string;

    PhotoLocation: string;

    Description: string;

    tags: Tag[];
}
