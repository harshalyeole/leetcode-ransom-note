/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count = 1;
    for (const c of ransomNote) {
        if (magazine.indexOf(c) === -1) {
            return false
        }
        else {
            let beforeC = magazine.slice(0, magazine.indexOf(c))
            let afterC = magazine.slice(magazine.indexOf(c)+1)
            magazine = beforeC.concat(afterC)
        }
        count++
    }
    return true
};
