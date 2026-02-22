import type {
  IntensiveCoursesForm,
  RegularClassForm,
  PhilosophyCourseForm,
  FacilityHoursForm,
  InternationalWorkshopForm,
  SummerClosureForm,
  HomeBaseForm,
} from "./types";

function s(value: string): string {
  return JSON.stringify(value);
}

export function serializeTravels(data: {
  intensiveCourses: IntensiveCoursesForm;
  regularClasses: RegularClassForm[];
  philosophyCourse: PhilosophyCourseForm;
  facilityHours: FacilityHoursForm;
  internationalWorkshops: InternationalWorkshopForm[];
  summerClosure: SummerClosureForm;
  homeBase: HomeBaseForm;
}): string {
  const lines: string[] = [];

  lines.push(`/**`);
  lines.push(` * EDITABLE: In-person workshops, intensives, and class schedule.`);
  lines.push(` * Source: https://www.iyengaryoga.in/schedule`);
  lines.push(` * Last updated: ${new Date().toISOString().slice(0, 10)}`);
  lines.push(` */`);
  lines.push(``);
  lines.push(`export interface IntensiveCourse {`);
  lines.push(`  dates: string;`);
  lines.push(`  status: "upcoming" | "completed" | "ongoing";`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export interface RegularClass {`);
  lines.push(`  title: string;`);
  lines.push(`  instructor: string;`);
  lines.push(`  schedule: string;`);
  lines.push(`  pricing: { sessions: string; price: string }[];`);
  lines.push(`  note?: string;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export interface InternationalWorkshop {`);
  lines.push(`  id: string;`);
  lines.push(`  city: string;`);
  lines.push(`  country: string;`);
  lines.push(`  dates: string;`);
  lines.push(`  image?: string;`);
  lines.push(`  status: "upcoming" | "completed";`);
  lines.push(`}`);
  lines.push(``);

  // intensiveCourses
  const ic = data.intensiveCourses;
  lines.push(`export const intensiveCourses = {`);
  lines.push(`  title: ${s(ic.title)},`);
  lines.push(`  instructor: ${s(ic.instructor)},`);
  lines.push(`  location: ${s(ic.location)},`);
  lines.push(`  requirement: ${s(ic.requirement)},`);
  lines.push(`  pricing: ${s(ic.pricing)},`);
  lines.push(`  image: ${s(ic.image)},`);
  lines.push(`  sessions: [`);
  for (const sess of ic.sessions) {
    lines.push(`    { dates: ${s(sess.dates)}, status: ${s(sess.status)} as const },`);
  }
  lines.push(`  ],`);
  lines.push(`};`);
  lines.push(``);

  // regularClasses
  lines.push(`export const regularClasses: RegularClass[] = [`);
  for (const rc of data.regularClasses) {
    lines.push(`  {`);
    lines.push(`    title: ${s(rc.title)},`);
    lines.push(`    instructor: ${s(rc.instructor)},`);
    lines.push(`    schedule: ${s(rc.schedule)},`);
    lines.push(`    pricing: [`);
    for (const p of rc.pricing) {
      lines.push(`      { sessions: ${s(p.sessions)}, price: ${s(p.price)} },`);
    }
    lines.push(`    ],`);
    if (rc.note) {
      lines.push(`    note: ${s(rc.note)},`);
    }
    lines.push(`  },`);
  }
  lines.push(`];`);
  lines.push(``);

  // philosophyCourse
  const pc = data.philosophyCourse;
  lines.push(`export const philosophyCourse = {`);
  lines.push(`  title: ${s(pc.title)},`);
  lines.push(`  instructor: ${s(pc.instructor)},`);
  lines.push(`  topics: ${s(pc.topics)},`);
  lines.push(`  pricing: ${s(pc.pricing)},`);
  lines.push(`  status: ${s(pc.status)},`);
  lines.push(`};`);
  lines.push(``);

  // facilityHours
  const fh = data.facilityHours;
  lines.push(`export const facilityHours = {`);
  lines.push(`  selfPractice: ${s(fh.selfPractice)},`);
  lines.push(`  officeMorning: ${s(fh.officeMorning)},`);
  lines.push(`  officeEvening: ${s(fh.officeEvening)},`);
  lines.push(`};`);
  lines.push(``);

  // internationalWorkshops
  lines.push(`export const internationalWorkshops: InternationalWorkshop[] = [`);
  for (const w of data.internationalWorkshops) {
    lines.push(`  {`);
    lines.push(`    id: ${s(w.id)},`);
    lines.push(`    city: ${s(w.city)},`);
    lines.push(`    country: ${s(w.country)},`);
    lines.push(`    dates: ${s(w.dates)},`);
    if (w.image) {
      lines.push(`    image: ${s(w.image)},`);
    }
    lines.push(`    status: ${s(w.status)},`);
    lines.push(`  },`);
  }
  lines.push(`];`);
  lines.push(``);

  // summerClosure
  const sc = data.summerClosure;
  lines.push(`export const summerClosure = {`);
  lines.push(`  note: ${s(sc.note)},`);
  lines.push(`  detail:`);
  lines.push(`    ${s(sc.detail)},`);
  lines.push(`};`);
  lines.push(``);

  // homeBase
  const hb = data.homeBase;
  lines.push(`/**`);
  lines.push(` * Home base information (used on contact page too).`);
  lines.push(` */`);
  lines.push(`export const homeBase = {`);
  lines.push(`  name: ${s(hb.name)},`);
  lines.push(`  address:`);
  lines.push(`    ${s(hb.address)},`);
  lines.push(`  description:`);
  lines.push(`    ${s(hb.description)},`);
  lines.push(`  schedule: [`);
  for (const item of hb.schedule) {
    lines.push(`    { day: ${s(item.day)}, time: ${s(item.time)} },`);
  }
  lines.push(`  ],`);
  lines.push(`};`);
  lines.push(``);

  return lines.join("\n");
}
