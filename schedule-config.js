// ═══════════════════════════════════════════════════════════════
//  SCHEDULE CONFIG — Single source of truth
//  Edit this file to reshuffle sessions, change times, or dates.
//  The registration page reads from this automatically.
// ═══════════════════════════════════════════════════════════════

const SESSIONS = {
    1: {
        title: 'Chat Smarter, Stay Private',
        tag: 'RAG',
        color: '#2563EB',
        colorClass: 'sc-1',
        desc: 'Securely analyze documents — tenders, legal briefs, reports — 100% offline.',
        audience: ['Students', 'Healthcare', 'Legal Teams', 'Researchers'],
    },
    2: {
        title: 'From Sketch to Reality',
        tag: 'Creative',
        color: '#7C3AED',
        colorClass: 'sc-2',
        desc: 'Generate product photos, sketch-to-render, AI videos — all locally free.',
        audience: ['Students', 'Architects', 'Marketing', 'Creators'],
    },
    3: {
        title: 'Finance AI Agent',
        tag: 'Agents',
        color: '#059669',
        colorClass: 'sc-3',
        desc: 'Build an AI Agent with MCP for live stock data and technical analysis.',
        audience: ['Developers', 'Fintech', 'Analysts', 'Data Scientists'],
    },
    4: {
        title: 'Photoshop-Free Editing',
        tag: 'Editing',
        color: '#0891B2',
        colorClass: 'sc-4',
        desc: 'Remove defects, upscale photos, erase objects — GIMP + OpenVINO AI.',
        audience: ['Photographers', 'Designers', 'SMBs', 'Creators'],
    },
    5: {
        title: 'AI News Anchor',
        tag: 'Voice',
        color: '#DC2626',
        colorClass: 'sc-5',
        desc: 'Build a witty voice AI host. Full STT → LLM → TTS pipeline.',
        audience: ['Developers', 'Students', 'Tech Enthusiasts', 'Founders'],
    },
    6: {
        title: 'IoT Meets AI',
        tag: 'IoT',
        color: '#D97706',
        colorClass: 'sc-6',
        desc: 'Connect ESP32 sensors to AI for real-time monitoring and alerts.',
        audience: ['IoT Devs', 'Students', 'Engineers', 'Smart Home'],
    },
};

// ═══════════════════════════════════════════════════════════════
//  SCHEDULE — Date-wise session assignments
//  Each session has 2 slots (A & B) of 30 minutes each.
//  To reshuffle: change the sessionId or reorder the array.
//  To drop a session on a day: remove it from the array.
//  To add a new date: add a new entry.
// ═══════════════════════════════════════════════════════════════

const SCHEDULE = {
    '16 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 4, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 5, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
    '17 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 4, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 5, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
    '18 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 5, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
    '19 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 4, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 5, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
    '20 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 1, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
    '21 Feb 2026': [
        { sessionId: 1, slots: [{ slotId: 'A', time: '10:00 AM – 10:30 AM' }, { slotId: 'B', time: '10:30 AM – 11:00 AM' }] },
        { sessionId: 2, slots: [{ slotId: 'A', time: '11:00 AM – 11:30 AM' }, { slotId: 'B', time: '11:30 AM – 12:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '12:00 PM – 12:30 PM' }, { slotId: 'B', time: '12:30 PM – 1:00 PM' }] },
        { sessionId: 5, slots: [{ slotId: 'A', time: '02:00 PM – 02:30 PM' }, { slotId: 'B', time: '02:30 PM – 03:00 PM' }] },
        { sessionId: 6, slots: [{ slotId: 'A', time: '03:00 PM – 03:30 PM' }, { slotId: 'B', time: '03:30 PM – 04:00 PM' }] },
        { sessionId: 3, slots: [{ slotId: 'A', time: '04:00 PM – 04:30 PM' }, { slotId: 'B', time: '04:30 PM – 05:00 PM' }] },
    ],
};

// ═══════════════════════════════════════════════════════════════
//  EVENT DATES — derived from SCHEDULE keys automatically
// ═══════════════════════════════════════════════════════════════

const EVENT_DATES = Object.keys(SCHEDULE).map(dateStr => {
    // Parse "16 Feb 2026" → { day, month, weekday }
    const parts = dateStr.split(' ');
    const day = parts[0];
    const month = parts[1] + ' ' + parts[2];
    const dateObj = new Date(dateStr);
    const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    return { day, month, weekday, dateKey: dateStr };
});
