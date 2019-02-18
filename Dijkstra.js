let graph = [[0,2,4,0,0,0],
             [0,0,1,4,2,0],
             [0,0,0,0,3,0],
             [0,0,0,0,0,2],
             [0,0,0,3,0,2],
             [0,0,0,0,0,0]]
let index = 'ABCDEF'
let INF = Number.MAX_SAFE_INTEGER

function dijkstra(src) {
  let dist = [],
      visited = [],
      length = graph.length

  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false 
  }
  dist[src] = 0

  for (let i = 0; i < length - 1; i++) {
    let u = minDistance(dist, visited)
    visited[u] = true
    console.log('dist ->', dist)
    console.log('visited ->', visited)
    for (let v = 0; v < length; v++) {
      if (!visited[v] && dist[u] !== INF && graph[u][v] > 0 && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }

  return dist
}

function minDistance(dist, visited) {
  let min = INF,
      minIndex = -1
  
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  
  return minIndex
}

console.log(dijkstra(0))