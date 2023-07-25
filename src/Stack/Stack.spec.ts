import { describe, it } from "mocha";
import { expect } from "chai";

import { Stack } from ".";

// describe("Stack", () => {
//   // instantiate
//   it("can create new instance", () => {
//     const data = [1, 2, 3, 4, 5];

//     const stack = new Stack(); // empty stack
//     const stack_1 = new Stack(data[0]); // from 1 arg
//     const stack_args = new Stack(...data); // from args
//     const stack_arr = new Stack(data); // from array

//     expect(stack).toBeInstanceOf(Stack);
//     expect(stack.size).toBe(0);
//     expect(stack.empty).toBe(true);

//     expect(stack_1).toBeInstanceOf(Stack);
//     expect(stack_1.size).toBe(1);
//     expect(stack_1.empty).toBe(false);

//     expect(stack_arr).toBeInstanceOf(Stack);
//     expect(stack_arr.size).toBe(data.length);
//     expect(stack_arr.empty).toBe(false);

//     expect(stack_args).toBeInstanceOf(Stack);
//     expect(stack_args.size).toBe(data.length);
//     expect(stack_args.empty).toBe(false);
//   });

//   // peek
//   it("can peek at the top element", () => {
//     const data = [1, 2, 3, 4, 5];
//     const stack = new Stack(data);

//     expect(stack.peek()).toBe(data[data.length - 1]);
//   });

//   it("returns null when calling peek on an empty stack", () => {
//     const stack = new Stack();

//     expect(stack.peek()).toBeNull();
//   });

//   // push
//   it("can push a new element", () => {
//     const value = "hello";
//     const stack = new Stack();

//     stack.push(value);

//     expect(stack.size).toBe(1);
//     expect(stack.empty).toBe(false);
//     expect(stack.peek()).toBe(value);
//   });

//   // pop
//   it("can remove and return the top element", () => {
//     const data = [1, 2, 3, 4, 5];
//     const stack = new Stack(data);

//     let i = data.length - 1;
//     while (!stack.empty) {
//       expect(stack.pop()).toBe(data[i]);
//       i--;
//     }
//   });

//   it("returns null when calling pop on an empty stack", () => {
//     const stack = new Stack();

//     expect(stack.pop()).toBeNull();
//   });

//   // toString
//   it("implements toString", () => {
//     const data = [1, 2, 3, 4, 5];
//     const stack = new Stack();
//     const stack_1 = new Stack(data[0]);
//     const stack_args = new Stack(...data);
//     const stack_arr = new Stack(data);

//     expect(stack.toString()).toBe("");
//     expect(stack_1.toString()).toBe("1");
//     expect(stack_args.toString()).toBe("5 -> 4 -> 3 -> 2 -> 1");
//     expect(stack_arr.toString()).toBe("5 -> 4 -> 3 -> 2 -> 1");
//   });

//   // toArray
//   it("implements toArray", () => {
//     const data = ["a", "b", "c", "d", "e"];
//     const stack = new Stack(data);
//     data.reverse();

//     const result = stack.toArray();

//     expect(Array.isArray(result)).toBe(true);
//     data.forEach((el, idx) => {
//       expect(result[idx]).toBe(el);
//     });
//   });
// });
