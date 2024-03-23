import { Controller, Get } from '@nestjs/common';
import { TeamDTO } from '@linksmt/team/api-interfaces';

@Controller('team')
export class TeamControllerController {
  private teams: TeamDTO[] = [
    {
      id: '0',
      name: 'Ferrari',
      powerstats: {
        reliability:85,
        strength: 99,
        speed: 98,
        durability: 75,
        power: 85,
        combat: 90,
      },
      image: 'https://f1grandprix.motorionline.com/wp-content/uploads/2024/03/leclerc-ferrari-libere-jeddah-f1-2024-1-1024x683.jpg'},
    {
      id: '1',
      name: 'Mercedes',
      powerstats: {
        reliability:75,
        strength: 100,
        speed: 90,
        durability: 80,
        power: 80,
        combat: 85,
      },
      image: 'https://www.the-race.com/content/images/2024/03/M420408.jpg',
    },
    {
      id: '2',
      name: 'Red Bull',
      powerstats: {
        reliability:100,
        strength: 100,
        speed: 98,
        durability: 90,
        power: 95,
        combat: 100,
      },
      image: 'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2024/03/formula-1-2024-bahrain-gara_19.jpg?itok=1b33CyCo',
    },
  ];
  @Get()
  public get(): Promise<TeamDTO[]> {
    return Promise.resolve(this.teams);
  }
}
