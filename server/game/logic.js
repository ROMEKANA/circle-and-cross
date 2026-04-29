// ゲームのロジックを定義するファイル

import { isValidAction } from "./rules.js";
import { Phase } from "./state.js";

export function applyAction(gameState, action) {
	switch (gameState.phase) {
        case Phase.INIT:
            return gameState; // 初期化フェーズは特に処理なし
		case Phase.SELECT_FIRST:
			return handleSelectFirst(gameState, action); // 初回のカード選択、いつかは同時選択にするかも
		case Phase.STACK_OR_BID:
			return handleStackOrBid(gameState, action); // カードを積むかビッドするかの選択
		case Phase.BIDDING:
			return handleBidding(gameState, action); // ビッドの処理
        case Phase.REVEAL:
            return handleReveal(gameState, action); // カードの公開と勝敗判定
        case Phase.RESULT:
            return gameState; // 結果表示フェーズは特に処理なし
        default:
            return gameState; // 不明なフェーズは状態を変更しない
	}
	return gameState;
}