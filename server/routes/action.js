import { applyAction } from "../game/logic.js";

export function handleAction(req, res, gameState) {
	const action = req.body;

	gameState = applyAction(gameState, action);

	res.json(gameState);
}