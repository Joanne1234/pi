import { getGoals, saveGoal } from "./goals-helper";

const mockData = [
  {
    id: "1",
    title: "House Work",
    targetDate: "2022-02-27",
    tasks: [
      {
        id: 1,
        title: "Vacuum",
        completed: false,
      },
      {
        id: 2,
        title: "Wash",
        completed: false,
      },
      {
        id: 3,
        title: "Mop",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    title: "English Report",
    targetDate: "2022-02-27",
    tasks: [
      {
        id: 1,
        title: "Introduction",
        completed: true,
      },
      {
        id: 2,
        title: "Reading",
        completed: true,
      },
      {
        id: 3,
        title: "Writing",
        completed: false,
      },
    ],
  },
];

export const initMockState = async () => {
  // get all goals
  const goals = await getGoals();
  // loop through mock data check if goal exists in storage
  // if not, save goal to storage
  mockData.forEach(async (goal) => {
    // loop through goals and check if goal exists
    const goalExists = goals.some((g) => g?.id === goal?.id);
    if (!goalExists) {
      // save goal to storage
      await saveGoal(goal);
    }
  });
};
