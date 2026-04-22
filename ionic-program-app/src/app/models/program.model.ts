// src/app/models/program.model.ts

export interface Program {
  id: number;
  title: string;
  university: string;
  country: string;
  countryFlag: string;
  level: string;
  attendance: string;
  duration: string;
  tuitionFee: string;
  applicationFee: string;
  housingFee: string;
  acceptanceFee: string;
  livingFee: string;
  serviceFee: string;
  internationalFee: string;
  language: string;
  image: string;
  logo: string;
  isOfficialPartner: boolean;
  isFavorite: boolean;
  views: number;
  impressions: number;
  description: string;
  requirements: string[];
  structure: string;
  fees: string;
  extraInfo: {
    campus: string;
    intake: string;
    language: string;
  };
  tags: string[];
}

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 1,
    title: 'Environmental Systems Sciences / Climate and Environmental Monitoring',
    university: 'University of Liverpool',
    country: 'United States',
    countryFlag: '🇺🇸',
    level: 'Masters',
    attendance: 'On Campus',
    duration: '2 Years',
    tuitionFee: '$377.06 per semester',
    applicationFee: '$51.88',
    housingFee: '$0',
    acceptanceFee: '$0',
    livingFee: '$0',
    serviceFee: '€50',
    internationalFee: '€726.72',
    language: 'English Language',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrayFull.svg/120px-GrayFull.svg.png',
    isOfficialPartner: true,
    isFavorite: false,
    views: 191126,
    impressions: 293612,
    description: "The master's programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of scientific, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively.",
    requirements: [
      'Completed relevant degree program',
      'Copy of a valid Identification Card or Passport',
      'Degree Diploma',
      'Documents of completed university degree with a minimum study duration of three years (bachelor\'s program or diploma\'s program)'
    ],
    structure: 'Studying Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz opens up a world of opportunities. By combining various disciplines and developing cross-sectional competencies.',
    fees: 'Service fee is €50. For international degree students, the tuition fee is €726.72',
    extraInfo: {
      campus: 'Main, Portierloge Wall, Portierloge ReSoWi, Portierloge Hauptgebäude Campuse(s)',
      intake: 'Winter 2024',
      language: 'English Language'
    },
    tags: ['Design', 'Programming', 'Environment']
  },
  {
    id: 2,
    title: 'Computer Technologies and Environmental Engineering',
    university: 'University of Liverpool',
    country: 'Canada',
    countryFlag: '🇨🇦',
    level: 'Masters',
    attendance: 'Fulltime',
    duration: '2 years',
    tuitionFee: '€363.36 per semester',
    applicationFee: '$51.88',
    housingFee: '$0',
    acceptanceFee: '$0',
    livingFee: '$0',
    serviceFee: '€50',
    internationalFee: '€726.72',
    language: 'English Language',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrayFull.svg/120px-GrayFull.svg.png',
    isOfficialPartner: true,
    isFavorite: false,
    views: 150000,
    impressions: 200000,
    description: 'A comprehensive program combining computer technologies with environmental engineering principles. Students gain expertise in both fields to solve modern environmental challenges using cutting-edge technology.',
    requirements: [
      'Completed relevant degree program',
      'Copy of a valid Identification Card or Passport',
      'Degree Diploma',
      'Proof of English proficiency'
    ],
    structure: 'The program combines theoretical knowledge with practical applications, ensuring students are well-prepared for the modern job market.',
    fees: 'Service fee is €50. For international degree students, the tuition fee is €726.72',
    extraInfo: {
      campus: 'Main Campus',
      intake: 'Winter 2024',
      language: 'English Language'
    },
    tags: ['Design', 'Programming', 'Technology']
  },
  {
    id: 3,
    title: 'Data Science and Machine Learning',
    university: 'MIT',
    country: 'United States',
    countryFlag: '🇺🇸',
    level: 'Masters',
    attendance: 'On Campus',
    duration: '2 Years',
    tuitionFee: '$500 per semester',
    applicationFee: '$75',
    housingFee: '$200',
    acceptanceFee: '$0',
    livingFee: '$150',
    serviceFee: '$30',
    internationalFee: '$1000',
    language: 'English Language',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrayFull.svg/120px-GrayFull.svg.png',
    isOfficialPartner: true,
    isFavorite: true,
    views: 250000,
    impressions: 400000,
    description: 'Cutting-edge program in data science and machine learning at one of the world\'s leading universities. Master the tools and techniques driving the AI revolution.',
    requirements: [
      'Bachelor\'s degree in a related field',
      'Strong mathematical background',
      'Programming experience in Python or R',
      'Letters of recommendation'
    ],
    structure: 'The program is structured around core courses in statistics, machine learning, and data engineering, complemented by electives and a capstone project.',
    fees: 'Full tuition for international students is $1000 per semester.',
    extraInfo: {
      campus: 'Cambridge, MA',
      intake: 'Fall 2024',
      language: 'English Language'
    },
    tags: ['Programming', 'Technology', 'Data']
  },
  {
    id: 4,
    title: 'Business Administration and Finance',
    university: 'London School of Economics',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    level: 'Masters',
    attendance: 'Fulltime',
    duration: '1 Year',
    tuitionFee: '£800 per semester',
    applicationFee: '£50',
    housingFee: '£300',
    acceptanceFee: '£0',
    livingFee: '£200',
    serviceFee: '£25',
    internationalFee: '£1200',
    language: 'English Language',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrayFull.svg/120px-GrayFull.svg.png',
    isOfficialPartner: false,
    isFavorite: false,
    views: 180000,
    impressions: 310000,
    description: 'World-renowned MBA program at the London School of Economics. Develop strategic business skills and financial acumen in one of the world\'s leading financial centers.',
    requirements: [
      'Bachelor\'s degree',
      'GMAT or GRE scores',
      'Work experience preferred',
      'IELTS or TOEFL scores'
    ],
    structure: 'Intensive one-year program covering all core business disciplines with specialization in finance.',
    fees: 'International tuition is £1200 per semester.',
    extraInfo: {
      campus: 'Central London',
      intake: 'September 2024',
      language: 'English Language'
    },
    tags: ['Business', 'Finance', 'Management']
  },
  {
    id: 5,
    title: 'Architecture and Urban Design',
    university: 'TU Berlin',
    country: 'Germany',
    countryFlag: '🇩🇪',
    level: 'Masters',
    attendance: 'On Campus',
    duration: '2 Years',
    tuitionFee: '€300 per semester',
    applicationFee: '€30',
    housingFee: '€0',
    acceptanceFee: '€0',
    livingFee: '€0',
    serviceFee: '€20',
    internationalFee: '€500',
    language: 'English Language',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GrayFull.svg/120px-GrayFull.svg.png',
    isOfficialPartner: true,
    isFavorite: false,
    views: 120000,
    impressions: 190000,
    description: 'Innovative architecture and urban design program at one of Germany\'s top technical universities. Combine creativity with technical expertise to shape the cities of tomorrow.',
    requirements: [
      'Bachelor\'s in Architecture or related field',
      'Portfolio of work',
      'Language proficiency',
      'Motivation letter'
    ],
    structure: 'Two-year program with studio-based learning, technical courses, and an international exchange semester.',
    fees: 'Low tuition fees with a semester contribution of €300.',
    extraInfo: {
      campus: 'Berlin City Campus',
      intake: 'Winter 2024',
      language: 'English Language'
    },
    tags: ['Design', 'Architecture', 'Urban']
  }
];

export const FILTER_TAGS = ['Design', 'Programming', 'Business', 'Technology', 'Finance', 'Architecture', 'Data', 'Environment', 'Urban', 'Management'];
export const LEVELS = ['Bachelor', 'Masters', 'PhD', 'Certificate'];
export const ATTENDANCES = ['On Campus', 'Online', 'Hybrid', 'Fulltime', 'Part-time'];
export const COUNTRIES = ['United States', 'Canada', 'United Kingdom', 'Germany', 'Australia'];
