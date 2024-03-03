export function CoinFlip() {
  let zeroOrOne = Math.floor(Math.random() * 2);
  let flippedCoin;
  if (zeroOrOne === 0) {
    flippedCoin = "Heads";
  } else {
    flippedCoin = "Tails";
  }
  return (
    <p>
      <b>Coin Flip:</b> {flippedCoin}
      <button></button>
    </p>
  );
}
