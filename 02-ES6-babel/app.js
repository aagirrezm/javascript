/*
 https://babeljs.io/
 https://github.com/Daniel15/babel-standalone
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
*/

//import { getName } from 'app2';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var p = new Point(10,20);

console.log(p);