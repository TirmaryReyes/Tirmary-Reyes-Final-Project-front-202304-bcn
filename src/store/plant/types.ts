export interface PlantDataStructure {
  id: string;
  name: string;
  image: string;
  type: string;
  size: string;
  hasFlowers: boolean;
  environment: string;
  description: string;
}

export interface PlantApiStructure {
  plants: PlantDataStructure[];
}

export interface PlantIdStructure {
  idPLant: string;
}
