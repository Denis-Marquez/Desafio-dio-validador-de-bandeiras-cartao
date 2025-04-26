function getCardBrand(cardNumber) {
    const cardNumberStr = cardNumber.toString();

    if (cardNumberStr.startsWith('4')) {
        return 'Visa';
    } else if (/^5[1-5]/.test(cardNumberStr) || /^2(2[2-9]|[3-6][0-9]|7[0-1]|720)/.test(cardNumberStr)) {
        return 'MasterCard';
    } else if (/^(4011|4312|4389|.*)/.test(cardNumberStr)) {
        return 'Elo';
    } else if (/^3[47]/.test(cardNumberStr)) {
        return 'American Express';
    } else if (/^(6011|65|64[4-9])/.test(cardNumberStr)) {
        return 'Discover';
    } else if (cardNumberStr.startsWith('6062')) {
        return 'Hipercard';
    } else {
        return 'Unknown';
    }
}

// Example usage:
const cardNumber = 3471111111111111; // Replace with the card number to test
console.log(getCardBrand(cardNumber)); // Output: Visa