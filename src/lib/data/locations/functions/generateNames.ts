import { CelestialSystemType } from '../types';
import { greekLetters, greekWords, nebulaNames, randomNames } from './names';

function get2RandomCapitalizedLetters(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex1 = Math.floor(Math.random() * letters.length);
  const randomIndex2 = Math.floor(Math.random() * letters.length);

  const letter1 = letters[randomIndex1];
  const letter2 = letters[randomIndex2];

  return letter1 + letter2;
}

function getRandomRangeNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function gre(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateName(type: CelestialSystemType | 'comet'): string {
  const num = Math.random();
  switch (type) {
    case 'solar-system':
      if (num < 0.4) {
        return `${gre(greekLetters)} ${gre(greekWords)}`;
      } else if (num < 0.8) {
        return `${get2RandomCapitalizedLetters()} ${getRandomRangeNumber(100, 1e6)}`;
      } else {
        return `${gre(randomNames)} ${getRandomRangeNumber(100, 1e6)}`;
      }
    case 'nebula':
      return `${gre(nebulaNames)} Nebula`;
    case 'black-hole':
      return `${gre(greekLetters)} X-${getRandomRangeNumber(1, 10)}`;
    case 'rogue-planet':
      return `${getRandomRangeNumber(1000, 10000)}${num < 0.5 ? '-' : '+'}${getRandomRangeNumber(1000, 10000)}`;
    case 'comet':
      if (num < 0.3) {
        return `${gre(randomNames)}'s Comet`;
      } else {
        return `${gre(greekLetters)}-${getRandomRangeNumber(1, 10)} Comet`;
      }
    default:
      return 'Unknown Celestial System';
  }
}
