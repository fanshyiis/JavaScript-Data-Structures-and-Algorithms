/*
* @Author: koala_cpx
* @Date:   2019-01-24 10:48:01
* @Last Modified by:   koala_cpx
* @Last Modified time: 2019-01-24 10:56:33
*/
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    console.log('新的链表~~')
    this.length = 0
    this.head = null
  }

  append (element) {
    let node = new Node(element),
        current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  insert (position, element) {
    if (position > -1 && position < this.length) {
      let node = new Node(element),
          current = this.head,
          previous,
          index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        this.length++
        return true
      }
    } else {
      console.log('暂无相应指针位置')
      return false
    }
  }

  removeAt (position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
          previous,
          index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
    } else {
      console.log('暂无相应指针位置')
      return null
    }
  }

  toString () {
    let current = this.head,
        string = ''
    while (current) {
      string += current.element + (current.next? '  ----->  ': '')
      current = current.next
    }
    return string
  }

  indexOf (element) {
    let current = this.head,
        index = 0
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  isEmpty () {
    return this.length === 0
  }

  getSize () {
    return this.length
  }
  
  show () {
    let current = this.head
    while (current.next) {
      console.log(current.element)
      current = current.next
    }
    console.log(current.element)
  }

 }

function test() {
  let a = new LinkedList()
  a.append('10')
  a.append('20')
  a.append('30')
  a.append('40')
  a.show()
  a.removeAt(0)
  a.insert(1, '我插下哈')
  a.show()
  console.log(a.toString())
  console.log(a.indexOf('30'))
}

test()