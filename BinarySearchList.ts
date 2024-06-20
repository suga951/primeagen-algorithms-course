export default function bs_list(haystack: number[], needle: number): boolean {
    //Set the high and low bounds of our array.
    let low = 0;
    let high = haystack.length;

    do {
        //Set the midpoint of the search.
        const mid = Math.floor(low + (high - low) / 2);
        const arrMid = haystack[mid];

        if (arrMid === needle) {
            return true;
        } else if (arrMid > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);

    return false;
}
