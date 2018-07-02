
export class Place  {

  name: string;

  photoLocation: string;

  desc: string;

  tags: string[];

  constructor(name: string, photoLocation: string, desc: string, tags: string[]) {
      this.name = name;
      this.photoLocation = photoLocation;
      this.desc = desc;
      this.tags = tags;
   }
}