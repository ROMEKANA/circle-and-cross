// ゲーム状態の型と初期状態の雛形の定義

// フェーズの定義
export const Phase = {
	INIT: "INIT",
	SELECT_FIRST: "SELECT_FIRST",
	STACK_OR_BID: "STACK_OR_BID",
	BIDDING: "BIDDING",
	REVEAL: "REVEAL",
	RESULT: "RESULT"
};

// プレイヤーの型と初期状態の雛形を定義する関数
export function createPlayer(id) {
	return {
		id: id,

		// 手札（1=○, 0=×）
		hand: [],

		// 場に出したカード（下→上の順）
		stack: [],

		wins: 0,
		isAlive: true,

		// ビッド用
		folded: false
	};
}

// ゲーム状態の初期状態の雛形を定義する関数
export function createEmptyGameState(playerCount = 2) {
	return {
		players: [],
		currentTurn: 0,
		phase: Phase.INIT,

        // ビッド用
		declaredNumber: 0,
		bidderId: null,

        // 同時選択管理
        pendingSelections: {},

        // ゲームの進行管理
        round: 0
	};
}