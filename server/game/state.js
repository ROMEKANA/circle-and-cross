export const Phase = {
	INIT: "INIT",
	SELECT_FIRST: "SELECT_FIRST",
	STACK_OR_BID: "STACK_OR_BID",
	BIDDING: "BIDDING",
	REVEAL: "REVEAL",
	RESULT: "RESULT"
};

export function createInitialState(playerCount) {
	return {
		players: [],
		currentTurn: 0,
		phase: Phase.INIT,
		declaredNumber: 0,
		bidderId: null
	};
}