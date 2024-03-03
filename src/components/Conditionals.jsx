export function CoinFlip() {
  console.log("CoinFlip component was rerendered");
  function handleCoinFlip() {
    let zeroOrOne = Math.floor(Math.random() * 2);
    let flippedCoin;
    if (zeroOrOne === 0) {
      flippedCoin = "Heads";
    } else {
      flippedCoin = "Tails";
    }
    console.log("Result was " + flippedCoin);
  }

  return (
    <p>
      <button onClick={handleCoinFlip}>Flip the coin!</button>
    </p>
  );
}

