import {
	FillGradient,
	Graphics,
	Particle,
	ParticleContainer,
	type Application,
} from "pixi.js";

export async function blobParticles(app: Application) {
	const gradient = new FillGradient({
		type: "radial",
		colorStops: [
			{
				color: "black",
				offset: 0,
			},
			{
				color: "white",
				offset: 1,
			},
		],
		innerRadius: 0.25,
	});

	const graphics = new Graphics();
	graphics.rect(0, 0, 200, 200).fill(gradient);

	const texture = app.renderer.generateTexture(graphics);

	const blobParticles = new ParticleContainer({
		dynamicProperties: {
			vertex: true,
			position: true,
			color: false,
			rotation: false,
		},
		blendMode: "multiply",
	});

	const getParticleRect = () => {
		const width = isMobile() ? 800 : 1600;
		const height = app.screen.height;

		const x = 0;
		const y = 0;

		return { x, y, width, height };
	};

	interface Blob {
		speed: [number, number];
		acceleration: [number, number];
		jolt: [number, number];
		particle: Particle;
		aliveSince: number;
		isActive: boolean;
	}

	const initialRect = getParticleRect();

	const blobs: Blob[] = [];

	const spawnParticle = (blob: Blob, scatter = false) => {
		const particle = blob.particle;

		const initialScale = Math.random() * 0.75 + 0.25;
		const isAbove = Math.random() < 0.5;
		particle.x = lerp(initialRect.x, initialRect.width, Math.random());

		if (scatter) {
			particle.y = isAbove
				? initialRect.y -
					200 +
					lerp(0, initialRect.height / 2 + 200, Math.random())
				: lerp(initialRect.height / 2, initialRect.height + 200, Math.random());
		} else {
			particle.y = isAbove
				? initialRect.y - 200
				: initialRect.y + initialRect.height + 200;
		}

		particle.scaleX = initialScale;
		particle.scaleY = initialScale;

		blob.isActive = true;
		blob.aliveSince = 0;
		blob.jolt = [0, 0];
		blob.acceleration = [0, 0];
		blob.speed = [0, 0];

		blob.acceleration[1] = isAbove ? Math.random() * 1 : Math.random() * -1;
		blob.speed[1] = isAbove ? Math.random() * 10 : Math.random() * -10;
	};

	const poolSize = isMobile() ? 20 : 50;

	for (let i = 0; i < poolSize; i++) {
		const particle = new Particle({
			texture,
			x: 0,
			y: -1000,
			scaleX: 1,
			scaleY: 1,
		});

		blobParticles.addParticle(particle);

		const blob: Blob = {
			speed: [0, 0],
			acceleration: [0, 0],
			jolt: [0, 0],
			particle,
			aliveSince: 0,
			isActive: false,
		};

		blobs.push(blob);
	}

	app.stage.addChild(blobParticles);

	const joltChangeFrequency = 0.2;
	const spawnFrequency = isMobile() ? 0.5 : 1.1;

	const joltRange = [0.1, 0.25] as const;
	const accelerationDrag = 0.8;

	const initialParticleAmount = isMobile() ? 12 : 20;

	for (let i = 0; i < initialParticleAmount; i++) {
		const blob = blobs[i];

		if (blob) {
			spawnParticle(blob, true);
		}
	}

	let particlesToSpawn = 0;

	app.ticker.add((ticker) => {
		blobParticles.position.x = (app.screen.width - initialRect.width) / 2;

		const deltaMS = ticker.deltaMS;
		const deltaTime = ticker.deltaMS / 1000;

		const joltRandomTarget = Math.floor(1000 / joltChangeFrequency / deltaMS);
		const spawnRandomTarget = Math.floor(1000 / spawnFrequency / deltaMS);

		if (randomInt(spawnRandomTarget) === 0) {
			particlesToSpawn += 1;
		}

		for (let i = 0; i < blobs.length; i++) {
			const blob = blobs[i]!;

			if (!blob.isActive) {
				if (particlesToSpawn > 0) {
					particlesToSpawn -= 1;
					spawnParticle(blob);
				}

				continue;
			}

			for (let a = 0 as 0 | 1; a < 2; a++) {
				if (randomInt(joltRandomTarget) === 0) {
					const acceleration = blob.acceleration[a];
					const joltSign = acceleration > 0 ? -1 : 1;

					blob.jolt[a] = lerp(0, joltRange[a], Math.random()) * joltSign;
				}

				blob.acceleration[a] += blob.jolt[a] * deltaTime;

				blob.acceleration[a] *= Math.pow(accelerationDrag, deltaTime);

				blob.speed[a] += blob.acceleration[a] * deltaTime;
			}

			if (blob.particle.y <= initialRect.y && blob.jolt[1] < 0) {
				blob.jolt[1] *= -1;
			}

			if (
				blob.particle.y >= initialRect.y + initialRect.height &&
				blob.jolt[1] > 0
			) {
				blob.jolt[1] *= -1;
			}

			blob.particle.x += blob.speed[0] * deltaTime;
			blob.particle.y += blob.speed[1] * deltaTime;

			blob.aliveSince += deltaTime;

			if (
				blob.aliveSince >= 4 &&
				(blob.particle.y <= initialRect.y - 200 ||
					blob.particle.y >= initialRect.y + initialRect.height + 200)
			) {
				blob.isActive = false;
			}
		}
	});
}
