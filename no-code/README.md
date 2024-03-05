# Teacher is the Computer

Play a game of Dots and Boxes.

1. Split the class into two teams. Assign each team to a color
1. Use a whiteboard to draw a 10 by 10 grid and put dots and each intersection
```
 * * * * ...
 * * * * ...
 * * * * ...
 etc
```

The students will write on piece of paper the commands they want executed and deliver these to the teacher. This is done asynchronously. All commands are executed in the order they are recieved.

The teacher acts as the computer and will interpret commands from each team. The teacher knows the following commands
1. teacher.moveTo(x, y)
1. teacher.lineTo(distance, isX)
1. teacher.changeColor(markerColor)
1. teacher.writeText(text)

The teacher should reject any malformed commands.

```
teacher.CHANGE_COLOR("test") // This would fail and the teacher should report an error back to the students.
```
