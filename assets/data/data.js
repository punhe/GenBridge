import { images } from '..';

const { teacher1, teacher2, teacher3, teacher4, school1, school2, school3 } =
  images;

export const welcomeScreenData = {
  title: `Hãy cùng tìm kiếm chữ "A" với chúng tôi`,
  subtitle: `Vui lòng Đăng nhập để xem các gợi ý cá nhân hóa`,
};

export const gradesData = [
  'Lớp 1-5',
  'Lớp 6-9',
  'Lớp 10-11',
  'Lớp 12-13',
];

export const provincesData = [
  'Trung Bộ',
  'Đông Bộ',
  'Bắc Trung Bộ',
  'Bắc Bộ',
  'Tây Bắc Bộ',
  'Sabaragamuwa',
  'Nam Bộ',
  'Uva',
  'Tây Nam Bộ',
];

export const teacherData = [
  {
    name: 'Đào Duy Tân',
    subject: 'Sinh học',
    image: teacher1,  
    description: 'Thầy Tân có hơn 10 năm kinh nghiệm giảng dạy Sinh học...',
    experience: '10 years',
    contact: 'tan.bio@example.com',
  },
  {
    name: 'Đức Hiếu',
    subject: 'Hóa học',
    image: teacher2,
    description: 'Thầy Hiếu chuyên về Hóa học vô cơ...',
    experience: '8 years',
    contact: 'hieu.chem@example.com',
  },
  {
    name: 'Võ Thị Thu Thảo',
    subject: 'Tiếng Anh',
    image: teacher4,
    description: 'Cô Thảo chuyên giảng dạy tiếng Anh giao tiếp...',
    experience: '6 years',
    contact: 'thao.english@example.com',
  },
  {
    name: 'Lê Mạnh Hùng',
    subject: 'Toán',
    image: teacher3,
    description: 'Thầy Hùng nổi tiếng với phương pháp giảng dạy Toán tư duy logic...',
    experience: '12 years',
    contact: 'hung.math@example.com',
  },
];


export const institutionData = [
  {
    name: 'Toán học',
    field: 'Phát triển tư duy logic và phân tích',
    description:
      'Toán học là nền tảng cho khoa học và kỹ thuật, giúp học sinh phát triển khả năng tư duy logic và kỹ năng giải quyết vấn đề. Môn học bao gồm đại số, hình học, xác suất và giải tích.',
    rating: '4.8',
    reviews: '1020',
    image: school1,
  },
  {
    name: 'Sinh học',
    field: 'Nghiên cứu về sự sống',
    description:
      'Sinh học là môn học nghiên cứu về sự sống, từ vi khuẩn đến hệ sinh thái. Học sinh sẽ hiểu về các quá trình sinh học, di truyền, và cơ chế hoạt động của các sinh vật.',
    rating: '4.7',
    reviews: '860',
    image: school2,
  },
  {
    name: 'Hóa học',
    field: 'Khám phá thành phần và phản ứng hóa học',
    description:
      'Hóa học giúp học sinh hiểu về các chất, phản ứng hóa học và các nguyên tắc cơ bản trong thế giới vật chất. Môn học này là cơ sở cho nhiều ngành công nghiệp và khoa học ứng dụng.',
    rating: '4.6',
    reviews: '930',
    image: school3,
  },
  {
    name: 'Vật lý',
    field: 'Nghiên cứu các quy luật của tự nhiên',
    description:
      'Vật lý là môn học về các quy luật tự nhiên, giúp học sinh hiểu về lực, chuyển động, năng lượng, và các hiện tượng vật lý khác. Môn học này trang bị kiến thức cần thiết cho các lĩnh vực như kỹ thuật và khoa học tự nhiên.',
    rating: '4.5',
    reviews: '780',
    image: school2,
  },
];


export const areaFilters = ['Toàn quốc', 'Tỉnh', 'Quận/Huyện'];

export const subjectFilters = [
  'Tất cả các môn',
  'Sinh học',
  'Hóa học',
  'Vật lý',
  'Khoa học công nghệ',
];
