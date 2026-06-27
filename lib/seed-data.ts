import {
  Department,
  Team,
  Position,
  Competency,
  PositionCompetency,
  Employee,
  EvaluationPeriod,
  Evaluation,
  IDPItem,
  AIReport,
} from './types';

export const SEED_DEPARTMENTS: Department[] = [
  { id: 'dept-1', name: 'Phát Triển Kinh Doanh & Sản Phẩm', description: 'Khối Kinh doanh', teams: [] },
  { id: 'dept-2', name: 'Kỹ Thuật & Vận Hành', description: 'Khối Kỹ thuật', teams: [] },
];

export const SEED_TEAMS: Team[] = [
  { id: 'team-1', departmentId: 'dept-1', name: 'Phân tích kinh doanh & Báo cáo', description: '' },
  { id: 'team-2', departmentId: 'dept-1', name: 'Business Analytics', description: '' },
  { id: 'team-3', departmentId: 'dept-1', name: 'Product Owner & Design', description: '' },
  { id: 'team-4', departmentId: 'dept-1', name: 'R&D (Research & Development)', description: '' },
  { id: 'team-5', departmentId: 'dept-1', name: 'Project Management', description: '' },
  { id: 'team-6', departmentId: 'dept-2', name: 'Tech Spec & CTO', description: '' },
  { id: 'team-7', departmentId: 'dept-2', name: 'Phát triển Backend & Frontend', description: '' },
  { id: 'team-8', departmentId: 'dept-2', name: 'QC (Quality Control)', description: '' },
  { id: 'team-9', departmentId: 'dept-2', name: 'Operation Logistics', description: '' },
];

export const SEED_POSITIONS: Position[] = [
  // dept-1
  { id: 'pos-1', teamId: 'team-1', departmentId: 'dept-1', name: 'Junior Business Analyst', level: 'Junior', description: '' },
  { id: 'pos-2', teamId: 'team-1', departmentId: 'dept-1', name: 'Senior Business Analyst', level: 'Senior', description: '' },
  { id: 'pos-3', teamId: 'team-1', departmentId: 'dept-1', name: 'BA Manager', level: 'Manager', description: '' },
  { id: 'pos-4', teamId: 'team-3', departmentId: 'dept-1', name: 'Junior Product Owner', level: 'Junior', description: '' },
  { id: 'pos-5', teamId: 'team-3', departmentId: 'dept-1', name: 'Senior Product Owner', level: 'Senior', description: '' },
  { id: 'pos-6', teamId: 'team-3', departmentId: 'dept-1', name: 'UI/UX Designer', level: 'Senior', description: '' },
  // dept-2
  { id: 'pos-7', teamId: 'team-7', departmentId: 'dept-2', name: 'Junior Backend Developer', level: 'Junior', description: '' },
  { id: 'pos-8', teamId: 'team-7', departmentId: 'dept-2', name: 'Senior Backend Developer', level: 'Senior', description: '' },
  { id: 'pos-9', teamId: 'team-7', departmentId: 'dept-2', name: 'Frontend Developer', level: 'Senior', description: '' },
  { id: 'pos-10', teamId: 'team-7', departmentId: 'dept-2', name: 'Technical Lead', level: 'Lead', description: '' },
  { id: 'pos-11', teamId: 'team-8', departmentId: 'dept-2', name: 'QC Tester', level: 'Junior', description: '' },
  { id: 'pos-12', teamId: 'team-8', departmentId: 'dept-2', name: 'QA Engineer', level: 'Senior', description: '' },
];

