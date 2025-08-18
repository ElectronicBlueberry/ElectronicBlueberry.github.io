import { FillGradient, Graphics, type Application } from "pixi.js";

export function backgroundGradient(app: Application) {
	const gradient = new FillGradient({
		type: "linear",
		colorStops: [
			{
				offset: 0,
				color: "black",
			},
			{
				offset: 1,
				color: "white",
			},
		],
	});

	const gradientReversed = new FillGradient({
		type: "linear",
		colorStops: [
			{
				offset: 0,
				color: "white",
			},
			{
				offset: 1,
				color: "black",
			},
		],
	});

	let currentWidth = app.screen.width;
	let currentHeight = app.screen.height;

	const graphics = new Graphics();

	const draw = () => {
		graphics
			.clear()
			.rect(0, 0, currentWidth, currentHeight)
			.fill("white")
			.rect(0, -50, currentWidth, 100)
			.fill(gradient)
			.rect(0, currentHeight - 50, currentWidth, 100)
			.fill(gradientReversed);
	};

	draw();

	app.stage.addChild(graphics);

	app.ticker.add(() => {
		const newWidth = app.screen.width;
		const newHeight = app.screen.height;

		if (newWidth !== currentWidth || newHeight !== currentHeight) {
			currentWidth = newWidth;
			currentHeight = newHeight;

			draw();
		}
	});
}
