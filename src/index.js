/* 
# Args
list: Array<string | number>
type: "conjunction" | "disjunction"
limit: number

# Output
string
*/

// condicao ? valorverdade : valormentira

export const humanizeList = (list, type, limite) => {
    const conectivo = type === 'conjunction' ? 'and' : 'or'

    if (list.length > 3) {
        let firstPart = list.slice(0, limite - 1)
        return `${firstPart.join(', ')} ... ${conectivo} ${list.pop()}`
    }

    if (list.length === 2) {
        return `${list[0]} ${conectivo} ${list[1]}`
    }

    if (list.length > 1) {
        return `${list[0]}, ${list[1]} ${conectivo} ${list[2]}`
    }

    return `${list[0]}`
};
