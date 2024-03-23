export type TeamDTO = {
  id: string;
  name: string;
  image: string;
  powerstats: {
    reliability:number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat?: number;
  };
};
