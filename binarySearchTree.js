/*
* @Author: koala_cpx
* @Date:   2019-01-24 10:48:01
* @Last Modified by:   koala_cpx
* @Last Modified time: 2019-01-24 10:56:33
*/  
class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
    this.deep = 0
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
class BinarySearchTree {
  constructor () {
    this.root = null
  }
  
  insert (key) {
    let node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }
  
  insertNode (node, newNode) {
    newNode.deep++
    if (newNode.key < node.key) {
      node.left ? this.insertNode(node.left, newNode) : node.left = newNode
    } else {
      node.right ? this.insertNode(node.right, newNode) : node.right = newNode
    }
  }

  min () {
    return this.minNode(this.root)
  }

  max() {
    return this.maxNode(this.root)
  }

  search (key) {
    return this.searchKey(this.root, key)
  }

  remove (key) {
    this.root = this.removeNode(this.node, key)
  }

  removeNode (node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      let aux = this.minNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  searchKey(node, key) {
    if (node === null) {
      return false
    } else {
      if (key < node.key) {
        return this.searchKey(node.left, key)
      } else if (key > node.key) {
        return this.searchKey(node.right, key)
      } else {
        return true
      }
    }
  }

  minNode (node) {
    if (node) {
      while (node && node.left) {
        node = node.left
      }
      return node.key
    }

    return null
  }

  maxNode(node) {
    if (node) {
      while (node && node.right) {
        node = node.right
      }
      return node.key
    }

    return null
  }

  show (root) {
     if (root === 'root') {
       console.log(this.root.key, '----', this.root.deep)
       this.show(this.root.left)
       this.show(this.root.right)
     } else if (root) {
       console.log(root.key, '----', root.deep)
       this.show(root.left)
       this.show(root.right)
     }
  }
}

let t = new BinarySearchTree()
t.insert(11)
t.insert(14)
t.insert(5)
t.insert(10)
t.insert(18)
t.insert(30)
t.insert(7)
t.insert(3)
t.show('root')
console.log(t.min())
console.log(t.max())
console.log(t.search(4))
console.log(t.search(5))
