const input = [
    ["A", "B", "C", "D"],
    ["A", "T", "C", "A"],
    ["S", "K", "A", "R"],
    ["A", "B", "C", "D"],
]

class Graph {
    constructor(vertices) {
        this.vertices = vertices
        this.adjList = new Map()
    }

    addVertex(vertex) {
        this.adjList.set(vertex, [])
    }

    addEdge(s, e) {
        this.adjList.get(s).push(e)
        this.adjList.get(e).push(s)
    }

    dfs(startingNode) {
        var visited = {}

        this.dfsUtil(startingNode, visited)
    }

    dfsUtil(vertex, visited) {
        visited[vertex] = true
        console.log(vertex.slice(0, 1))

        var get_neighbors = this.adjList.get(vertex)

        for (var i in get_neighbors) {
            var get_elem = get_neighbors[i]

            if (!visited[get_elem]) {
                this.dfsUtil(get_elem, visited)
            }
        }
    }
}

class TrieNode {
    constructor(char) {
        this.children = []

        for (var i=0; i<26; i++) {
            this.children[i]=null
        }

        this.isEndWord = false
        this.char = char
    }

    leaf(){
        this.isEndWord = true;
      }
    
    notLeaf(){
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('')
    }

    getIndex(t) {
        return t.charCodeAt(0) - "a".charCodeAt(0)
    }

    insert(key){
        if (key == null) {
            return
        }
       
        key = key.toLowerCase()
        let currentNode = this.root
        let index = 0
             
        for (let level=0; level<key.length; level++) {
            index = this.getIndex(key[level])
         
            if (currentNode.children[index] == null){
                currentNode.children[index] = new TrieNode(key[level])
            }

            currentNode = currentNode.children[index]
        }
         
        currentNode.leaf()
        console.log("'" + key + "' inserted")
    }
       
    search(key){
        if (key == null) {
            return false
        }

        key = key
        let currentNode = this.root
        let index = 0

        for (var level = 0; level < key.length; level ++) {
            index = this.getIndex(key[level])

            if (currentNode.children[index] == null) {
                return false
            }

            currentNode = currentNode.children[index]
        }

        if (currentNode != null && currentNode.isEndWord) {
            return true
        }

        return false
    }
}

function makeGraph() {
    var id = 0
    g = new Graph()

    for (let i = 0; i < input.length; i ++) {
        for (let j = 0; j < input[i].length; j ++) {
            g.addVertex(input[i][j] + id)

            if (j > 0) {
                g.addEdge(input[i][j - 1] + (id - 1), input[i][j] + id)
            }
            
            if (i > 0) {
                g.addEdge(input[i - 1][j] + (id - 4), input[i][j] + id)
            }

            id += 1
        }
    }
}

function getWords() {
    fetch('../../../../../assets/WordHuntSolver/words.txt')
    .then(response => response.text())
    .then(list => {
        words = list.split("\r\n").filter(word => word.length > 2)

        t = new Trie()

        for (let i = 0; i < words.length; i++) {
            t.insert(words[i])
        }
    })
}

function isWord(word) {
    return t.search(word)
}

function direction(combination, i, j, visited, letter) {
    if (!visited[i][j]) {
        var newCombination = combination + letter
        combinations.push(newCombination)
        visited[i][j] = true
        near(newCombination, i, j, visited)
        console.log("Checked: " + i + ", " + j)
    }
}

function near(combination, i, j, visited) {
    // If in row 1
    if (i == 0) {
        // Scan down
        direction(combination, i + 1, j, visited, input[i + 1][j])

        // If it is column 1
        if (j == 0) {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan down-right
            direction(combination, i + 1, j + 1, visited, input[i + 1][j + 1])
        }

        // If it is column 4
        else if (j == 4) {
            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan down-left
            direction(combination, i + 1, j - 1, visited, input[i + 1][j - 1])
        }

        // If it is columns 2 or 3
        else {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan down-right
            direction(combination, i + 1, j + 1, visited, input[i + 1][j + 1])

            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan down-left
            direction(combination, i + 1, j - 1, visited, input[i + 1][j - 1])
        }
    }

    // If row 4
    else if (i == 3) {
        // Scan up
        direction(combination, i - 1, j, visited, input[i - 1][j])

        // If it is column 1
        if (j == 0) {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan up-right
            direction(combination, i - 1, j + 1, visited, input[i - 1][j + 1])
        }

        // If it is column 4
        else if (j == 4) {
            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan up-left
            direction(combination, i - 1, j - 1, visited, input[i - 1][j - 1])
        }

        // If it is columns 2 or 3
        else {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan up-right
            direction(combination, i - 1, j + 1, visited, input[i - 1][j + 1])

            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan up-left
            direction(combination, i - 1, j - 1, visited, input[i - 1][j - 1])
        }
    }

    // If row 2 or 3
    else {
        // Scan up
        direction(combination, i - 1, j, visited, input[i - 1][j])

        // Scan down
        direction(combination, i + 1, j, visited, input[i + 1][j])

        // If it is column 1
        if (j == 0) {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan up-right
            direction(combination, i - 1, j + 1, visited, input[i - 1][j + 1])

            // Scan down-right
            direction(combination, i + 1, j + 1, visited, input[i + 1][j + 1])
        }

        // If it is column 4
        else if (j == 4) {
            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan up-left
            direction(combination, i - 1, j - 1, visited, input[i - 1][j - 1])

            // Scan down-left
            direction(combination, i + 1, j - 1, visited, input[i + 1][j - 1])
        }

        // If it is columns 2 or 3
        else {
            // Scan right
            direction(combination, i, j + 1, visited, input[i][j + 1])

            // Scan up-right
            direction(combination, i - 1, j + 1, visited, input[i - 1][j + 1])

            // Scan down-right
            direction(combination, i + 1, j + 1, visited, input[i + 1][j + 1])

            // Scan left
            direction(combination, i, j - 1, visited, input[i][j - 1])

            // Scan up-left
            direction(combination, i - 1, j - 1, visited, input[i - 1][j - 1])
uu
            // Scan down-left
            direction(combination, i + 1, j - 1, visited, input[i + 1][j - 1])
        }
    }

    // visited[i][j] = false
}

function findWords() {
    combinations = []
    var solutions = []
    var visited = []

    // Initialize visited
    for (let i = 0; i < input.length; i ++) {
        // Add a row array for each row
        visited.push([])

        // Set each column to false
        for (let j = 0; j < input[i].length; j ++) {
            visited[i][j] = false
        }
    }

    // Check nearby letters
    for (let i = 0; i < input.length; i ++) {
        for (let j = 0; j < input[i].length; j ++) {
            console.log(i)
            console.log(j)
            combination = input[i][j]
            near(combination, i, j, visited)
        }
    }

    for (let i = 0; i < combinations.length; i ++) {
        var combination = combinations[i]

        if (isWord(combination)) {
            solutions.push(combination)
        }
    }

    console.log(solutions)
}

function makeSet(list) {

}

