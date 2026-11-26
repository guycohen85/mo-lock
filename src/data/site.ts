// Single source for business details and repeated content.
// Facts come from docs/client/brief and decisions.md. Do not add facts the client did not give.

export const site = {
  name: 'M.O שירותי מנעולנות',
  tagline: 'שירותי מנעולנות',
  phoneDisplay: '050-8842062',
  phoneE164: '+972508842062',
  phoneHref: 'tel:+972508842062',
  whatsappHref:
    'https://wa.me/972508842062?text=' + encodeURIComponent('שלום, אשמח לקבל הצעת מחיר'),
  region: 'השפלה והמרכז',
  warranty: 'שנה אחריות על ההתקנה',
} as const;

/** Example towns; the client serves all of the Shfela and the center. */
export const areas = [
  'יבנה', 'אשדוד', 'רחובות', 'נס ציונה', 'ראשון לציון', 'גדרה', 'יישובי גדרות',
  'מזכרת בתיה', 'קריית עקרון', 'בני דרום', 'פלמחים', 'גאליה', 'כפר הנגיד',
  'בית עובד', 'גבעת וושינגטון', 'קבוצת יבנה', 'חולון',
];

export type IconName =
  | 'phone' | 'whatsapp' | 'shield' | 'award' | 'tag' | 'check' | 'door' | 'car' | 'finger'
  | 'cylinder' | 'mechanism' | 'handle' | 'eye' | 'keypad' | 'magnet' | 'bolt' | 'exit' | 'safe';

/** The six services the client asked to show above the fold. */
export const heroServices: { icon: IconName; title: string; note?: string }[] = [
  { icon: 'door', title: 'פריצת כל סוגי הדלתות והרכבים' },
  { icon: 'cylinder', title: 'החלפת צילינדרים ומנעולים' },
  { icon: 'mechanism', title: 'החלפת מנגנונים' },
  { icon: 'finger', title: 'התקנת מנעולים חכמים', note: 'מתקין מורשה elock' },
  { icon: 'handle', title: 'התקנה והחלפת ידיות לכל סוגי הדלתות' },
  { icon: 'eye', title: 'התקנת עיניות דיגיטליות' },
];

/** Service cards. `slug` is reserved for the service pages (milestone 2). */
export const services: { slug: string; icon: IconName; title: string; summary: string }[] = [
  { slug: 'door-opening', icon: 'door', title: 'פריצת דלתות', summary: 'ננעלתם בחוץ? פתיחת דלתות מכל הסוגים: פלדלת, דלתות פנים, זכוכית ואלומיניום.' },
  { slug: 'car-opening', icon: 'car', title: 'פריצת רכבים', summary: 'המפתח נשאר בפנים או אבד? פתיחת רכב נעול.' },
  { slug: 'smart-locks', icon: 'finger', title: 'מנעולים חכמים', summary: 'התקנת מנעולים חכמים לדלת הכניסה. מתקין מורשה של elock.' },
  { slug: 'cylinders', icon: 'cylinder', title: 'החלפת צילינדר', summary: 'החלפה והתקנה של צילינדרים לדלת הכניסה, כולל צילינדרים משופרים.' },
  { slug: 'locks-mechanisms', icon: 'mechanism', title: 'מנעולים ומנגנונים', summary: 'החלפה ותיקון של מנעולים ומנגנונים לכל סוגי הדלתות.' },
  { slug: 'handles', icon: 'handle', title: 'ידיות ופרזול', summary: 'התקנה והחלפה של ידיות לפלדלת, לדלתות פנים ולזכוכית.' },
  { slug: 'peepholes', icon: 'eye', title: 'עיניות לדלת', summary: 'עינית רגילה או עינית דיגיטלית עם מסך.' },
  { slug: 'keypads', icon: 'keypad', title: 'קודנים', summary: 'התקנה ותיקון של קודנים לבתים, לבניינים ולעסקים.' },
  { slug: 'electromagnetic-locks', icon: 'magnet', title: 'אלקטרו־מגנט', summary: 'התקנה ותיקון של מנעולי אלקטרו־מגנט לדלתות ולשערים.' },
  { slug: 'electric-locks', icon: 'bolt', title: 'מנעול חשמלי', summary: 'מנעולים חשמליים לשערים, ללובאים ולבתי עסק.' },
  { slug: 'panic-hardware', icon: 'exit', title: 'ידיות ודלתות בהלה', summary: 'ידיות בהלה ליציאות חירום בבתי עסק ובמבני ציבור.' },
  { slug: 'safes', icon: 'safe', title: 'כספות', summary: 'פתיחה, תיקון והחלפה של מנעולי כספות.' },
];

/** Full list of door and lock types from the client (2026-11-26). */
export const lockTypes = [
  'דלתות רב־בריח', 'דלתות חוסם', 'דלתות זכוכית', 'דלתות אלומיניום', 'דלתות פנים', 'שערים',
  'מנעול ביטחון', 'צילינדרים', 'מנגנון לדלת', 'מחזיר שמן (סוגר דלת)', 'מנעולי תיבות דואר',
  'מנעול כספת וכספות', 'מנעול חשמלי', 'אלקטרו־מגנט', 'קודנים', 'בקרת כניסה',
  'מנעולים חכמים', 'פרזול וידיות', 'פריצת רכבים',
];

export const faqs = [
  {
    q: 'כמה עולה פריצת דלת או החלפת צילינדר?',
    a: 'המחיר תלוי בסוג הדלת והמנעול. התקשרו או שלחו תמונה בוואטסאפ, ותקבלו הצעת מחיר.',
  },
  { q: 'יש אחריות על העבודה?', a: 'כן. שנה אחריות על ההתקנה.' },
  {
    q: 'אתם מתקינים מנעולים חכמים של elock?',
    a: 'כן. אני מתקין מורשה של elock, אחרי הדרכה של החברה.',
  },
  {
    q: 'אתם עובדים גם עם ועדי בתים, קבלנים ובתי עסק?',
    a: 'כן. מתקינים ומתקנים קודנים, אלקטרו־מגנט, מנעולים חשמליים וידיות בהלה לבניינים ולעסקים.',
  },
  {
    q: 'באילו אזורים אתם נותנים שירות?',
    a: 'בכל אזור השפלה והמרכז, בין השאר ביבנה, אשדוד, רחובות, נס ציונה, ראשון לציון וגדרה.',
  },
];
