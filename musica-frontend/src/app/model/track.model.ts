export class Track {
  id :number;
  index?: number;
  link: string;
  title: string;
  albumId: number;
  startOffset?: number;
  endOffset?: number;
  duration?: number;
  artist?: string;
  artistId: number;
  album?: string;
  public toString = (): string => {
    return `Track (index: ${this.index}, title: ${this.title})`;
  }
}
