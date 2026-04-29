const tithiCycle = ['Shukla Pratipada','Shukla Dwitiya','Shukla Tritiya','Shukla Chaturthi','Shukla Panchami','Shukla Shashthi','Shukla Saptami','Shukla Ashtami','Shukla Navami','Shukla Dashami','Shukla Ekadashi','Shukla Dwadashi','Shukla Trayodashi','Shukla Chaturdashi','Purnima','Krishna Pratipada','Krishna Dwitiya','Krishna Tritiya','Krishna Chaturthi','Krishna Panchami','Krishna Shashthi','Krishna Saptami','Krishna Ashtami','Krishna Navami','Krishna Dashami','Krishna Ekadashi','Krishna Dwadashi','Krishna Trayodashi','Krishna Chaturdashi','Amavasya'];
const nakshatraCycle = ['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'];
const yogaCycle = ['Vishkambha','Priti','Ayushman','Saubhagya','Shobhana','Atiganda','Sukarma','Dhriti','Shoola','Ganda','Vriddhi','Dhruva','Vyaghata','Harshana','Vajra','Siddhi','Vyatipata','Variyan','Parigha','Shiva','Siddha','Sadhya','Shubha','Shukla','Brahma','Indra','Vaidhriti'];
const karanaCycle = ['Bava','Balava','Kaulava','Taitila','Garija','Vanija','Vishti'];
const festivalLookup = {'01-14':'Makara Sankranti','03-08':'Maha Shivaratri','03-26':'Holi','04-17':'Rama Navami','05-03':'Akshaya Tritiya','08-16':'Janmashtami','10-31':'Diwali'};
const baseDate = new Date('2026-01-01T00:00:00');

const indexOf = (arr, val) => arr.indexOf(val);
const diffDays = (date) => Math.floor((date.getTime() - baseDate.getTime()) / 86400000);

const scoreDay = ({ tithi, nakshatra, yoga }) => {
  let score = 50;
  if (tithi.includes('Ekadashi') || tithi.includes('Purnima')) score += 18;
  if (tithi.includes('Amavasya') || tithi.includes('Chaturthi')) score -= 12;
  if (['Rohini', 'Pushya', 'Hasta', 'Revati'].includes(nakshatra)) score += 15;
  if (['Mula', 'Ardra', 'Ashlesha'].includes(nakshatra)) score -= 10;
  if (['Siddhi', 'Shubha', 'Saubhagya', 'Sukarma'].includes(yoga)) score += 12;
  if (['Vyatipata', 'Vajra', 'Atiganda', 'Shoola'].includes(yoga)) score -= 15;
  score -= 8; // Rahu/Yamaganda baseline risk
  return Math.min(100, Math.max(10, score));
};

const labelFor = (score) => score >= 85 ? 'Peak Day' : score >= 70 ? 'Strong Day' : score >= 50 ? 'Neutral' : score >= 30 ? 'Caution' : 'Avoid';

export function getPanchangForDate(date, location = 'Varanasi, IN') {
  const idx = diffDays(date);
  const tithi = tithiCycle[(idx % tithiCycle.length + tithiCycle.length) % tithiCycle.length];
  const nakshatra = nakshatraCycle[(idx % nakshatraCycle.length + nakshatraCycle.length) % nakshatraCycle.length];
  const yoga = yogaCycle[(idx % yogaCycle.length + yogaCycle.length) % yogaCycle.length];
  const karana = karanaCycle[(idx % karanaCycle.length + karanaCycle.length) % karanaCycle.length];
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const festival = festivalLookup[monthDay] || '';
  const score = scoreDay({ tithi, nakshatra, yoga }) + (festival ? 10 : 0);
  const boundedScore = Math.min(100, score);

  return {
    isoDate: date.toISOString().split('T')[0], day: date.getDate(), month: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }), tithi, nakshatra, yoga, karana, festival, location,
    score: boundedScore, label: labelFor(boundedScore),
    daySignature: `${labelFor(boundedScore)} with ${yoga} influence.`,
    primaryDriver: `${nakshatra} nakshatra shaping emotional tone`,
    bestAction: boundedScore > 70 ? 'Execute focused work, planning, and commitments.' : 'Keep priorities light and reflective.',
    avoidAction: boundedScore < 50 ? 'Avoid high-risk financial or legal decisions.' : 'Avoid impulsive overcommitment late day.',
    bestWindows: [{label:'Highly Favorable',time:'06:10–07:32',tone:'good'},{label:'Moderate',time:'10:20–11:40',tone:'moderate'},{label:'Avoid Window',time:'13:30–15:00',tone:'avoid'}],
  };
}

export const getMonthPanchang = (year, monthIndex, location) => Array.from({ length: new Date(year, monthIndex + 1, 0).getDate() }, (_, i) => getPanchangForDate(new Date(year, monthIndex, i + 1), location));
