let graph = [[0, 2, 4, 0, 0, 0],
             [0, 0, 1, 4, 2, 0],
             [0, 0, 0, 0, 3, 0],
             [0, 0, 0, 0, 0, 2],
             [0, 0, 0, 3, 0, 2],
             [0, 0, 0, 0, 0, 0]]
let index = 'ABCDEF'
let INF = Number.MAX_SAFE_INTEGER

function floydWarshall() {
  let dist = [],
      length = graph.length
  
  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0
      } else {
        dist[i][j] = graph[i][j] === 0 ? INF : graph[i][j]
      }
    }
  }

  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }

  return dist
}

console.log(floydWarshall())
