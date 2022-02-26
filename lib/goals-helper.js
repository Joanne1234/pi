import AsyncStorage from "@react-native-async-storage/async-storage";

// create id for goals
export const createGoalId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// create a goal
export const createGoal = async (title, completionData) => {
  await saveGoal({
    name: title,
    tasks: [],
    createdAt: new Date().getTime(),
    targetTime: completionData,
  });
};

// save goal to storage
export const saveGoal = async (goal) => {
  console.log("createGoal", goal);
  try {
    await AsyncStorage.setItem(createGoalId(), JSON.stringify(goal));
  } catch (error) {
    console.log(error);
  }
};

// get all goals
export const getGoals = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const goals = await AsyncStorage.multiGet(keys);
    const goalData = goals.map((goal) => {
      if (goal[0] !== "undefined" && goal[0] !== "loglevel") {
        try {
          return JSON.parse(goal[1]);
        } catch (error) {
          console.log(error);
        }
      }
    });
    return goalData;
  } catch (error) {
    console.log(error);
  }
};

// update a goal
export const updateGoal = async (id, goal) => {
  try {
    await AsyncStorage.mergeItem(id, JSON.stringify(goal));
  } catch (error) {
    console.log(error);
  }
};

// delete a goal
export const deleteGoal = async (id) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.log(error);
  }
};

// delete all goals
export const deleteAllGoals = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.log(error);
  }
};

// get a goal
export const getGoal = async (id) => {
  try {
    const goal = await AsyncStorage.getItem(id);
    return JSON.parse(goal);
  } catch (error) {
    console.log(error);
  }
};

// add a new task to a goal
export const addTask = async (id, task) => {
  try {
    const goalData = await getGoal(id);
    goalData.tasks.push(task);
    await updateGoal(goalData);
  } catch (error) {
    console.log(error);
  }
};
