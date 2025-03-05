export function add(input: string): number {
    if (!input) {
        return 0;
    }

    let delimiters = [',', '\n'];
    let numbersSection = input;

    if (input.startsWith('//')) {
        const multiDelimiterMatch = input.match(/^\/\/(\[.*?\])+\n/);
        if (multiDelimiterMatch) {
            delimiters = (input.match(/\[(.*?)\]/g) || []).map(d => d.slice(1, -1).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
            numbersSection = input.substring(multiDelimiterMatch[0].length);
        } else {
            const singleDelimiterMatch = input.match(/^\/\/(.)\n/);
            if (singleDelimiterMatch) {
                delimiters = [singleDelimiterMatch[1]];
                numbersSection = input.substring(singleDelimiterMatch[0].length);
            }
        }
    }

    const regex = new RegExp(delimiters.join('|'));
    const numList = numbersSection.split(regex);
    return sum(numList);
}

function sum(numbers: string[]): number {
    let total = 0;
    let negativeNumbers: string[] = [];

    for (const number of numbers) {
        if (!number.trim()) continue;

        const num = parseInt(number, 10);
        if (isNaN(num)) continue;

        if (num < 0) {
            negativeNumbers.push(number);
        }
        if (num < 1000) {
            total += num;
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return total;
}
