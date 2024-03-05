# Teacher is the Computer two team games

1. Split the class into two teams. Assign each team to a color
1. Use a whiteboard to draw a 10 by 10 grid and put dots and each intersection
```
 * * * * ...
 * * * * ...
 * * * * ...
 etc
```

The students will write on piece of paper the commands they want executed and deliver these to the teacher. This is done asynchronously. All commands are executed in the order they are recieved.

The teacher acts as the computer and will interpret commands from each team.

### Dots and Boxes

#### Objective

score the most points by filling in boxes and drawing the most lines

1 pts per line
3 pts for filling in a box

Points are awarded for the color of the line / box NOT the team that wrote command.

#### Teacher available commands
1. teacher.moveTo(x, y)
1. teacher.lineTo(distance, isX)
1. teacher.changeColor(markerColor)
1. teacher.writeText(text)

The teacher should reject any malformed commands.

```
teacher.CHANGE_COLOR("test") // This would fail and the teacher should report an error back to the students.
```

### Battleship

#### Additional Setup

Teacher draws 5 ships for each team on the grid. In this game, the teacher can recieve a maximum of two commands at a time on a single piece of paper.

#### Objective

Sink the other team's ships by hitting them with torpedos

#### Teacher available commands

1. mercenary.moveX(distance) // May be positive or negative
1. mercenary.moveY(distance) // May be positive or negative
1. mercenary.fireTorpedo(axis, distance) // Axis is either "x" or "y". Distance determines the direction of the shot.

A torpedo will explode when it reaches the end distance sinking any boat within 2 grid points on the axis it was fired on.

e.g. mercenary.fireTorpedo("x", -2) ends at grid point 1,1. Any boat at (1,1), (2,1), or (0,1) would be hit.

### Connect 4
