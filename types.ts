import { WorkoutLine } from "@prisma/client";

export interface Exercise {
  id: string;
  name: string;
  Images: string;
  description: string;
  sets: number;
  reps: string;
  video: string;
  workoutLines?: WorkoutLine[]
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  weight: string;
  height: string;
}

export interface userLog {
  workoutLineId: number;
  userId: string;
  Weights: number;
  setNo: number;
  Reps: number;

}