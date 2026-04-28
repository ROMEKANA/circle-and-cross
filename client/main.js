async function sendAction(action) {
	await fetch("/action", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(action)
	});
}