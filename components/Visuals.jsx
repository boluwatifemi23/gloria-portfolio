// Small drawn interfaces for each system. No real screenshots, so no client data.
const Frame = ({ title, children }) => (
  <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_50px_-36px_rgb(var(--navy)/0.5)]">
    <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="ml-3 text-xs text-muted">{title}</span>
    </div>
    <div className="p-4 sm:p-5">{children}</div>
  </div>
);

const tone = { teal: "bg-teal/15 text-teal", amber: "bg-amber/15 text-amber", navy: "bg-navy/15 text-navy", muted: "bg-line text-muted" };
const Badge = ({ t, children }) => <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${tone[t]}`}>{children}</span>;

function Pipeline() {
  const rows = [
    ["Lead 1042", "Rep A", "Priority SQL", "teal", "Confirmed"],
    ["Lead 1043", "Rep B", "SQL", "amber", "SLA 18 min"],
    ["Lead 1044", "Rep C", "MQL", "navy", "In sequence"],
    ["Lead 1045", "Rep A", "Nurture", "muted", "Reactivation"],
  ];
  return (
    <Frame title="Leads">
      <div className="space-y-2">
        {rows.map(([n, r, g, t, s]) => (
          <div key={n} className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2 text-xs">
            <span className="font-semibold">{n}</span>
            <span className="hidden text-muted sm:inline">{r}</span>
            <Badge t={t}>{g}</Badge>
            <span className="text-muted">{s}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Cleanup() {
  return (
    <Frame title="Change batch #18">
      <p className="text-sm font-semibold">Merge 3 duplicate contacts</p>
      <p className="mt-1 text-xs text-muted">Matched by normalised phone number. Nothing changes until approved.</p>
      <div className="mt-4 space-y-1.5 text-xs">
        <div className="flex justify-between rounded-md bg-paper px-3 py-1.5"><span>+234 80• ••• 1290</span><Badge t="teal">Keep</Badge></div>
        <div className="flex justify-between rounded-md bg-paper px-3 py-1.5"><span>Call record 08••1290</span><Badge t="amber">Merge</Badge></div>
        <div className="flex justify-between rounded-md bg-paper px-3 py-1.5"><span>Web form duplicate</span><Badge t="amber">Merge</Badge></div>
      </div>
      <div className="mt-4 flex gap-2">
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-paper">Approve batch</span>
        <span className="rounded-full border border-line px-3 py-1 text-xs">Undo available</span>
      </div>
    </Frame>
  );
}

function Rules() {
  const rules = [
    ["Reply contains STOP", "Opt out everywhere"],
    ["No click after 3 days", "Move to group B"],
    ["Link clicked", "Create task for owner"],
    ["Delivery failed", "Retry on next route"],
  ];
  return (
    <Frame title="SMS rules">
      <div className="space-y-2">
        {rules.map(([w, t]) => (
          <div key={w} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs">
            <span className="rounded-md border border-line px-2.5 py-1.5">{w}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-teal" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            <span className="rounded-md bg-teal/10 px-2.5 py-1.5 text-teal">{t}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Dashboard() {
  const bars = [62, 48, 80, 35, 71, 54, 88];
  return (
    <Frame title="Funnel this week">
      <div className="flex h-28 items-end gap-2">
        {bars.map((h, i) => (<div key={i} className="flex-1 rounded-t bg-navy/70" style={{ height: `${h}%` }} />))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
        {[["A", "teal"], ["B", "navy"], ["C", "amber"], ["D", "muted"]].map(([g, t], i) => (
          <div key={g} className="rounded-lg border border-line py-2"><Badge t={t}>{g}</Badge><p className="mt-1 text-muted">Agency {i + 1}</p></div>
        ))}
      </div>
    </Frame>
  );
}

function WhatsApp() {
  return (
    <Frame title="Broadcast: Weekend viewing">
      <div className="space-y-2 text-xs">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-teal/15 px-3 py-2">Hi {"{{first_name}}"}, viewings open this Saturday. Reply YES to book a slot.</div>
        <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-paper px-3 py-2">YES</div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg border border-line py-2"><p className="font-display text-base font-bold">1,240</p><p className="text-muted">Sent</p></div>
        <div className="rounded-lg border border-line py-2"><p className="font-display text-base font-bold">96%</p><p className="text-muted">Delivered</p></div>
        <div className="rounded-lg border border-line py-2"><p className="font-display text-base font-bold">212</p><p className="text-muted">Replies</p></div>
      </div>
      <p className="mt-3 text-[11px] text-muted">Illustrative numbers.</p>
    </Frame>
  );
}

export default function Visual({ kind }) {
  return { pipeline: <Pipeline />, cleanup: <Cleanup />, rules: <Rules />, dashboard: <Dashboard />, whatsapp: <WhatsApp /> }[kind] || null;
}
