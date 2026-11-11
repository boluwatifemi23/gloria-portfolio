// All the words on the site live here. Edit this file to update the portfolio.

export const profile = {
  name: "Aguedu Uchechukwu Gloria",
  shortName: "Gloria Aguedu",
  role: "CRM Systems Lead",
  headline: "I build the CRM into the system a sales team runs on.",
  intro:
    "I own a Freshsales CRM end to end, from data model to dashboards, and I build the integration layer around it myself. Every new lead, missed SLA and cooling prospect becomes a clear next action for a named person.",
  location: "Lagos, Nigeria",
  availability: "Open to remote roles",
  email: "uchechukwugloria44@gmail.com",
  phone: "+234 802 358 5979",
  github: "https://github.com/boluwatifemi23",
  linkedin: "", // paste your LinkedIn URL here to show it
  cvFile: "/Aguedu_Gloria_CV.pdf",
};

// The hero animation follows one lead through these stages.
export const leadJourney = [
  { label: "Lead captured", detail: "Web form, social DM or WhatsApp, with source and UTM saved" },
  { label: "Routed to a rep", detail: "Round robin across available SDRs, right product pipeline" },
  { label: "30-minute SLA task", detail: "Accept or reject, or it moves to the next rep in 24 hours" },
  { label: "Scored and graded", detail: "Priority SQL, SQL, MQL or Nurture, written back to the CRM" },
  { label: "Nurtured", detail: "Email, SMS and WhatsApp steps; a reply anywhere stops the rest" },
  { label: "Appointment confirmed", detail: "Customer confirms from the email, the rep sees it in the CRM" },
];

export const proof = [
  { value: "41", label: "email and WhatsApp sequences running" },
  { value: "95 → 5", label: "deal fields after the data clean-up" },
  { value: "7", label: "product pipelines with automatic routing" },
  { value: "26,000", label: "opt-outs moved into global suppression" },
];

