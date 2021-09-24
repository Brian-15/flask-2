function starOutGrid(grid) {

    const result = grid.map(row => row.map(el => el));

    for (let i in grid) {
        
        starIndex = grid[i].indexOf('*')
        console.log(starIndex)

        if (starIndex !== -1) {
            for (let j in result) {
                result[j][starIndex] = '*'
            }

            result[i].fill('*')
        }
    }


    return result;

}