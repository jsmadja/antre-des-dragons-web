export interface Pip {
  currentHealthPoints: number;
}

export interface Action {
  url: string;
  question: string;
}

export interface Step {
  pip: Pip;
  actions: Action[];
  chapterText: string;
  logEntries: LogEntry[];
}

export interface HealthPoints {
  healthPoints: number;
}

export interface HealingItem {
  name: string;
  usable: boolean;
  doses?: HealthPoints[];
}

export interface LogEntry {
  id: string;
  type: string;
  author: string;
  chapter?: number;
  value?: number;
  healingItem?: HealingItem;
  item?: string;
}
