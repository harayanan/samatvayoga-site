import type { OnlineClassForm, RegistrationInfoForm } from "./types";

function s(value: string): string {
  return JSON.stringify(value);
}

export function serializeOnlineClasses(
  classes: OnlineClassForm[],
  registration: RegistrationInfoForm,
): string {
  const lines: string[] = [];

  lines.push(`export interface OnlineClass {`);
  lines.push(`  id: string;`);
  lines.push(`  title: string;`);
  lines.push(`  subtitle: string;`);
  lines.push(`  description: string;`);
  lines.push(`  schedule: string;`);
  lines.push(`  time: string;`);
  lines.push(`  language: string;`);
  lines.push(`  recordingsAvailable: boolean;`);
  lines.push(`  registrationNote?: string;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`/**`);
  lines.push(` * EDITABLE: Update this array to add/remove/modify online classes.`);
  lines.push(` * Changes here will automatically reflect on the website.`);
  lines.push(` */`);
  lines.push(`export const onlineClasses: OnlineClass[] = [`);

  for (const c of classes) {
    lines.push(`  {`);
    lines.push(`    id: ${s(c.id)},`);
    lines.push(`    title: ${s(c.title)},`);
    lines.push(`    subtitle: ${s(c.subtitle)},`);
    lines.push(`    description:`);
    lines.push(`      ${s(c.description)},`);
    lines.push(`    schedule: ${s(c.schedule)},`);
    lines.push(`    time: ${s(c.time)},`);
    lines.push(`    language: ${s(c.language)},`);
    lines.push(`    recordingsAvailable: ${c.recordingsAvailable},`);
    if (c.registrationNote) {
      lines.push(`    registrationNote: ${s(c.registrationNote)},`);
    }
    lines.push(`  },`);
  }

  lines.push(`];`);
  lines.push(``);
  lines.push(`export const registrationInfo = {`);
  lines.push(`  whatsapp: ${s(registration.whatsapp)},`);
  lines.push(`  email: ${s(registration.email)},`);
  lines.push(`  note: ${s(registration.note)},`);
  lines.push(`};`);
  lines.push(``);

  return lines.join("\n");
}