// Case studies. "visual" picks the small drawn UI shown beside each one.
export const caseStudies = [
  {
    id: "sql-conversion-machine",
    title: "SQL Conversion Machine",
    summary: "The production system that runs the sales floor's day.",
    problem:
      "Leads arrived from many channels and sat untouched. Follow-up lived across three separate apps, and nobody could see which rep owned what.",
    built: [
      "Round-robin lead distribution that skips reps who are off and never overrides a rep already working a lead",
      "A 30-minute accept or reject task on every new MQL, and automatic reassignment after 24 hours of no activity",
      "Lead scoring that writes a score and grade to every record and creates prioritised tasks",
      "A 16-step nurture per product line, a 20-email reactivation programme, and confirm and reschedule pages for appointments",
      "Live management dashboards, call logs and data-health checks",
    ],
    results: [
      "Live in production since October 2026",
      "Three legacy apps consolidated into one system",
      "Every lead has an owner and a next action",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Freshsales API", "SendGrid", "Freshcaller API"],
    visual: "pipeline",
    featured: true,
  },
  {
    id: "crm-clean-up",
    title: "CRM Clean-up System",
    summary: "Data quality without silent edits.",
    problem:
      "The CRM had grown messy: about 95 deal fields, duplicate contacts, records created by stray phone calls, and non-buyers mixed in with real leads.",
    built: [
      "A read-only mirror of every contact, deal, pipeline and field, plus a field-usage audit",
      "Cleaning rules that only propose change batches, each one approvable and undoable",
      "Duplicate detection, and a finder that matches call-created records to the real lead by phone number",
      "Company accounts created from work-email domains, and non-buyers flagged for review instead of deleted",
      "A nightly re-read window so audits never use up the live system's API budget",
    ],
    results: ["Deal fields cut from about 95 to 5", "Duplicates caught instead of lost", "Nothing deleted without approval"],
    stack: ["Node.js", "Freshsales API"],
    visual: "cleanup",
  },
  {
    id: "sms-sequence-engine",
    title: "SMS Sequence Engine",
    summary: "Rules-driven SMS that reacts to what each person does.",
    problem:
      "SMS follow-up was manual and blind: no way to react to replies or clicks, and no protection for people who opted out or had already paid.",
    built: [
      "Switchable gateways (Sendchamp, Termii, Twilio) with DND, non-DND and international routes",
      "Triggers on a reply or keyword, a link click, no response after X days, or a failed delivery",
      "Actions inside Freshsales: stop, jump, pause, set a field, or assign to a person, team or round robin",
      "Branded short links with clicks fed back into the sequence logic",
      "STOP keywords honoured automatically, and a paid-customer check so clients are never chased",
    ],
    results: ["Became the blueprint for event-based multichannel sequences", "Opt-outs respected on every send"],
    stack: ["PHP", "MySQL", "Sendchamp", "Termii", "Twilio", "Freshsales API"],
    visual: "rules",
  },
  {
    id: "kpi-dashboard",
    title: "Management KPI Dashboards",
    summary: "One view of the funnel, and who is holding it up.",
    problem: "Leadership had no live view of registrations, conversion or rep performance without exporting spreadsheets.",
    built: [
      "Real-time views of registrations, funnel conversion, allocation status and product breakdown",
      "Per-rep stalled-lead accountability",
      "Read-only MD and agency dashboards inside the CRM, with agencies graded A to D",
      "Call data from Freshcaller counted correctly, with a call-log report covering outcome, duration and recordings",
    ],
    results: ["Daily recommendations for the sales team", "Leadership sees the numbers without leaving the CRM"],
    stack: ["Node.js", "Express", "Freshsales API", "Freshcaller API"],
    visual: "dashboard",
  },
  {
    id: "whatsapp-broadcast",
    title: "WhatsApp Broadcast Tool",
    summary: "Bulk WhatsApp and sequences with delivery analytics.",
    problem: "The team needed to reach leads on WhatsApp at scale while staying inside approved templates.",
    built: [
      "Bulk sending to segments through Freshchat's outbound messaging API",
      "Timed WhatsApp sequences built from approved templates",
      "Delivery analytics for every send",
    ],
    results: ["16 WhatsApp sequences live", "Conversations re-opened after the 24-hour window with approved templates"],
    stack: ["Node.js", "Tailwind CSS", "Freshchat API"],
    visual: "whatsapp",
  },
];

// Shown in order, because they are stages of a customer's lifecycle.
export const lifecycle = [
  {
    stage: "First contact",
    programmes: ["LinkedIn Sales Navigator outreach (9 sequences)", "Product nurture packs for 4 product lines"],
  },
  {
    stage: "Qualification",
    programmes: ["16 conversion email sequences for the SDR team", "16 WhatsApp follow-up sequences"],
  },
  {
    stage: "Appointment",
    programmes: [
      "16-step SQL nurture, personalised per product line",
      "3 timed rep calls: 48 hours, 24 hours and the morning of",
      "Confirm and reschedule pages that alert the rep",
    ],
  },
  {
    stage: "Long term",
    programmes: ["Weekly email programme", "International (diaspora) buyer sequences"],
  },
  {
    stage: "Reactivation",
    programmes: ["20-email reactivation; disengaged leads move in automatically"],
  },
];

export const skills = [
  {
    group: "CRM and sales tools",
    items: ["Freshsales", "Freshmarketer", "Freshchat", "Freshcaller", "SendGrid", "LinkedIn Sales Navigator", "WhatsApp Business", "Sendchamp", "Termii", "Twilio"],
  },
  {
    group: "Development",
    items: ["JavaScript", "Node.js", "Express", "MongoDB", "PHP", "MySQL", "React", "Next.js", "Tailwind CSS", "REST APIs", "Webhooks"],
  },
  { group: "Deployment", items: ["Git and GitHub", "Render", "Hostinger", "MongoDB Atlas", "Vercel"] },
  {
    group: "How I work",
    items: ["Technical requirements documents", "Staged rollouts with trial modes", "Test-lead verification", "User guides and training"],
  },
];

export const experience = [
  {
    role: "CRM Systems Lead / CRM Developer",
    org: "Real estate sales organisation",
    period: "2026 – present",
    points: [
      "Own the Freshsales CRM end to end for SDR, closer and partner teams across 7 product lines",
      "Built and run the SQL Conversion Machine, the clean-up system and the management dashboards",
      "Wrote the user guide and trained the SDR team; configured the HRMS for 36 staff",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    period: "2025 – present",
    points: ["Built and deployed client systems, including an ordering platform with Stripe checkout and automated emails"],
  },
];

export const education = [
  "Diploma in Software Engineering, SQI College of ICT, Osogbo, 2025",
  "B.Sc. Microbiology (Industrial Biotechnology), Caleb University, Imota, 2025",
];

// Demo video. Keep this off until the recording no longer shows company names,
// product names or real email copy. Then set enabled to true.
// You can also paste an unlisted YouTube embed link into youtubeEmbed instead.
export const demoVideo = {
  enabled: true,
  file: "/demo/sql-conversion-machine.mp4",
  poster: "/demo/sql-conversion-machine-poster.jpg",
  youtubeEmbed: "", // e.g. "https://www.youtube.com/embed/VIDEO_ID"
};
