const solutions = [
  {
    name: 'SOLUTIONS BY INDUSTRY',
    children: [
      'MANUFACTURING',
      'MARITIME',
      'CONSTRUCTION',
      'EDUCATION',
      'RETAIL',
    ],
    dropdown: true,
  },
  {
    name: 'SOLUTIONS BY PROCESS',
    children: ['CIRCUIT DESIGN', 'NEW CONSTRUCTION', 'RETRO-FIT'],
    dropdown: true,
  },
  {
    name: 'SOFTWARE SOLUTIONS',
    children: ['POWER MONITORING', 'ECO-WARE', 'ZAPPLAN', 'CUSTOM'],
    dropdown: true,
  },
  {
    name: 'SERVICES',
    children: ['CONSULTING', 'MANAGED SERVICES'],
    dropdown: true,
  },
];

const products = [
  {
    name: 'CONSTRUCTION SUPPLIES',
    children: ['WIRING', 'CIRCUIT BREAKERS', "KEY 'n KITE"],
    dropdown: true,
  },
  {
    name: 'SOFTWARE',
    children: ['POWER MONITORING', 'ECO-WARE', 'ZAPPLAN', 'CUSTOM'],
    dropdown: true,
  },
  {
    name: 'CONSULTING',
    children: ['ENTERPRISE', 'SMALL BUSINESS', 'GOVERNMENT'],
    dropdown: true,
  },
];

const automation = [
  {
    name: 'ROBOTS',
    children: ['BETTY', 'ROGER', 'BRUTUS', 'ALEXX'],
    dropdown: true,
  },
  {
    name: 'NOT ROBOTS',
    children: ['NOT A ROBOT', 'ALSO NOT A ROBOT'],
    dropdown: true,
  },
];

const edu = [
  {
    name: 'FOR KIDS',
    children: [
      'LOREM IPSUM DOLOR',
      'LOREM ISUM DOLOR',
      'LOREM IPSUM DOLR',
    ],
    dropdown: true,
  },
  {
    name: 'FOR ADULTS',
    children: ['LOREM IPSUM DLOR', 'LOEM IPSUM DOLOR'],
    dropdown: true,
  },
];

const resources = [
  {
    name: 'MULTARUM ET MAGNARUM',
    children: ['NIHIL DOLERE', 'QUOD ILLE DON', 'NIHIL DOERE'],
    dropdown: true,
  },
  {
    name: 'SED IPSUM A SE',
    children: ['IHIL DOLERE', 'QUOD ILE DON', 'NIHL DOLERE'],
    dropdown: true,
  },
  {
    name: 'ALITER ENIM E',
    children: ['NIHIL DOLER', 'QUOD LE DON', 'NIHIL DORE'],
    dropdown: true,
  },
];

export const menuData = [
  {
    name: 'SOLUTIONS',
    children: solutions,
    dropdown: false,
  },
  {
    name: 'PRODUCTS',
    children: products,
    dropdown: false,
  },
  {
    name: 'AUTOMATION',
    children: automation,
    dropdown: false,
  },
  {
    name: 'EDUCATION',
    children: edu,
    dropdown: false,
  },
  {
    name: 'RESOURCES',
    children: resources,
    dropdown: false,
  },
];
