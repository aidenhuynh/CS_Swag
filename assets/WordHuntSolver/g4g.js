// JavaScript program for word Boggle
function exist(board, word, r, c) {
    for (let i = 0; i < r; i++) { 
        for (let j=0; j < c; j++) { 
            if (board[i][j]===word[0] && search(board, word, 0, i, j, r, c)) { 
                return true; 
            } 
        } 
    } 
    
    return false; 
} 

function search(board, word, len, i, j, r, c) { 
    // if (i < 0 || i>= r || j < 0 || j>= c) {
    //         return false;
    //     }
    
        if (board[i][j] !== word[len]) {
            return false;
        }
    
        if (len === word.length - 1) {
            return true;
        }
    
        const ch = board[i][j];
        board[i][j] = '@';

        const ans =
        search(board, word, len + 1, i - 1, j, r, c) ||
        search(board, word, len + 1, i + 1, j, r, c) ||
        search(board, word, len + 1, i, j - 1, r, c) ||
        search(board, word, len + 1, i, j + 1, r, c) ||
        search(board, word, len + 1, i - 1, j + 1, r, c) ||
        search(board, word, len + 1, i - 1, j - 1, r, c) ||
        search(board, word, len + 1, i + 1, j - 1, r, c) ||
        search(board, word, len + 1, i + 1, j + 1, r, c);

        board[i][j] = ch;
        return ans;
    }

    function wordBoggle(board, dictionary) {
        const r = 3;
        const c = 3;

        const temp = [];
        const st = new Set(dictionary);
        const n = st.size;

        const dict = Array.from(st);

        for (let i = 0; i < n; i++) { 
            if (exist(board, dict[i], r, c)) { 
                    temp.push(dict[i]); 
                } 
            } 
            
        return temp; 
    } 
        
    const dictionary=["GEEKS", "FOR" , "QUIZ" , "GEE" ]; 
    
    const boggle=[
        ["G", "I" , "Z" ], 
        ["U", "E" , "K" ], 
        ["Q", "S" , "E" ], ]; 
    
    const ans=wordBoggle(boggle, dictionary); 
    
    if (ans.length===0) { 
        console.log("-1"); 
    } 
    else { 
        ans.sort(); 
        
        for (let i=0; i < ans.length; i++) { 
            console.log(ans[i] + " " ); 
        } 
        
        console.log(""); } // This code is contributed by user_dtewbxkn77n