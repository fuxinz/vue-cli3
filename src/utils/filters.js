export function formatBankCard(bankCard) {
    return (bankCard = `**** **** **** ${bankCard.substr(-4, 4)}`);
  }