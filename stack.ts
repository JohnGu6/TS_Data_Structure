//封装类
class ArrayStack {
	private data: any[] = [];

	//实现栈中的操作方法
	//push方法:将一个元素压入栈中
	push(element: any): void {
		this.data.push(element);
	}

	//pop方法:将栈顶的元素弹出栈(返回出去，并且从栈顶移除掉)
	pop(): any {
		return this.data.pop();
	}

	//peek方法:看一眼栈顶元素，不进行任何操作
	peek(): any {
		return this.data[this.data.length - 1]
	}

	//isEmpty方法: 判断栈是否为空
	isEmpty(): any {
		return this.data.length === 0 
	}

	//size方法:返回栈的数据个数
	size(): any {
		return this.data.length
	}
}

//创建stack实例
const stack1 = new ArrayStack()
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

export {}
