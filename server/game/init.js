export function initPlayers(state, n) {
	for (let i = 0; i < n; i++) {
		state.players.push({
			id: i,
			hand: [1,1,1,0],
			stack: [],
			wins: 0,
			isAlive: true,
			folded: false
		});
	}
}