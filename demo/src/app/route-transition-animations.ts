import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const isOptional = { optional: true };
const opaqueStyle = style({ opacity: 1 });
const overlapStyle = style({
  position: "absolute",
  bottom: 0,
  top: 0,
  left: 0,
  width: "100%"
});
const transparentStyle = style({ opacity: 0 });

export const routeTransitionAnimations = trigger("triggerName", [
  transition("* => *", [
    query(":enter, :leave", [overlapStyle], isOptional),
    query(":enter", [transparentStyle], isOptional),
    query(":leave", animateChild(), isOptional),
    group([
      query(
        ":leave",
        [animate("500ms ease-out", transparentStyle)],
        isOptional
      ),
      query(":enter", [animate("500ms ease-in", opaqueStyle)], isOptional)
    ]),
    query(":enter", animateChild(), isOptional)
  ])
]);
