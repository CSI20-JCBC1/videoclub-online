export interface Pelicula {
  documentId: string;
  data: {
    titulo: string;
    director?: string;
    duracion?: number;
    publico?: string;
    genero?: string;
    year?: number;
  };
}
