export interface GitHubConfig {
  owner: string;
  repo: string;
  pat: string;
}

export interface OnlineClassForm {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  time: string;
  language: string;
  recordingsAvailable: boolean;
  registrationNote: string;
}

export interface RegistrationInfoForm {
  whatsapp: string;
  email: string;
  note: string;
}

export interface IntensiveSessionForm {
  dates: string;
  status: "upcoming" | "completed" | "ongoing";
}

export interface IntensiveCoursesForm {
  title: string;
  instructor: string;
  location: string;
  requirement: string;
  pricing: string;
  image: string;
  sessions: IntensiveSessionForm[];
}

export interface PricingTierForm {
  sessions: string;
  price: string;
}

export interface RegularClassForm {
  title: string;
  instructor: string;
  schedule: string;
  pricing: PricingTierForm[];
  note: string;
}

export interface InternationalWorkshopForm {
  id: string;
  city: string;
  country: string;
  dates: string;
  image: string;
  status: "upcoming" | "completed";
}

export interface PhilosophyCourseForm {
  title: string;
  instructor: string;
  topics: string;
  pricing: string;
  status: string;
}

export interface FacilityHoursForm {
  selfPractice: string;
  officeMorning: string;
  officeEvening: string;
}

export interface SummerClosureForm {
  note: string;
  detail: string;
}

export interface HomeBaseScheduleForm {
  day: string;
  time: string;
}

export interface HomeBaseForm {
  name: string;
  address: string;
  description: string;
  schedule: HomeBaseScheduleForm[];
}
