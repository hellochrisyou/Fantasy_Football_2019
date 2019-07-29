export const slideInAnimation = trigger('animRoutes', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(9rem) rotate(-10deg)'
          }),
          animate('0.35s cubic-bezier(0, 1.8, 1, 1.8)', style({ opacity: 1, transform: 'translateY(0) rotate(0)' })),
          animateChild()
        ],
        { optional: true }
      ),
      query(':leave', [animate('0.35s', style({ opacity: 0 })), animateChild()], { optional: true })
    ])
  ])
]);
