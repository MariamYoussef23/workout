export interface Exercise {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  sets: number;
  reps: string;
  video: string;
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  weight: number;
  height: number;
}
