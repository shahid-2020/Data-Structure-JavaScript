/**
 * Graph as Adjency Matrix
 * Implenting BFS and DFS to visit each node
*/
class GraphTraverse {
    bfs(graph, node) {
        let m = graph.length;
        let visited = [];
        for (let i = 0; i < m; i++) {
            visited[i] = false;
        }
        let queue = [];
        queue.push(node);
        visited[node] = true;
        let visitedNode = [];
        visitedNode.push(node);
        while (queue.length > 0) {
            const temp = queue.shift();
            for (let i = 0; i < graph[temp].length; i++) {
                if (graph[temp][i] != 0 && !visited[i]) {
                    visitedNode.push(i);
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
        return visitedNode;
    }

    dfs(graph, node) {
        function rec(graph, visited, node, visitedNode) {
            visitedNode.push(node);
            visited[node] = true;
            for (let i = 0; i < graph[node].length; i++) {
                if (graph[node][i] !== 0 && !visited[i]) {
                    rec(graph, visited, i, visitedNode);
                }
            }
        }
        let m = graph.length;
        let visited = [];
        for (let i = 0; i < m; i++) {
            visited[i] = false;
        }
        let visitedNode = [];
        rec(graph, visited, node, visitedNode);
        return visitedNode;
    }
}
let graph = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
];

let gt = new GraphTraverse();
console.log(gt.bfs(graph, 2));
console.log(gt.dfs(graph, 2));