"use client";

import { useState, useEffect, useCallback } from "react";
import { onlineClasses as defaultClasses, registrationInfo as defaultReg } from "@/data/online-classes";
import {
  intensiveCourses as defaultIntensive,
  regularClasses as defaultRegular,
  philosophyCourse as defaultPhilo,
  facilityHours as defaultHours,
  internationalWorkshops as defaultWorkshops,
  summerClosure as defaultClosure,
  homeBase as defaultHome,
} from "@/data/travels";
import { fetchFile, commitFile } from "@/lib/admin/github";
import { serializeOnlineClasses } from "@/lib/admin/serialize-online";
import { serializeTravels } from "@/lib/admin/serialize-travels";
import type {
  GitHubConfig,
  OnlineClassForm,
  RegistrationInfoForm,
  IntensiveCoursesForm,
  RegularClassForm,
  PhilosophyCourseForm,
  FacilityHoursForm,
  InternationalWorkshopForm,
  SummerClosureForm,
  HomeBaseForm,
} from "@/lib/admin/types";

const ADMIN_PASSWORD = "samatvayoga-admin";
const GITHUB_OWNER = "harayanan";
const GITHUB_REPO = "samatvayoga-site";
const ONLINE_PATH = "src/data/online-classes.ts";
const TRAVELS_PATH = "src/data/travels.ts";

// --- Helpers ---

function toOnlineForm(c: typeof defaultClasses[number]): OnlineClassForm {
  return { ...c, registrationNote: c.registrationNote ?? "" };
}

function toRegForm(c: typeof defaultRegular[number]): RegularClassForm {
  return { ...c, note: c.note ?? "" };
}

function toWorkshopForm(w: typeof defaultWorkshops[number]): InternationalWorkshopForm {
  return { ...w, image: w.image ?? "" };
}

function toHomeForm(h: typeof defaultHome): HomeBaseForm {
  return { ...h, schedule: h.schedule.map((s) => ({ ...s })) };
}

// --- Collapsible Section ---

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-md mb-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left font-medium text-sm"
      >
        {title}
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="p-4 space-y-4">{children}</div>}
    </div>
  );
}

// --- Form Inputs ---

const inputCls = "w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-saffron-500";
const labelCls = "block text-xs font-medium text-gray-600 mb-1";
const btnCls = "px-3 py-1.5 text-xs rounded-sm font-medium";
const btnPrimary = `${btnCls} bg-saffron-600 text-white hover:bg-saffron-700`;
const btnDanger = `${btnCls} bg-red-50 text-red-600 hover:bg-red-100 border border-red-200`;
const btnSecondary = `${btnCls} bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300`;

