export function getUniqueVaaluesKey(
  arr: TrackType[],
  key: keyof TrackType,
): string[] {
  const uniqValues = new Set<string>();
  return;
}

export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const inputSeconds = Math.floor(time % 60);
  const outputSeconds = inputSeconds > 10 ? `0${inputSeconds}` : inputSeconds;

  return `${minutes}: ${outputSeconds}`;
}
