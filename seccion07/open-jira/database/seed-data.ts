interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

enum Status {
  PENDING = "pending",
  IN_PROGRESS = "in-progress",
  FINISHED = "finished",
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Lorem",
      status: Status.PENDING,
      createdAt: Date.now(),
    },
    {
      description: "en progreso Lorem1",
      status: Status.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      description: "finished Lorem asasas",
      status: Status.FINISHED,
      createdAt: Date.now() - 100000,
    },
  ],
};
