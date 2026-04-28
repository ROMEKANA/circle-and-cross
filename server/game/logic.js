export function applyAction(state, action) {
	switch (state.phase) {
		case "SELECT_FIRST":
			return handleSelectFirst(state, action);
		case "STACK_OR_BID":
			return handleStackOrBid(state, action);
		case "BIDDING":
			return handleBidding(state, action);
	}
	return state;
}