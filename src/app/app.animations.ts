import {
  state,
  style,
  transition,
  trigger,
  animate
} from '@angular/animations';

export const FabAnimations = [
  trigger('toggleState', [
    state('inactive', style({
      display: 'none',
      boxShadow: 'none'
    })),
    state('active', style({
      bottom: '{{ bottom }}px',
    }), { params: {bottom: 0}}),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
  trigger('menuButtonState', [
    state('inactive', style({
      transform: 'rotate(0deg)'
    })),
    state('active', style({
      transform: 'rotate(225deg)'
    })),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])
];
