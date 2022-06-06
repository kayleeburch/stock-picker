def picker(prices):
    biggest_profit = 0
    result = []
    for i in range(len(prices)):
        buy_date = i
        for j in range(i + 1, len(prices)):
            sell_date = j
            if prices[j] - prices[i] > biggest_profit:
                biggest_profit = prices[j] - prices[i]
                result = [buy_date, sell_date]
    return result