export const translations = {
  en: {
    hero: {
      tag: 'Based in Bali, Indonesia',
      name: 'INNA',
      surname: 'KOSS',
      location: 'Pole · Moto · Web',
      bio: 'I do three things well — ride, dance, and code. Hire me to build your website or teach you pole.',
      cta: '@inna.koss88',
    },
    nav: {
      en: 'EN',
      id: 'ID',
    },
    section: {
      services: 'What I offer',
    },
    services: {
      pole: {
        num: '01',
        tag: 'Online & Offline',
        title: 'POLE CLASSES',
        desc: 'Private 1-on-1 pole lessons for all levels — via video call or in person in Bali. Learn from an advanced instructor who will meet you exactly where you are.',
        cta: 'Book via DM',
      },
      moto: {
        num: '02',
        tag: 'Bali Rides',
        title: 'RIDING GUIDE',
        desc: 'Private full-day riding tours around Bali. Hidden roads, local spots, real adventure — guided by a local rider who knows every route.',
        cta: 'Enquire via DM',
      },
      web: {
        num: '03',
        tag: 'Development',
        title: 'WEB DEVELOPMENT',
        desc: 'Custom websites and web apps for creators, small businesses, and brands. Clean code, fast delivery. This page was built by me.',
        cta: 'Get a quote via DM',
      },
    },
    footer: {
      name: 'INNA.KOSS88',
      ig: 'instagram.com/inna.koss88',
    },
  },
  id: {
    hero: {
      tag: 'Berbasis di Bali, Indonesia',
      name: 'INNA',
      surname: 'KOSS',
      location: 'Pole · Moto · Web',
      bio: 'Saya jago tiga hal — riding, pole dance, dan coding. Hire saya untuk bangun website kamu atau ajarin pole.',
      cta: '@inna.koss88',
    },
    nav: {
      en: 'EN',
      id: 'ID',
    },
    section: {
      services: 'Yang saya tawarkan',
    },
    services: {
      pole: {
        num: '01',
        tag: 'Online & Offline',
        title: 'KELAS POLE',
        desc: 'Pelajaran pole privat 1-on-1 untuk semua level — via video call atau langsung di Bali. Belajar dari instruktur advanced yang menyesuaikan dengan level kamu.',
        cta: 'Pesan via DM',
      },
      moto: {
        num: '02',
        tag: 'Riding Bali',
        title: 'PEMANDU RIDING',
        desc: 'Tur riding privat seharian keliling Bali. Jalan tersembunyi, spot lokal, petualangan nyata — dipandu rider lokal yang hafal setiap rute.',
        cta: 'Tanya via DM',
      },
      web: {
        num: '03',
        tag: 'Pengembangan Web',
        title: 'WEB DEVELOPMENT',
        desc: 'Website dan web app custom untuk kreator, bisnis kecil, dan brand. Kode bersih, pengerjaan cepat. Halaman ini dibuat oleh saya.',
        cta: 'Minta penawaran via DM',
      },
    },
    footer: {
      name: 'INNA.KOSS88',
      ig: 'instagram.com/inna.koss88',
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations.en;