export const SEED_COMPETENCIES: Competency[] = [
  {
    id: 'comp-1', code: 'K01', name: 'Hiểu về chuyên môn nghiệp vụ', askGroup: 'knowledge', type: 'core',
    definition: 'Nắm vững các kiến thức chuyên môn cần thiết để thực hiện công việc hiệu quả.',
    observableBehaviors: ['Áp dụng kiến thức vào thực tế', 'Cập nhật kiến thức mới', 'Giải quyết vấn đề chuyên môn'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hiểu các khái niệm cơ bản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Áp dụng được vào công việc thường ngày dưới sự hướng dẫn'] },
      { level: 3, description: 'Khá', behaviors: ['Độc lập xử lý hầu hết công việc chuyên môn'] },
      { level: 4, description: 'Tốt', behaviors: ['Giải quyết các vấn đề phức tạp, hướng dẫn người khác'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Chuyên gia, đóng góp cải tiến quy trình'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-2', code: 'S01', name: 'Kỹ năng giao tiếp', askGroup: 'skill', type: 'core',
    definition: 'Khả năng truyền đạt và tiếp nhận thông tin hiệu quả qua lời nói và văn bản.',
    observableBehaviors: ['Trình bày rõ ràng', 'Lắng nghe tích cực', 'Giao tiếp phù hợp đối tượng'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Giao tiếp cơ bản trong nhóm'] },
      { level: 2, description: 'Trung bình', behaviors: ['Trình bày ý tưởng khá rõ ràng'] },
      { level: 3, description: 'Khá', behaviors: ['Giao tiếp hiệu quả liên phòng ban'] },
      { level: 4, description: 'Tốt', behaviors: ['Thuyết phục và đàm phán thành công'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xử lý giao tiếp khủng hoảng, truyền cảm hứng'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-3', code: 'S05', name: 'Kỹ năng làm việc nhóm', askGroup: 'skill', type: 'core',
    definition: 'Khả năng phối hợp và hợp tác với những người khác để đạt được mục tiêu chung.',
    observableBehaviors: ['Hỗ trợ đồng nghiệp', 'Tôn trọng ý kiến khác biệt', 'Đóng góp tích cực vào công việc chung'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Tham gia vào các hoạt động nhóm'] },
      { level: 2, description: 'Trung bình', behaviors: ['Hoàn thành phần việc được giao trong nhóm'] },
      { level: 3, description: 'Khá', behaviors: ['Chủ động hỗ trợ các thành viên khác'] },
      { level: 4, description: 'Tốt', behaviors: ['Thúc đẩy sự hợp tác và giải quyết xung đột nhóm'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Xây dựng đội nhóm hiệu suất cao'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-4', code: 'A03', name: 'Tập trung vào kết quả', askGroup: 'attitude', type: 'core',
    definition: 'Luôn hướng tới mục tiêu và nỗ lực hoàn thành công việc đúng hạn, đạt chất lượng cao.',
    observableBehaviors: ['Cam kết với mục tiêu', 'Vượt qua trở ngại', 'Không viện lý do'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Hiểu mục tiêu công việc'] },
      { level: 2, description: 'Trung bình', behaviors: ['Thường xuyên hoàn thành công việc đúng hạn'] },
      { level: 3, description: 'Khá', behaviors: ['Nỗ lực đạt được kết quả tốt dù có khó khăn'] },
      { level: 4, description: 'Tốt', behaviors: ['Luôn vượt kỳ vọng về kết quả'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Tạo ra các đột phá về hiệu suất cho tổ chức'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  // Add some more competencies for variety
  {
    id: 'comp-5', code: 'K02', name: 'Trình độ ngoại ngữ', askGroup: 'knowledge', type: 'functional',
    definition: 'Khả năng sử dụng ngoại ngữ (chủ yếu là tiếng Anh) trong công việc.',
    observableBehaviors: ['Đọc hiểu tài liệu', 'Giao tiếp email', 'Giao tiếp trực tiếp'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Đọc hiểu từ vựng cơ bản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Đọc hiểu tài liệu chuyên ngành, viết email đơn giản'] },
      { level: 3, description: 'Khá', behaviors: ['Giao tiếp trôi chảy, viết email chuyên nghiệp'] },
      { level: 4, description: 'Tốt', behaviors: ['Thuyết trình và đàm phán bằng ngoại ngữ'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Sử dụng ngoại ngữ như tiếng mẹ đẻ trong công việc'] }
    ],
    weight: 2, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  },
  {
    id: 'comp-6', code: 'S09', name: 'Phân tích và ra quyết định', askGroup: 'skill', type: 'management',
    definition: 'Khả năng phân tích thông tin phức tạp và đưa ra quyết định kịp thời, chính xác.',
    observableBehaviors: ['Thu thập dữ liệu đầy đủ', 'Đánh giá các rủi ro', 'Quyết đoán'],
    levelDescriptions: [
      { level: 1, description: 'Cơ bản', behaviors: ['Đưa ra quyết định trong các tình huống đơn giản'] },
      { level: 2, description: 'Trung bình', behaviors: ['Phân tích vấn đề dựa trên dữ liệu có sẵn'] },
      { level: 3, description: 'Khá', behaviors: ['Xử lý các tình huống phức tạp có nhiều biến số'] },
      { level: 4, description: 'Tốt', behaviors: ['Ra quyết định chiến lược có tầm ảnh hưởng lớn'] },
      { level: 5, description: 'Xuất sắc', behaviors: ['Dự đoán và ra quyết định đi trước xu hướng'] }
    ],
    weight: 3, status: 'active', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  }
];

export const SEED_POSITION_COMPETENCIES: PositionCompetency[] = [
  // Senior Backend Developer requires high knowledge, good teamwork, high focus on result
  { id: 'pc-1', positionId: 'pos-8', competencyId: 'comp-1', requiredLevel: 4, weight: 3 },
  { id: 'pc-2', positionId: 'pos-8', competencyId: 'comp-2', requiredLevel: 3, weight: 2 },
  { id: 'pc-3', positionId: 'pos-8', competencyId: 'comp-3', requiredLevel: 4, weight: 2 },
  { id: 'pc-4', positionId: 'pos-8', competencyId: 'comp-4', requiredLevel: 4, weight: 3 },
  { id: 'pc-5', positionId: 'pos-8', competencyId: 'comp-5', requiredLevel: 3, weight: 1 },
  // Junior Backend Developer requires less
  { id: 'pc-6', positionId: 'pos-7', competencyId: 'comp-1', requiredLevel: 2, weight: 3 },
  { id: 'pc-7', positionId: 'pos-7', competencyId: 'comp-2', requiredLevel: 2, weight: 2 },
  { id: 'pc-8', positionId: 'pos-7', competencyId: 'comp-3', requiredLevel: 3, weight: 2 },
  { id: 'pc-9', positionId: 'pos-7', competencyId: 'comp-4', requiredLevel: 3, weight: 3 },
  // Tech Lead requires management
  { id: 'pc-10', positionId: 'pos-10', competencyId: 'comp-1', requiredLevel: 5, weight: 3 },
  { id: 'pc-11', positionId: 'pos-10', competencyId: 'comp-2', requiredLevel: 4, weight: 2 },
  { id: 'pc-12', positionId: 'pos-10', competencyId: 'comp-3', requiredLevel: 5, weight: 3 },
  { id: 'pc-13', positionId: 'pos-10', competencyId: 'comp-6', requiredLevel: 4, weight: 3 },
];

export const SEED_EMPLOYEES: Employee[] = [
  { id: 'emp-1', code: 'NV001', fullName: 'Nguyễn Văn Mạnh', email: 'manh.nv@company.vn', departmentId: 'dept-2', teamId: 'team-7', positionId: 'pos-10', level: 'Lead', managerId: null, startDate: '2020-01-15', status: 'active' },
  { id: 'emp-2', code: 'NV002', fullName: 'Trần Thị Hoa', email: 'hoa.tt@company.vn', departmentId: 'dept-2', teamId: 'team-7', positionId: 'pos-8', level: 'Senior', managerId: 'emp-1', startDate: '2021-03-20', status: 'active' },
  { id: 'emp-3', code: 'NV003', fullName: 'Lê Minh Tuấn', email: 'tuan.lm@company.vn', departmentId: 'dept-2', teamId: 'team-7', positionId: 'pos-7', level: 'Junior', managerId: 'emp-1', startDate: '2023-05-10', status: 'active' },
  { id: 'emp-4', code: 'NV004', fullName: 'Phạm Quang Dũng', email: 'dung.pq@company.vn', departmentId: 'dept-1', teamId: 'team-3', positionId: 'pos-5', level: 'Senior', managerId: null, startDate: '2022-11-01', status: 'active' },
];

export const SEED_EVALUATION_PERIODS: EvaluationPeriod[] = [
  { id: 'ep-1', name: 'Đánh giá Q1-Q2/2025', startDate: '2025-06-01', endDate: '2025-06-30', status: 'active' },
  { id: 'ep-2', name: 'Đánh giá Q3-Q4/2024', startDate: '2024-12-01', endDate: '2024-12-31', status: 'closed' },
];

export const SEED_EVALUATIONS: Evaluation[] = [
  {
    id: 'eval-1', employeeId: 'emp-2', periodId: 'ep-1', type: 'self', evaluatorId: 'emp-2',
    competencyScores: [
      { competencyId: 'comp-1', competencyName: 'Hiểu về chuyên môn nghiệp vụ', askGroup: 'knowledge', requiredLevel: 4, selfScore: 4, managerScore: 4, peerScore: null, finalScore: 4, gap: 0, gapClassification: 'met', weight: 3, evidence: 'Đã hoàn thành tốt các task phức tạp', evaluatorComment: '' },
      { competencyId: 'comp-2', competencyName: 'Kỹ năng giao tiếp', askGroup: 'skill', requiredLevel: 3, selfScore: 4, managerScore: 3, peerScore: null, finalScore: 3.5, gap: 0.5, gapClassification: 'met', weight: 2, evidence: 'Trao đổi rõ ràng với team QA', evaluatorComment: '' },
      { competencyId: 'comp-3', competencyName: 'Kỹ năng làm việc nhóm', askGroup: 'skill', requiredLevel: 4, selfScore: 3, managerScore: 3, peerScore: null, finalScore: 3, gap: -1, gapClassification: 'needs_improvement', weight: 2, evidence: 'Cần tích cực hơn trong các buổi retro', evaluatorComment: '' },
      { competencyId: 'comp-4', competencyName: 'Tập trung vào kết quả', askGroup: 'attitude', requiredLevel: 4, selfScore: 4, managerScore: 4, peerScore: null, finalScore: 4, gap: 0, gapClassification: 'met', weight: 3, evidence: 'Không miss deadline nào trong quý', evaluatorComment: '' },
      { competencyId: 'comp-5', competencyName: 'Trình độ ngoại ngữ', askGroup: 'knowledge', requiredLevel: 3, selfScore: 2, managerScore: 2, peerScore: null, finalScore: 2, gap: -1, gapClassification: 'needs_improvement', weight: 1, evidence: 'Đọc tài liệu tiếng anh còn chậm', evaluatorComment: '' },
    ],
    weightedTotalScore: 3.6, overallComment: 'Kỳ này làm khá tốt nhưng cần trau dồi thêm tiếng Anh và kỹ năng teamwork.', status: 'completed', createdAt: '2025-06-15T10:00:00Z', updatedAt: '2025-06-15T10:00:00Z'
  }
];

export const SEED_IDP_ITEMS: IDPItem[] = [
  {
    id: 'idp-1', employeeId: 'emp-2', competencyId: 'comp-3', competencyName: 'Kỹ năng làm việc nhóm',
    developmentGoal: 'Chủ động đưa ra ý kiến đóng góp trong các buổi họp nhóm', trainingActions: 'Tham gia điều phối 2 buổi họp retro của team',
    responsiblePerson: 'emp-1', deadline: '2025-09-30', status: 'in_progress', progressNotes: 'Đã điều phối 1 buổi',
    createdAt: '2025-06-20T10:00:00Z', updatedAt: '2025-06-20T10:00:00Z'
  }
];

export const SEED_AI_REPORTS: AIReport[] = [];