function Field({ label, value, onChange, textarea, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; textarea?: boolean; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {textarea ? (
        <textarea className={`${inputCls} h-24`} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      ) : (
        <input className={inputCls} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      )}
    </label>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

function Select({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <select className={inputCls} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

// ============================================================
// Main Admin Page
// ============================================================

export default function AdminPage() {
  // --- Auth ---
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // --- Settings ---
  const [showSettings, setShowSettings] = useState(false);
  const [pat, setPat] = useState("");

  // --- Tab ---
  const [tab, setTab] = useState<"online" | "travels">("online");

  // --- Status ---
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const [saving, setSaving] = useState(false);

  // --- SHA tracking ---
  const [onlineSha, setOnlineSha] = useState("");
  const [travelsSha, setTravelsSha] = useState("");

  // --- Online Classes State ---
  const [classes, setClasses] = useState<OnlineClassForm[]>(defaultClasses.map(toOnlineForm));
  const [regInfo, setRegInfo] = useState<RegistrationInfoForm>({ ...defaultReg });

  // --- Travels State ---
  const [intensive, setIntensive] = useState<IntensiveCoursesForm>({
    ...defaultIntensive,
    sessions: defaultIntensive.sessions.map((s) => ({ ...s })),
  });
  const [regular, setRegular] = useState<RegularClassForm[]>(defaultRegular.map(toRegForm));
  const [philo, setPhilo] = useState<PhilosophyCourseForm>({ ...defaultPhilo });
  const [hours, setHours] = useState<FacilityHoursForm>({ ...defaultHours });
  const [workshops, setWorkshops] = useState<InternationalWorkshopForm[]>(defaultWorkshops.map(toWorkshopForm));
  const [closure, setClosure] = useState<SummerClosureForm>({ ...defaultClosure });
  const [home, setHome] = useState<HomeBaseForm>(toHomeForm(defaultHome));

  // Load PAT from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("admin-pat");
    if (stored) setPat(stored);
  }, []);

  // Save PAT to localStorage
  const savePat = () => {
    localStorage.setItem("admin-pat", pat);
    setShowSettings(false);
    setStatus({ type: "info", message: "GitHub PAT saved." });
  };

  // Fetch latest from GitHub on auth
  const ghConfig = useCallback((): GitHubConfig => ({
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    pat,
  }), [pat]);

  const loadFromGitHub = useCallback(async () => {
    if (!pat) return;
    setStatus({ type: "info", message: "Loading latest data from GitHub..." });
    try {
      const [onlineFile, travelsFile] = await Promise.all([
        fetchFile(ghConfig(), ONLINE_PATH),
        fetchFile(ghConfig(), TRAVELS_PATH),
      ]);
      setOnlineSha(onlineFile.sha);
      setTravelsSha(travelsFile.sha);
      setStatus({ type: "success", message: "Loaded latest data from GitHub." });
    } catch {
      setStatus({ type: "info", message: "Using build-time data (GitHub fetch failed — check PAT)." });
    }
  }, [pat, ghConfig]);

  useEffect(() => {
    if (authed && pat) loadFromGitHub();
  }, [authed, pat, loadFromGitHub]);

  // --- Auth ---
  const [showPwd, setShowPwd] = useState(false);

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      setAuthError("");
      setAuthed(true);
    } else {
      setAuthError("Incorrect password");
    }
  }

  // --- Auth Gate ---
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-sm">
          <h1 className="text-lg font-semibold text-gray-900 mb-1">Samatva Yoga — Admin</h1>
          <p className="text-sm text-gray-500 mb-6">Enter password to continue</p>
          <div className="relative mb-3">
            <input
              type={showPwd ? "text" : "password"}
              className={`${inputCls} pr-10`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
              placeholder="Password"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPwd ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 0012 5.25c3.904 0 7.26 2.14 8.98 5.25a10.477 10.477 0 01-8.98 5.25 10.477 10.477 0 01-8.02-5.25z" /><circle cx={12} cy={10.5} r={2.25} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><circle cx={12} cy={12} r={2.25} /></svg>
              )}
            </button>
          </div>
          {authError && <p className="text-xs text-red-500 mb-3">{authError}</p>}
          <button className={`${btnPrimary} w-full`} onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  // --- Updaters ---
  function updateClass(idx: number, patch: Partial<OnlineClassForm>) {
    setClasses((prev) => prev.map((c, i) => (i === idx ? { ...c, ...patch } : c)));
  }

  function addClass() {
    setClasses((prev) => [
      ...prev,
      { id: `new-class-${Date.now()}`, title: "", subtitle: "", description: "", schedule: "", time: "", language: "English", recordingsAvailable: false, registrationNote: "" },
    ]);
  }

  function removeClass(idx: number) {
    setClasses((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateWorkshop(idx: number, patch: Partial<InternationalWorkshopForm>) {
    setWorkshops((prev) => prev.map((w, i) => (i === idx ? { ...w, ...patch } : w)));
  }

  function addWorkshop() {
    setWorkshops((prev) => [
      ...prev,
      { id: `workshop-${Date.now()}`, city: "", country: "", dates: "", image: "", status: "upcoming" as const },
    ]);
  }

  function removeWorkshop(idx: number) {
    setWorkshops((prev) => prev.filter((_, i) => i !== idx));
  }

  function addIntensiveSession() {
    setIntensive((prev) => ({
      ...prev,
      sessions: [...prev.sessions, { dates: "", status: "upcoming" as const }],
    }));
  }

  function removeIntensiveSession(idx: number) {
    setIntensive((prev) => ({
      ...prev,
      sessions: prev.sessions.filter((_, i) => i !== idx),
    }));
  }

  function updateIntensiveSession(idx: number, patch: Partial<IntensiveCoursesForm["sessions"][number]>) {
    setIntensive((prev) => ({
      ...prev,
      sessions: prev.sessions.map((s, i) => (i === idx ? { ...s, ...patch } : s)),
    }));
  }

  function updateRegularClass(idx: number, patch: Partial<RegularClassForm>) {
    setRegular((prev) => prev.map((c, i) => (i === idx ? { ...c, ...patch } : c)));
  }

  function addRegularClass() {
    setRegular((prev) => [...prev, { title: "", instructor: "", schedule: "", pricing: [{ sessions: "", price: "" }], note: "" }]);
  }

  function removeRegularClass(idx: number) {
    setRegular((prev) => prev.filter((_, i) => i !== idx));
  }

  function addPricingTier(classIdx: number) {
    setRegular((prev) =>
      prev.map((c, i) => (i === classIdx ? { ...c, pricing: [...c.pricing, { sessions: "", price: "" }] } : c)),
    );
  }

  function removePricingTier(classIdx: number, tierIdx: number) {
    setRegular((prev) =>
      prev.map((c, i) => (i === classIdx ? { ...c, pricing: c.pricing.filter((_, j) => j !== tierIdx) } : c)),
    );
  }

  function updatePricingTier(classIdx: number, tierIdx: number, patch: Partial<{ sessions: string; price: string }>) {
    setRegular((prev) =>
      prev.map((c, i) =>
        i === classIdx
          ? { ...c, pricing: c.pricing.map((p, j) => (j === tierIdx ? { ...p, ...patch } : p)) }
          : c,
      ),
    );
  }

  function addHomeSchedule() {
    setHome((prev) => ({ ...prev, schedule: [...prev.schedule, { day: "", time: "" }] }));
  }

  function removeHomeSchedule(idx: number) {
    setHome((prev) => ({ ...prev, schedule: prev.schedule.filter((_, i) => i !== idx) }));
  }

  // --- Serialize ---
  function getOnlineContent() {
    return serializeOnlineClasses(classes, regInfo);
  }

  function getTravelsContent() {
    return serializeTravels({ intensiveCourses: intensive, regularClasses: regular, philosophyCourse: philo, facilityHours: hours, internationalWorkshops: workshops, summerClosure: closure, homeBase: home });
  }

  // --- Save ---
  async function publishOnline() {
    if (!pat) { setStatus({ type: "error", message: "Set your GitHub PAT in Settings first." }); return; }
    setSaving(true);
    setStatus(null);
    try {
      let sha = onlineSha;
      if (!sha) {
        const file = await fetchFile(ghConfig(), ONLINE_PATH);
        sha = file.sha;
      }
      await commitFile(ghConfig(), ONLINE_PATH, getOnlineContent(), sha);
      // Re-fetch to get new SHA
      const updated = await fetchFile(ghConfig(), ONLINE_PATH);
      setOnlineSha(updated.sha);
      setStatus({ type: "success", message: "Online classes published! Site will be live in ~30 seconds." });
    } catch (err) {
      setStatus({ type: "error", message: `Failed: ${err instanceof Error ? err.message : String(err)}` });
    } finally {
      setSaving(false);
    }
  }

  async function publishTravels() {
    if (!pat) { setStatus({ type: "error", message: "Set your GitHub PAT in Settings first." }); return; }
    setSaving(true);
    setStatus(null);
    try {
      let sha = travelsSha;
      if (!sha) {
        const file = await fetchFile(ghConfig(), TRAVELS_PATH);
        sha = file.sha;
      }
      await commitFile(ghConfig(), TRAVELS_PATH, getTravelsContent(), sha);
      const updated = await fetchFile(ghConfig(), TRAVELS_PATH);
      setTravelsSha(updated.sha);
      setStatus({ type: "success", message: "In-person content published! Site will be live in ~30 seconds." });
    } catch (err) {
      setStatus({ type: "error", message: `Failed: ${err instanceof Error ? err.message : String(err)}` });
    } finally {
      setSaving(false);
    }
  }

  function copyToClipboard() {
    const content = tab === "online" ? getOnlineContent() : getTravelsContent();
    navigator.clipboard.writeText(content).then(
      () => setStatus({ type: "info", message: "Copied TypeScript to clipboard." }),
      () => setStatus({ type: "error", message: "Copy failed." }),
    );
  }

  function resetOnline() {
    setClasses(defaultClasses.map(toOnlineForm));
    setRegInfo({ ...defaultReg });
    setStatus({ type: "info", message: "Online classes reset to build-time data." });
  }

  function resetTravels() {
    setIntensive({ ...defaultIntensive, sessions: defaultIntensive.sessions.map((s) => ({ ...s })) });
    setRegular(defaultRegular.map(toRegForm));
    setPhilo({ ...defaultPhilo });
    setHours({ ...defaultHours });
    setWorkshops(defaultWorkshops.map(toWorkshopForm));
    setClosure({ ...defaultClosure });
    setHome(toHomeForm(defaultHome));
    setStatus({ type: "info", message: "In-person content reset to build-time data." });
  }

  // --- Render ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-sm font-semibold">Samatva Yoga — Content Editor</h1>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-xs text-saffron-600 hover:underline">View Site →</a>
          <button onClick={() => setShowSettings(!showSettings)} className="text-gray-500 hover:text-gray-700" title="Settings">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" /><circle cx={12} cy={12} r={3} /></svg>
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Settings Panel */}
        {showSettings && (
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-6">
            <h2 className="text-sm font-semibold mb-3">GitHub Settings</h2>
            <Field
              label="Personal Access Token (PAT)"
              value={pat}
              onChange={setPat}
              placeholder="ghp_xxxxxxxxxxxx"
            />
            <p className="text-xs text-gray-400 mt-1 mb-3">
              Needs &quot;Contents: Read and write&quot; permission on {GITHUB_OWNER}/{GITHUB_REPO}. Stored in localStorage only.
            </p>
            <button className={btnPrimary} onClick={savePat}>Save PAT</button>
          </div>
        )}

        {/* Status Banner */}
        {status && (
          <div className={`rounded-sm px-4 py-2 text-sm mb-4 ${
            status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" :
            status.type === "error" ? "bg-red-50 text-red-700 border border-red-200" :
            "bg-blue-50 text-blue-700 border border-blue-200"
          }`}>
            {status.message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200">
          {(["online", "travels"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                tab === t ? "border-saffron-500 text-saffron-700" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t === "online" ? "Online Classes" : "In-Person & Workshops"}
            </button>
          ))}
        </div>

        {/* ============ TAB: ONLINE CLASSES ============ */}
        {tab === "online" && (
          <div className="space-y-6">
            {/* Registration Info */}
            <Section title="Registration Info" defaultOpen>
              <Field label="Email" value={regInfo.email} onChange={(v) => setRegInfo({ ...regInfo, email: v })} />
              <Field label="WhatsApp" value={regInfo.whatsapp} onChange={(v) => setRegInfo({ ...regInfo, whatsapp: v })} />
              <Field label="Note" value={regInfo.note} onChange={(v) => setRegInfo({ ...regInfo, note: v })} textarea />
            </Section>

            {/* Class List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold">Classes ({classes.length})</h2>
                <button className={btnPrimary} onClick={addClass}>+ Add Class</button>
              </div>

              {classes.map((c, idx) => (
                <Section key={c.id || idx} title={c.title || `Class ${idx + 1}`}>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="ID (slug)" value={c.id} onChange={(v) => updateClass(idx, { id: v })} />
                    <Field label="Title" value={c.title} onChange={(v) => updateClass(idx, { title: v })} />
                    <Field label="Subtitle" value={c.subtitle} onChange={(v) => updateClass(idx, { subtitle: v })} />
                    <Field label="Schedule" value={c.schedule} onChange={(v) => updateClass(idx, { schedule: v })} />
                    <Field label="Time" value={c.time} onChange={(v) => updateClass(idx, { time: v })} />
                    <Field label="Language" value={c.language} onChange={(v) => updateClass(idx, { language: v })} />
                  </div>
                  <Field label="Description" value={c.description} onChange={(v) => updateClass(idx, { description: v })} textarea />
                  <Field label="Registration Note (optional)" value={c.registrationNote} onChange={(v) => updateClass(idx, { registrationNote: v })} />
                  <div className="flex items-center justify-between">
                    <Checkbox label="Recordings available" checked={c.recordingsAvailable} onChange={(v) => updateClass(idx, { recordingsAvailable: v })} />
                    <button className={btnDanger} onClick={() => removeClass(idx)}>Remove Class</button>
                  </div>
                </Section>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button className={btnPrimary} onClick={publishOnline} disabled={saving}>
                {saving ? "Publishing..." : "Publish to GitHub"}
              </button>
              <button className={btnSecondary} onClick={copyToClipboard}>Copy to Clipboard</button>
              <button className={btnSecondary} onClick={resetOnline}>Reset</button>
            </div>
          </div>
        )}

        {/* ============ TAB: IN-PERSON & WORKSHOPS ============ */}
        {tab === "travels" && (
          <div className="space-y-6">
            {/* International Workshops */}
            <Section title={`International Workshops (${workshops.length})`} defaultOpen>
              {workshops.map((w, idx) => (
                <div key={w.id || idx} className="border border-gray-100 rounded-sm p-3 mb-3 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="ID" value={w.id} onChange={(v) => updateWorkshop(idx, { id: v })} />
                    <Field label="City" value={w.city} onChange={(v) => updateWorkshop(idx, { city: v })} />
                    <Field label="Country" value={w.country} onChange={(v) => updateWorkshop(idx, { country: v })} />
                    <Field label="Dates" value={w.dates} onChange={(v) => updateWorkshop(idx, { dates: v })} />
                    <Field label="Image Path" value={w.image} onChange={(v) => updateWorkshop(idx, { image: v })} placeholder="/images/workshop-xxx.webp" />
                    <Select label="Status" value={w.status} onChange={(v) => updateWorkshop(idx, { status: v as "upcoming" | "completed" })} options={["upcoming", "completed"]} />
                  </div>
                  <div className="mt-2 text-right">
                    <button className={btnDanger} onClick={() => removeWorkshop(idx)}>Remove</button>
                  </div>
                </div>
              ))}
              <button className={btnPrimary} onClick={addWorkshop}>+ Add Workshop</button>
            </Section>

            {/* Intensive Courses */}
            <Section title="Intensive Courses">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Title" value={intensive.title} onChange={(v) => setIntensive({ ...intensive, title: v })} />
                <Field label="Instructor" value={intensive.instructor} onChange={(v) => setIntensive({ ...intensive, instructor: v })} />
                <Field label="Location" value={intensive.location} onChange={(v) => setIntensive({ ...intensive, location: v })} />
                <Field label="Requirement" value={intensive.requirement} onChange={(v) => setIntensive({ ...intensive, requirement: v })} />
                <Field label="Pricing" value={intensive.pricing} onChange={(v) => setIntensive({ ...intensive, pricing: v })} />
                <Field label="Image Path" value={intensive.image} onChange={(v) => setIntensive({ ...intensive, image: v })} />
              </div>

              <h3 className="text-xs font-semibold text-gray-600 mt-4 mb-2">Sessions ({intensive.sessions.length})</h3>
              {intensive.sessions.map((sess, idx) => (
                <div key={idx} className="flex items-end gap-3 mb-2">
                  <div className="flex-1">
                    <Field label="Dates" value={sess.dates} onChange={(v) => updateIntensiveSession(idx, { dates: v })} />
                  </div>
                  <div className="w-36">
                    <Select label="Status" value={sess.status} onChange={(v) => updateIntensiveSession(idx, { status: v as "upcoming" | "completed" | "ongoing" })} options={["upcoming", "ongoing", "completed"]} />
                  </div>
                  <button className={`${btnDanger} mb-0.5`} onClick={() => removeIntensiveSession(idx)}>×</button>
                </div>
              ))}
              <button className={btnPrimary} onClick={addIntensiveSession}>+ Add Session</button>
            </Section>

            {/* Regular Classes */}
            <Section title={`Regular Classes (${regular.length})`}>
              {regular.map((rc, idx) => (
                <div key={idx} className="border border-gray-100 rounded-sm p-3 mb-3 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Title" value={rc.title} onChange={(v) => updateRegularClass(idx, { title: v })} />
                    <Field label="Instructor" value={rc.instructor} onChange={(v) => updateRegularClass(idx, { instructor: v })} />
                  </div>
                  <Field label="Schedule" value={rc.schedule} onChange={(v) => updateRegularClass(idx, { schedule: v })} />
                  <Field label="Note" value={rc.note} onChange={(v) => updateRegularClass(idx, { note: v })} />

                  <h4 className="text-xs font-semibold text-gray-500 mt-3 mb-1">Pricing Tiers</h4>
                  {rc.pricing.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-end gap-2 mb-1">
                      <div className="flex-1"><Field label="Sessions" value={p.sessions} onChange={(v) => updatePricingTier(idx, pIdx, { sessions: v })} /></div>
                      <div className="flex-1"><Field label="Price" value={p.price} onChange={(v) => updatePricingTier(idx, pIdx, { price: v })} /></div>
                      <button className={`${btnDanger} mb-0.5`} onClick={() => removePricingTier(idx, pIdx)}>×</button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between mt-2">
                    <button className={btnSecondary} onClick={() => addPricingTier(idx)}>+ Pricing Tier</button>
                    <button className={btnDanger} onClick={() => removeRegularClass(idx)}>Remove Class</button>
                  </div>
                </div>
              ))}
              <button className={btnPrimary} onClick={addRegularClass}>+ Add Regular Class</button>
            </Section>

            {/* Philosophy Course */}
            <Section title="Philosophy Course">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Title" value={philo.title} onChange={(v) => setPhilo({ ...philo, title: v })} />
                <Field label="Instructor" value={philo.instructor} onChange={(v) => setPhilo({ ...philo, instructor: v })} />
                <Field label="Topics" value={philo.topics} onChange={(v) => setPhilo({ ...philo, topics: v })} />
                <Field label="Pricing" value={philo.pricing} onChange={(v) => setPhilo({ ...philo, pricing: v })} />
              </div>
              <Field label="Status" value={philo.status} onChange={(v) => setPhilo({ ...philo, status: v })} />
            </Section>

            {/* Facility Hours */}
            <Section title="Facility Hours">
              <Field label="Self Practice" value={hours.selfPractice} onChange={(v) => setHours({ ...hours, selfPractice: v })} />
              <Field label="Office (Morning)" value={hours.officeMorning} onChange={(v) => setHours({ ...hours, officeMorning: v })} />
              <Field label="Office (Evening)" value={hours.officeEvening} onChange={(v) => setHours({ ...hours, officeEvening: v })} />
            </Section>

            {/* Summer Closure */}
            <Section title="Summer Closure">
              <Field label="Note" value={closure.note} onChange={(v) => setClosure({ ...closure, note: v })} />
              <Field label="Detail" value={closure.detail} onChange={(v) => setClosure({ ...closure, detail: v })} textarea />
            </Section>

            {/* Home Base */}
            <Section title="Home Base">
              <Field label="Name" value={home.name} onChange={(v) => setHome({ ...home, name: v })} />
              <Field label="Address" value={home.address} onChange={(v) => setHome({ ...home, address: v })} textarea />
              <Field label="Description" value={home.description} onChange={(v) => setHome({ ...home, description: v })} textarea />
              <h4 className="text-xs font-semibold text-gray-500 mt-3 mb-1">Schedule</h4>
              {home.schedule.map((s, idx) => (
                <div key={idx} className="flex items-end gap-2 mb-1">
                  <div className="flex-1"><Field label="Day" value={s.day} onChange={(v) => setHome({ ...home, schedule: home.schedule.map((x, i) => (i === idx ? { ...x, day: v } : x)) })} /></div>
                  <div className="flex-1"><Field label="Time" value={s.time} onChange={(v) => setHome({ ...home, schedule: home.schedule.map((x, i) => (i === idx ? { ...x, time: v } : x)) })} /></div>
                  <button className={`${btnDanger} mb-0.5`} onClick={() => removeHomeSchedule(idx)}>×</button>
                </div>
              ))}
              <button className={btnSecondary} onClick={addHomeSchedule}>+ Schedule Row</button>
            </Section>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button className={btnPrimary} onClick={publishTravels} disabled={saving}>
                {saving ? "Publishing..." : "Publish to GitHub"}
              </button>
              <button className={btnSecondary} onClick={copyToClipboard}>Copy to Clipboard</button>
              <button className={btnSecondary} onClick={resetTravels}>Reset</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
