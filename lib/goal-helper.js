import { firebase } from "./firebase";

// using firebase add a new goal
export const addGoal = (goal) => {
  return firebase
    .firestore()
    .collection("goals")
    .add({
      ...goal,
      createdAt: new Date(),
    });
};

// using firebase get all goals
export const getGoals = () => {
  return firebase
    .firestore()
    .collection("goals")
    .orderBy("createdAt", "desc")
    .get();
};

// using firebase get a goal
export const getGoal = (goalId) => {
  return firebase.firestore().collection("goals").doc(goalId).get();
};

// using firebase update a goal
export const updateGoal = (goalId, goal) => {
  return firebase.firestore().collection("goals").doc(goalId).update(goal);
};

// using firebase delete a goal
export const deleteGoal = (goalId) => {
  return firebase.firestore().collection("goals").doc(goalId).delete();
};

// using firebase add a new task
export const addTask = (goalId, task) => {
  return firebase
    .firestore()
    .collection("goals")
    .doc(goalId)
    .collection("tasks")
    .add({
      ...task,
      createdAt: new Date(),
    });
};
