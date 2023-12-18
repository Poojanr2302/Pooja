const chessboard = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.innerText = "";
        cell.className = (row + col) % 2 === 0 ? "even" : "odd";
        cell.addEventListener("click", () => {
            if (cell.innerText === "") {
                const pawn = document.createElement("div");
                pawn.innerText = "♙"; // You can use any pawn character here
                pawn.className = "pawn";
                cell.appendChild(pawn);
            }
        });
        chessboard.appendChild(cell);
    }
}
