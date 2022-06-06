exports.picker = function(prices) {
    let biggestProfit = 0
    let result = []
    for(let i = 0; i < prices.length; i++){
        let buyDate = i
        for(let j = i + 1; j < prices.length; j++){
            let sellDate = j
            if(prices[j] - prices[i] > biggestProfit){
                biggestProfit = prices[j] - prices[i]
                result = [buyDate, sellDate]
            }
        }
    }
    return result
}
