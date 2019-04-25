function Stack() {
    if (Stack.flag !== undefined) {
        return Stack.flag
    }
    this.store = []
    this.top = 0
    Stack.flag = this
}

Stack.prototype = {
    push: function (val) {
        this.store[this.top++] = val
    },

    peek: function () {
        return this.store[this.top-1]
    },

    reset: function () {
        this.store = []
        this.top = 0
    },

    pop: function () {
        let r = this.store[this.top-1]
        this.top--
        this.store.length = this.top
        return r
    },

    view: function () {
        return this.store
    }
}

var stack = new Stack()
stack.push('a')
stack.push('a')
stack.push('a')
stack.push('a')
console.log(stack.view())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.view())
stack.push('b')
console.log(stack.view())
var b = new Stack()
console.log(b.view())
console.log(b === stack)
b.push('hahahah')
console.log(stack.view())
console.log(b.view())

