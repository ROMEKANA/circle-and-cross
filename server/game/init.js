// ゲームの初期化処理を定義するファイル

import { initialDeck } from "./rules.js";
import { Phase, createEmptyGameState } from "./state.js";

// デッキの生成
function createDeck() {
    return [...initialDeck];
}

// シャッフル関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// プレイヤーの初期化と並び変え、先頭が最初の親プレイヤーになるようにする
export function initPlayers(GameState, playerCount) {
	for (let i = 0; i < playerCount; i++) {
        const player = createPlayer(i);
        player.hand = createDeck();
		GameState.players.push(player);
	}
    shuffle(GameState.players);
}

// ラウンドの初期化
export function startNewRound(GameState, hostPlayerId) {
    GameState.phase = Phase.SELECT_FIRST;

    GameState.currentTurn = 0;
    GameState.declaredNumber = 0;
    GameState.bidderId = null;
    GameState.pendingSelections = {};

    for (const player of GameState.players) {
        player.stack = [];
        player.folded = false;
    }

    GameState.round += 1;
}

// ゲーム全体の初期化
export function initGame(playerCount = 2) {
    const GameState = createEmptyGameState(playerCount);

    initPlayers(GameState, playerCount);
    startNewRound(GameState, GameState.players[0].id);
    
    return GameState;
}