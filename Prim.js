let graph = [[0, 2, 4, 0, 0, 0],
             [2, 0, 2, 4, 2, 0],
             [4, 2, 0, 0, 3, 0],
             [0, 4, 0, 0, 3, 2],
             [0, 2, 3, 3, 0, 2],
             [0, 0, 0, 2, 2, 0]]

let INF = Number.MAX_SAFE_INTEGER

function Prim() {
  let parent = [],
      key = [],
      visited = [],
      length = graph.length
  
  for (let i = 0; i < length; i++) {
    key[i] = INF
    visited[i] = false
  }

  key[0] = 0
  parent[0] = -1

  for (let i = 0; i < length - 1; i++) {
    let u = minKey(key, visited)
    visited[u] = true
    console.log('---->' + u)
    console.log(key)
    console.log(visited)

    for (let v = 0; v < length; v++) {
      if (graph[u][v] > 0 && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u
        key[v] = graph[u][v]
      }
    }
  }

  return { parent, key }
}

function Kruskal() {
  let length = graph.length,
      parent = [],
      cost,
      ne = 0,
      u, v, i, j, min
  
  cost = initial()

  while (ne < length - 1) {
    for (i = 0, min = INF; i < length; i++) {
      for (j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j]
          u = i
          v = j
        }
      }
    }

    u = find(u, parent)
    v = find(v, parent)

    if (union(u, v, parent)) {
      ne++
    }

    cost[u][v] = cost[v][u] = INF
  }

  return parent
}

function find(i, parent) {
  while (parent[i]) {
    i = parent[i]
  }

  return i
}

function union(i, j, parent) {
  if (i != j) {
    parent[j] = i
    return true
  }
  return false
}

function initial() {
  return JSON.parse(JSON.stringify(graph))
}

function minKey(key, visited) {
  let min = INF,
    minIndex = -1

  for (let v = 0; v < key.length; v++) {
    if (visited[v] === false && key[v] <= min) {
      min = key[v]
      minIndex = v
    }
  }

  return minIndex
}

// console.log(Prim())
console.log(Kruskal())