export interface Inventory {
  healingItems: HealingItem[];
  items: Item[];
  equipedItems: Item[];
}

export interface Entity {
  name: string;
  inventory: Inventory;
  maximumHealthPoints: number;
  currentHealthPoints: number;
  armorPoints: number;
  additionalDamagePoints: number;
  adjustedHitRollRange: HitRollRange;
  sleeping: boolean;
  invisible: boolean;
  immuneToPoison: boolean;
  ableToStrikeTwice: boolean;
  magicArmorPoints: ArmorPoints;
  magicDamagePoints: DamagePoints;
  poisoned: boolean;
  loseInitiative: boolean;
  temporaryDamagePointsMalus: DamagePoints;
}

export interface Pip extends Entity {
  level: number;
  experiencePoints: number;
  currentChapter: Chapter;
}

interface DamagePoints {
  damagePoints: number;
}

interface ArmorPoints {
  armorPoints: number;
}

interface HitRollRange {
  min: number;
  max: number;
}

export interface Action {
  url: string;
  question: string;
  chapter: number;
  answer: string;
}

export interface Step {
  pip: Pip;
  actions: Action[];
  chapterText: string;
  logEntries: LogEntry[];
}

interface Chapter {
  title: string;
}

export interface Spell {
  name: string;
  description: string;
}

export type SpellBook = Spell[];

export type AdventureMap = string;

export interface HealthPoints {
  healthPoints: number;
}

export interface HealingItem {
  name: string;
  usable: boolean;
  doses?: HealthPoints[];
}

export interface Item {
  name: string;
}

export interface LogEntry {
  id: string;
  type: string;
  author: string;
  chapter?: number;
  value?: number;
  healingItem?: HealingItem;
  item?: string;
  chapterTitle: string;
  message: string;
}

export function formatLogEntry(log: LogEntry): string {
  switch (log.type) {
    case "CHAPTER":
      return `${log.author} se rend au chapitre ${log.chapterTitle}`;
    case "ROLL":
      return `${log.author} lance les dés et obtient ${log.value}`;
    case "ITEM":
      return `${log.author} ajoute ${log.item} dans son sac à dos`;
    case "SPELL":
    case "MISC":
      return `${log.author} ${log.message}`;
    case "FIGHT":
      return `${log.message}`;
  }
  return JSON.stringify(log);
}
