//based on some of my work last semester

function augmentingPath(graph, start, end) {
    let path = [];
    let visited = [];

    if (!(Object.keys(graph[start] > 0))) {
        return [];
    }

    function innerAugPath(current) {
        if (visited.includes(current)) {
            return false;
        }

        visited.push(current);
        path.push(current);
3
        if (current == end) {
            return true;
        }

        for (const neighbor of Object.keys(graph[current])) {
            //console.log("Current path is " + path)

            if (innerAugPath(neighbor)) {
                return true;
            }
        }
        path.pop();

        return false;
    }

    innerAugPath(start);
    return path;
}
