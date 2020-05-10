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
}
