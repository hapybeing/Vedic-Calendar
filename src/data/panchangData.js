const tithiCycle = [
  'Shukla Pratipada', 'Shukla Dwitiya', 'Shukla Tritiya', 'Shukla Chaturthi', 'Shukla Panchami',
  'Shukla Shashthi', 'Shukla Saptami', 'Shukla Ashtami', 'Shukla Navami', 'Shukla Dashami',
  'Shukla Ekadashi', 'Shukla Dwadashi', 'Shukla Trayodashi', 'Shukla Chaturdashi', 'Purnima',
  'Krishna Pratipada', 'Krishna Dwitiya', 'Krishna Tritiya', 'Krishna Chaturthi', 'Krishna Panchami',
  'Krishna Shashthi', 'Krishna Saptami', 'Krishna Ashtami', 'Krishna Navami', 'Krishna Dashami',
  'Krishna Ekadashi', 'Krishna Dwadashi', 'Krishna Trayodashi', 'Krishna Chaturdashi', 'Amavasya',
];

const nakshatraCycle = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha',
  'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha',
  'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati',
];

const yogaCycle = [
  'Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti',
  'Shoola', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata',
  'Variyan', 'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti',
];

const karanaCycle = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Garija', 'Vanija', 'Vishti'];

const festivalLookup = {
  '01-14': 'Makara Sankranti',
  '03-08': 'Maha Shivaratri',
  '03-25': 'Holika Dahan',
  '03-26': 'Holi',
  '04-17': 'Rama Navami',
  '05-03': 'Akshaya Tritiya',
  '06-21': 'Ganga Dussehra',
  '08-16': 'Janmashtami',
  '09-07': 'Ganesh Chaturthi',
  '10-19': 'Navratri Begins',
  '10-31': 'Diwali',
  '11-02': 'Govardhan Puja',
};

const favorableWindow = ['06:12–07:28', '09:04–10:25', '16:42–18:03'];
const cautionWindow = ['07:30–09:00 (Rahu Kalam)', '13:30–15:00 (Yamaganda)'];

const baseDate = new Date('2026-01-01T00:00:00');

const diffDays = (date) => Math.floor((date.getTime() - baseDate.getTime()) / 86400000);

const significance = (yoga, tithi, festival) => {
  if (festival) return 'Auspicious';
  if (yoga.includes('Siddhi') || yoga.includes('Shubha') || tithi.includes('Ekadashi')) return 'Favorable';
  if (tithi.includes('Amavasya') || yoga.includes('Vyatipata')) return 'Reflective';
  return 'Neutral';
};

export function getPanchangForDate(date, location = 'Varanasi, IN') {
  const index = diffDays(date);
  const tithi = tithiCycle[(index % tithiCycle.length + tithiCycle.length) % tithiCycle.length];
  const nakshatra = nakshatraCycle[(index % nakshatraCycle.length + nakshatraCycle.length) % nakshatraCycle.length];
  const yoga = yogaCycle[(index % yogaCycle.length + yogaCycle.length) % yogaCycle.length];
  const karana = karanaCycle[(index % karanaCycle.length + karanaCycle.length) % karanaCycle.length];
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const festival = festivalLookup[monthDay] || '';

  return {
    isoDate: date.toISOString().split('T')[0],
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    tithi,
    nakshatra,
    yoga,
    karana,
    festival,
    location,
    significance: significance(yoga, tithi, festival),
    bestWindows: favorableWindow,
    cautionWindows: cautionWindow,
  };
}

export function getMonthPanchang(year, monthIndex, location) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => getPanchangForDate(new Date(year, monthIndex, i + 1), location));
}
