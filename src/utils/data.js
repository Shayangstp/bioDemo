export const navData = [
  {
    name: "خانه",
    href: "/home",
  },
  {
    name: "مدیریت",
    href: "/manage",
  },
  {
    name: "تخت",
    href: "/hospitalBed",
  },
];

export const options1 = [
  { value: "1", label: "مجتمع بیمارستانی امام خمینی" },
  { value: "2", label: "2مجتمع خمینی" },
];
export const options2 = [
  { value: "1", label: "همه ساختمان ها" },
  { value: "2", label: "همه ساختمان ها" },
];
export const options3 = [
  { value: "1", label: "تخت قابل رزرو" },
  { value: "2", label: "تخت قابل رزرو" },
];
export const options4 = [
  { value: "1", label: "انتخاب نوع تخت" },
  { value: "2", label: "انتخاب نوع تخت" },
];
export const options5 = [
  { value: "1", label: "مرد" },
  { value: "2", label: "مرد" },
];

export const hostpitalDetail = [
  {
    id: 1,
    hospitalName: "بیمارستان امام",
    detail: [
      { count: 2, title: "تعداد ساختمان ها" },
      { count: 18, title: "تعداد کل اتاق ها" },
      { count: 110, title: "تعداد کل تخت ها" },
      { count: 32, title: "قابل رزرو", active: "ready" },
      { count: 12, title: "غیرقابل رزرو", active: "reserved" },
      { count: 58, title: "پر", active: "fill" },
    ],
  },
];

export const buildingDetail = [
  {
    hospitalId: 1,
    buildName: " ساختمان امید",
    hospitalName: "بیمارستان امام",
    sections: [
      {
        name: "طبقه اول بخش روماتولوژی",
        id: 1,
      },
      {
        name: "طبقه اول بخش اورتوپدی",
        id: 2,
      },
      {
        name: "طبقه دوم بخش روماتولوژی",
        id: 3,
      },
      {
        name: "طبقه دوم بخش کودکان",
        id: 4,
      },
      {
        name: "طبقه دوم بخش اورتوپدی",
        id: 5,
      },
    ],
    details: [
      { count: 2, title: "تعداد کل اتاق ها" },
      { count: 11, title: "تعداد کل تخت ها" },
      { count: 5, title: "قابل رزرو", active: "ready" },
      { count: 2, title: "قابل رزرو", active: "reserved" },
    ],
    rooms: [
      {
        title: "اتاق R101",
        beds: [
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "reserved" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
        ],
      },
      {
        title: "اتاق R102",
        beds: [
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "reserved" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
        ],
      },
    ],
  },
  {
    hospitalId: 1,
    buildName: " ساختمان امید",
    hospitalName: "بیمارستان امام",
    sections: [
      {
        name: "طبقه اول بخش روماتولوژی",
        id: 1,
      },
      {
        name: "طبقه اول بخش اورتوپدی",
        id: 2,
      },
      {
        name: "طبقه دوم بخش روماتولوژی",
        id: 3,
      },
      {
        name: "طبقه دوم بخش کودکان",
        id: 4,
      },
      {
        name: "طبقه دوم بخش اورتوپدی",
        id: 5,
      },
    ],
    details: [
      { count: 2, title: "تعداد کل اتاق ها" },
      { count: 11, title: "تعداد کل تخت ها" },
      { count: 5, title: "قابل رزرو", active: "ready" },
      { count: 2, title: "قابل رزرو", active: "reserved" },
    ],
    rooms: [
      {
        title: "اتاق R101",
        beds: [
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "reserved" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
        ],
      },
      {
        title: "اتاق R102",
        beds: [
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "ready" },
          { bedTitle: 321, bedNo: "A121", active: "reserved" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
          { bedTitle: 321, bedNo: "A121", active: "fill" },
        ],
      },
    ],
  },
];
