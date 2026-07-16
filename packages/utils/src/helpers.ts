import { LEVELS, XP_PER_LEVEL_BASE, XP_LEVEL_MULTIPLIER } from './constants';

export function calculateLevel(totalXP: number): number {
  const level = LEVELS.findLast((l) => totalXP >= l.minXP);
  return level?.level ?? 1;
}

export function calculateLevelProgress(totalXP: number): number {
  const currentLevel = LEVELS.find(
    (l) => totalXP >= l.minXP && totalXP < l.maxXP,
  );
  if (!currentLevel) return 100;
  const xpInLevel = totalXP - currentLevel.minXP;
  const xpNeeded = currentLevel.maxXP - currentLevel.minXP;
  return Math.round((xpInLevel / xpNeeded) * 100);
}

export function calculateXPForLevel(level: number): number {
  return Math.floor(XP_PER_LEVEL_BASE * Math.pow(XP_LEVEL_MULTIPLIER, level - 1));
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K,
): Record<K, T[]> {
  return array.reduce(
    (acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<K, T[]>,
  );
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
}

export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
}
