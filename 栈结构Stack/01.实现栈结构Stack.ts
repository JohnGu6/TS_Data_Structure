import IStack from "./IStack";

//封装一个栈
class ArrayStack <T> implements IStack <T> {
	//定义一个数组/链表,用于储存元素
	private data: T[] = [];

	//实现栈中的操作方法
	//push方法:将一个元素压入栈中
	push(element: T): void {
		this.data.push(element);
	}

	//pop方法:将栈顶的元素弹出栈(返回出去，并且从栈顶移除掉)
	pop(): T | undefined {
		return this.data.pop(); //如果为T 空栈会报错, 返回undefined (T | undefined)是联合类型
	}

	//peek方法:看一眼栈顶元素，不进行任何操作
	peek(): T | undefined {
		return this.data[this.data.length - 1]
	}

	//isEmpty方法: 判断栈是否为空
	isEmpty(): boolean {
		return this.data.length === 0 
	}

	//size方法:返回栈的数据个数
	size(): number {
		return this.data.length
	}
}

//创建stack实例
const stack1 = new ArrayStack <string> ()
stack1.push("aaa")
stack1.push("bbb")
stack1.push("ccc")

console.log(stack1.peek())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1.peek())
console.log(stack1.pop()) 
console.log(stack1.size())
console.log(stack1.isEmpty())

const stack2 = new ArrayStack <number> ()
stack2.push(1)
stack2.push(2)
stack2.push(3)

console.log(stack2.peek())
console.log(stack2.pop())
console.log(stack2.pop())
console.log(stack2.peek())
console.log(stack2.peek())
console.log(stack2.pop()) 
console.log(stack2.size())
console.log(stack2.isEmpty())

export {}
