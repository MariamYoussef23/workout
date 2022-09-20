import axios from "axios";
import { NewUser } from "../types";

const API = axios.create({ baseURL: "http://localhost:3000" });

export const signupApi = async (values: NewUser) => {
  console.log("done")
  try {
    const res = await API.post("/api/user/signup", values);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getWorkouts = async () => {
  try {
    const res = await API.get("/api/workout")
    return res.data.workouts
  } catch (error) {
    console.log(error);
  }
}
