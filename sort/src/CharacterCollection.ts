import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const t = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = t;
    this.data = characters.join('');
  }
  get length(): number {
    return this.data.length;
  }
}
