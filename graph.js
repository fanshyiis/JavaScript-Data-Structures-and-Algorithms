/*
* @Author: koala_cpx
* @Date:   2019-01-24 10:48:01
* @Last Modified by:   koala_cpx
* @Last Modified time: 2019-01-24 10:56:33
*/
class Dictionary {
  constructor () {
    this.items = {}
  }

  has (key) {
    return key in this.items
  }

  set (key, val) {
    this.items[key] = val
  }

  delete (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    } else {
      return false
    }
  }

  get (key) {
    return this.has(key)? this.items[key] : undefined
  }

  values () {
    let values = []
    for (let k in this.items) {
      if (this.has(k)) {
        values.push(this.items[k])
      }
    }
    return values
  }
}

class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    return this.items.shift()
  }

  isEmpty() {
    return this.items.length === 0
  }
}

class Graph {
  constructor () {
    this.vertices = []
    this.adjList = new Dictionary()
    this.time = 0
  }

  addVertex (v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  addEdge (v, w) {
    this.adjList.get(v).push(w)
    // this.adjList.get(w).push(v)
  }

  BFS (v, callback) {
    let color = this.initializeColor(),
        queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
          neighbors = this.adjList.get(u)
      color[u] = 'grey'
      neighbors.map(val => {
        if (color[val] === 'white') {
          color[val] = 'grey'
          queue.enqueue(val)
        }
      })
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }

  BFSPlus (v) {
    let color = this.initializeColor(),
        queue = new Queue(),
        d = [],
        pred = []

    queue.enqueue(v)
    this.vertices.map(val => {
      d[val] = 0
      pred[val] = null
    })

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
          neighbors = this.adjList.get(u)
      
      color[u] = 'grey'
      neighbors.map(val => {
        if (color[val] === 'white') {
          color[val] = 'grey'
          d[val] = d[u] + 1
          pred[val] = u
          queue.enqueue(val)
        }
      })
      color[u] = 'black'
    }

    return {
      distances: d,
      predecessors: pred
    }
  }

  DFS (callback) {
    let color = this.initializeColor()
    this.vertices.map(val => {
      if (color[val] === 'white') {
        this.dfsVisit(val, color, callback)
      }
    })
  }

  DFSPlus () {
    let color = this.initializeColor(),
        d = [],
        f = [],
        p = []

    this.time = 0
    this.vertices.map(val => {
      f[val] = 0
      d[val] = 0
      p[val] = null
    })

    this.vertices.map(val => {
      if (color[val] === 'white') {
        this.dfsPlusVisit(val, color, d, f, p)
      }
    })

    return {
      discovery: d,
      finished: f,
      predecessors: p
    }
  }

  dfsPlusVisit (u, color, d, f, p) {
    console.log('discovery' + u)
    color[u] = 'grey'
    d[u] = ++this.time
    let neighbors = this.adjList.get(u)
    neighbors.map(val => {
      if (color[val] === 'white') {
        p[val] = u
        this.dfsPlusVisit(val, color, d, f, p)
      }
    })
    color[u] = 'black'
    f[u] = ++this.time
    console.log('explored' + u)
  }

  dfsVisit (u, color, callback) {
    color[u] = 'grey'
    if (callback) {
      callback(u)
    }
    let neighbors = this.adjList.get(u)
    neighbors.map(val => {
      if (color[val] === 'white') {
        this.dfsVisit(val, color, callback)
      }
    })
    color[u] = 'black'
  }

  outPut(obj) {
    let fromVertex = this.vertices[0],
        { predecessors } = obj
    this.vertices.map(val => {
      let path = new Array()
      for (var v = val; v !== fromVertex; v = predecessors[v]) {
        path.push(v)
      }
      path.push(fromVertex)
      let s = path.pop()
      while (path.length !== 0) {
        s += ' -- ' + path.pop()
      }
      console.log(s)
    })
  }

  initializeColor () {
    let color = []
    this.vertices.map(val => {
      color[val] = 'white'
    })
    return color
  }

  toString () {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + '->'
      let neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
}

let a = new Dictionary()
a.set('ss', 1111)
a.set('s1', 1111)
a.set('s2', 1112)
a.set('s3', 1114)

a.delete('s2')
console.log(a.has('s3'))

console.log(a.values())

let graph = new Graph()
let mv = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
mv.map(val => {
  graph.addVertex(val)
})
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

function print(val) {
  console.log('vis' + val)
}

graph.BFS('A', print)
console.log(graph.BFSPlus("A"))
graph.outPut(graph.BFSPlus("A"))
graph.DFS(print)
console.log(graph.DFSPlus())

let graph2 = new Graph()
let mv2 = ['A', 'B', 'C', 'D', 'E', 'F']
mv2.map(val => {
  graph2.addVertex(val)
})
graph2.addEdge('A', 'C')
graph2.addEdge('A', 'D')
graph2.addEdge('B', 'D')
graph2.addEdge('B', 'E')
graph2.addEdge('C', 'F')
graph2.addEdge('F', 'E')

let r = graph2.DFSPlus()
console.log(r)

