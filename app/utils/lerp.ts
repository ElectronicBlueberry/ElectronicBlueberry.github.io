export function lerp(from: number, to: number, offset: number) {
	return (to - from) * offset + from;
}
