#!/usr/bin/node

/* JS pattern program that prints asterik rectangale */

let pattern = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 20; j++) {
    pattern += '*';
  }
  pattern += '\n';
}
console.log(pattern);
