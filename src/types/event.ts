import { PlayerBody } from './body';

export enum GameEvent {
  climax = 'climax',
  edge = 'edge',
  pause = 'pause',
  halfPace = 'halfPace',
  risingPace = 'risingPace',
  doublePace = 'doublePace',
  randomPace = 'randomPace',
  randomGrip = 'randomGrip',
  cleanUp = 'cleanUp',
}

export const GameEventLabels: Record<GameEvent, string> = {
  climax: 'Climax',
  edge: 'Edge Safety Net',
  pause: 'Pause',
  halfPace: 'Half Pace',
  risingPace: 'Rising Pace',
  doublePace: 'Double Pace',
  randomPace: 'Random Pace',
  randomGrip: 'Random Grip',
  cleanUp: 'Clean Up Mess',
};

export const GameEventDescriptions: Record<GameEvent, string> = {
  climax: 'Creates an end point to the game.',
  edge: "Slows down when intensity is almost at it's highest.",
  pause: 'Paw at twice the current pace for a few seconds.',
  halfPace: 'Paw at half the current pace for a few seconds.',
  risingPace: 'Start from your lowest and slowly pick up speed.',
  doublePace: 'Stop stroking for a little bit.',
  randomPace: 'Randomly select a new pace based on your curve.',
  randomGrip: 'Randomly select new hands to play with.',
  cleanUp: "Clean up any mess you've made along the way.",
};

export const CleanUpDescriptions: Record<PlayerBody, string> = {
  penis: "pre you've leaked",
  vagina: "juices you've made",
  neuter: "mess you've made",
};
