import type { AITool, AssessmentQuestion, CompetenceLevel, LearningSuggestion, Role, Skill, VideoLesson } from '../types/roles'

export const roles: Role[] = [
  {
    slug: 'ceo',
    name: 'CEO',
    eyebrow: 'Leadership & strategy',
    description: 'Ra quyết định dựa trên dữ liệu, quản trị rủi ro và dẫn dắt AI có trách nhiệm.',
    icon: 'badge',
    accent: '#7c3aed',
    accentSoft: '#ede9fe',
  },
  {
    slug: 'hr',
    name: 'HR',
    eyebrow: 'People & culture',
    description: 'Thiết kế trải nghiệm nhân sự, nâng cao kỹ năng và xây dựng văn hóa sử dụng AI.',
    icon: 'users',
    accent: '#db2777',
    accentSoft: '#fce7f3',
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    eyebrow: 'Growth & content',
    description: 'Khai thác insight, tăng tốc sáng tạo nội dung và tối ưu hiệu quả chiến dịch.',
    icon: 'megaphone',
    accent: '#ea580c',
    accentSoft: '#ffedd5',
  },
  {
    slug: 'sales-crm',
    name: 'Sales / CRM',
    eyebrow: 'Revenue & relationships',
    description: 'Cá nhân hóa tương tác, ưu tiên cơ hội và chăm sóc khách hàng nhất quán hơn.',
    icon: 'handshake',
    accent: '#0891b2',
    accentSoft: '#cffafe',
  },
  {
    slug: 'accounting',
    name: 'Kế toán',
    eyebrow: 'Finance & control',
    description: 'Đối soát, phân tích, tự động hóa và kiểm soát rủi ro với AI trong nghiệp vụ kế toán.',
    icon: 'calculator',
    accent: '#0f766e',
    accentSoft: '#ccfbf1',
    isFeatured: true,
  },
]

export const accountingLevels: CompetenceLevel[] = [
  {
    level: 1,
    name: 'Nhận biết & sử dụng an toàn',
    shortLabel: 'Foundation',
    description: 'Hiểu AI làm được gì, biết đặt câu hỏi đơn giản và nhận diện rủi ro dữ liệu.',
    outcome: 'Dùng AI như trợ lý có kiểm soát cho các tác vụ lặp lại.',
    color: '#0f766e',
  },
  {
    level: 2,
    name: 'Ứng dụng vào nghiệp vụ',
    shortLabel: 'Practitioner',
    description: 'Kết hợp AI với bảng tính, hồ sơ và quy trình kiểm tra để tăng tốc công việc.',
    outcome: 'Tạo ra kết quả nhất quán hơn trong đối soát và báo cáo.',
    color: '#0891b2',
  },
  {
    level: 3,
    name: 'Tích hợp & kiểm soát',
    shortLabel: 'Integrator',
    description: 'Thiết kế workflow, kiểm tra đầu ra và quản trị quyền truy cập dữ liệu.',
    outcome: 'Biến AI thành một phần có kiểm soát của quy trình kế toán.',
    color: '#2563eb',
  },
  {
    level: 4,
    name: 'Dẫn dắt & đổi mới',
    shortLabel: 'Strategist',
    description: 'Đánh giá tác động, chọn công cụ và dẫn dắt lộ trình AI cấp phòng ban.',
    outcome: 'Ra quyết định đầu tư AI dựa trên giá trị, rủi ro và khả năng mở rộng.',
    color: '#7c3aed',
  },
]

export const accountingSkills: Skill[] = [
  {
    title: 'Đối soát dữ liệu',
    description: 'Dùng AI để so sánh sổ chi tiết, bảng kê và chứng từ; làm nổi bật điểm lệch cần kiểm tra.',
    icon: 'scan',
    tag: 'Data control',
  },
  {
    title: 'Phân tích báo cáo tài chính',
    description: 'Tóm tắt biến động doanh thu, chi phí, dòng tiền và đặt câu hỏi phân tích tiếp theo.',
    icon: 'chart',
    tag: 'Insight',
  },
  {
    title: 'Phát hiện bất thường',
    description: 'Nhận diện giao dịch lệch chuẩn, mẫu lặp bất thường và tín hiệu cần chuyển cho người kiểm tra.',
    icon: 'shield',
    tag: 'Risk signal',
  },
  {
    title: 'Tự động hóa nhập liệu',
    description: 'Chuẩn hóa mô tả, phân loại chứng từ và đề xuất trường dữ liệu cho bước nhập liệu.',
    icon: 'workflow',
    tag: 'Automation',
  },
  {
    title: 'Trợ lý hỏi đáp nội bộ',
    description: 'Tra cứu quy trình, checklist và hướng dẫn nội bộ với câu trả lời có nguồn tham chiếu.',
    icon: 'message',
    tag: 'Knowledge',
  },
  {
    title: 'Kiểm soát AI có trách nhiệm',
    description: 'Ẩn danh dữ liệu, phân quyền, kiểm tra đầu ra và lưu lại dấu vết quyết định của con người.',
    icon: 'lock',
    tag: 'Governance',
  },
]

export const recommendedAccountingTools: AITool[] = [
  {
    name: 'AI trong bảng tính',
    category: 'Phân tích dữ liệu',
    description: 'Gợi ý công thức, làm sạch dữ liệu và tạo bản tóm tắt để kiểm tra nhanh.',
    icon: 'chart',
    fit: 'Đối soát & báo cáo',
  },
  {
    name: 'Document intelligence',
    category: 'Chứng từ số',
    description: 'Trích xuất trường thông tin từ hóa đơn, phiếu thu và tài liệu có cấu trúc.',
    icon: 'file-check',
    fit: 'Nhập liệu & lưu trữ',
  },
  {
    name: 'Trợ lý quy trình',
    category: 'Knowledge assistant',
    description: 'Trả lời câu hỏi theo kho tài liệu nội bộ với nguồn và quyền truy cập phù hợp.',
    icon: 'bot',
    fit: 'Tra cứu & onboarding',
  },
  {
    name: 'Automation builder',
    category: 'Workflow',
    description: 'Kết nối các bước nhắc việc, phê duyệt và báo cáo lặp lại trong quy trình.',
    icon: 'workflow',
    fit: 'Giảm thao tác lặp',
  },
]

export const accountingVideos: VideoLesson[] = [
  {
    id: 'ai-accounting-01',
    title: 'AI trong quy trình kế toán hiện đại',
    module: '01 · Nền tảng',
    duration: '08:42',
    description: 'Nhìn tổng quan về những điểm AI có thể hỗ trợ và nơi phán đoán nghề nghiệp vẫn là trung tâm.',
    icon: 'sparkles',
    accent: '#0f766e',
    completed: true,
  },
  {
    id: 'ai-accounting-02',
    title: 'Đối soát dữ liệu với AI',
    module: '02 · Ứng dụng',
    duration: '12:18',
    description: 'Tạo quy trình đối chiếu sổ chi tiết, bảng kê và chứng từ để tìm điểm lệch có thể kiểm tra.',
    icon: 'scan',
    accent: '#0891b2',
  },
  {
    id: 'ai-accounting-03',
    title: 'Đọc nhanh báo cáo tài chính',
    module: '03 · Phân tích',
    duration: '10:36',
    description: 'Dùng AI để tóm tắt biến động và đặt câu hỏi phân tích tiếp theo mà không bỏ qua dữ liệu gốc.',
    icon: 'chart',
    accent: '#2563eb',
  },
  {
    id: 'ai-accounting-04',
    title: 'Nhận diện bất thường & rủi ro',
    module: '04 · Kiểm soát',
    duration: '14:05',
    description: 'Phân biệt tín hiệu cảnh báo với kết luận cuối cùng, thiết kế bước kiểm tra và lưu dấu vết.',
    icon: 'shield',
    accent: '#7c3aed',
  },
  {
    id: 'ai-accounting-05',
    title: 'Thiết kế workflow AI có trách nhiệm',
    module: '05 · Tích hợp',
    duration: '16:24',
    description: 'Chọn công cụ, phân quyền, ẩn danh dữ liệu và xây dựng pilot nhỏ trước khi mở rộng.',
    icon: 'workflow',
    accent: '#db2777',
  },
]

export const accountingLearningSuggestions: LearningSuggestion[] = [
  {
    title: 'Ôn lại đối soát dữ liệu',
    description: 'Bạn đã xem xong nền tảng. Bài tiếp theo giúp chuyển kiến thức thành thao tác trên bộ dữ liệu giả lập.',
    reason: 'Phù hợp với mục tiêu Level 2 của bạn',
    icon: 'scan',
    actionLabel: 'Tiếp tục video',
    videoId: 'ai-accounting-02',
  },
  {
    title: 'Thử bài tập phát hiện bất thường',
    description: 'Luyện cách đặt câu hỏi cho AI, kiểm tra tín hiệu và ghi rõ phần cần con người xác minh.',
    reason: 'Bổ trợ kỹ năng kiểm soát đầu ra',
    icon: 'shield',
    actionLabel: 'Xem gợi ý',
    videoId: 'ai-accounting-04',
  },
  {
    title: 'Cập nhật checklist an toàn',
    description: 'Rà soát dữ liệu nhạy cảm, quyền truy cập và dấu vết quyết định trước khi dùng công cụ mới.',
    reason: 'Nên hoàn thành trước khi làm pilot',
    icon: 'lock',
    actionLabel: 'Mở checklist',
  },
]

export const accountingAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'q1',
    skill: 'AI fundamentals',
    question: 'Khi dùng AI để tóm tắt một báo cáo tài chính, hành động nào nên làm trước khi chia sẻ kết quả?',
    options: ['Kiểm tra nguồn, kỳ dữ liệu và các giả định', 'Tin ngay vào bản tóm tắt', 'Xóa dữ liệu gốc', 'Chia sẻ công khai để lấy phản hồi'],
    correctIndex: 0,
    explanation: 'Người làm kế toán cần đối chiếu nguồn và kỳ dữ liệu trước khi sử dụng bất kỳ bản tóm tắt nào.',
  },
  {
    id: 'q2',
    skill: 'Data control',
    question: 'Trong một quy trình đối soát, AI nên được dùng như thế nào?',
    scenario: 'Tình huống: hệ thống phát hiện một nhóm giao dịch có sai khác giữa sổ chi tiết và bảng kê.',
    options: ['Tự động kết luận sai phạm', 'Làm nổi bật điểm lệch để người có trách nhiệm xác minh', 'Thay thế toàn bộ bước phê duyệt', 'Bỏ qua các giao dịch nhỏ'],
    correctIndex: 1,
    explanation: 'AI nên ưu tiên tín hiệu và chỉ ra điểm cần kiểm tra; kết luận và phê duyệt vẫn thuộc về người có trách nhiệm.',
  },
  {
    id: 'q3',
    skill: 'Responsible AI',
    question: 'Lựa chọn nào giúp giảm rủi ro khi đưa dữ liệu kế toán vào công cụ AI?',
    options: ['Ẩn danh dữ liệu và kiểm tra chính sách lưu trữ/quyền truy cập', 'Dùng dữ liệu thật để có kết quả nhanh', 'Cấp quyền quản trị cho cả nhóm', 'Gửi mật khẩu cùng file'],
    correctIndex: 0,
    explanation: 'Ẩn danh, tối thiểu hóa dữ liệu và kiểm tra quyền truy cập là lớp kiểm soát cơ bản trước khi dùng AI.',
  },
  {
    id: 'q4',
    skill: 'Workflow',
    question: 'Cách tốt nhất để thử một workflow AI mới trong phòng kế toán là gì?',
    scenario: 'Tình huống: phòng kế toán muốn dùng AI để đề xuất phân loại hóa đơn trước khi ghi sổ.',
    options: ['Triển khai ngay cho toàn bộ dữ liệu', 'Pilot nhỏ với chỉ số đo và phương án quay lại', 'Chỉ dựa vào lời giới thiệu của nhà cung cấp', 'Bỏ qua đào tạo vì công cụ tự động'],
    correctIndex: 1,
    explanation: 'Pilot có phạm vi nhỏ, tiêu chí đo và phương án quay lại giúp kiểm soát rủi ro trước khi mở rộng.',
  },
  {
    id: 'q5',
    skill: 'Financial analysis',
    question: 'AI cảnh báo chi phí vận hành tháng này tăng 18%. Bước kiểm tra đầu tiên nên là gì?',
    options: ['Tin ngay vào cảnh báo', 'Đối chiếu kỳ dữ liệu, mẫu thay đổi và số liệu nguồn', 'Xóa các giao dịch tăng cao', 'Nhờ AI sửa luôn báo cáo gốc'],
    correctIndex: 1,
    explanation: 'Một cảnh báo chỉ là điểm bắt đầu. Cần kiểm tra kỳ, nguồn, định nghĩa chỉ số và các giao dịch tạo ra biến động.',
  },
  {
    id: 'q6',
    skill: 'Automation',
    question: 'Với quy trình OCR hóa đơn, kiểm soát nào phù hợp nhất trước khi ghi nhận dữ liệu?',
    scenario: 'Tình huống: AI đã trích xuất nhà cung cấp, mã số thuế và tổng tiền từ 500 hóa đơn.',
    options: ['Đăng thẳng mọi hóa đơn vào hệ thống', 'Chỉ xem tổng tiền rồi bỏ qua trường khác', 'So sánh mẫu với bản gốc, đặt ngưỡng ngoại lệ và giữ bước phê duyệt', 'Tắt toàn bộ cảnh báo để tiết kiệm thời gian'],
    correctIndex: 2,
    explanation: 'OCR cần được kiểm tra theo mẫu và có ngưỡng ngoại lệ để con người xem lại các trường quan trọng hoặc bất thường.',
  },
  {
    id: 'q7',
    skill: 'Data governance',
    question: 'Bạn được yêu cầu dùng dữ liệu lương để thử một chatbot nội bộ. Cách xử lý an toàn hơn là gì?',
    options: ['Gửi nguyên file cho tài khoản cá nhân', 'Ẩn danh hoặc dùng dữ liệu giả lập, đồng thời xác minh chính sách và quyền truy cập', 'Dùng chung mật khẩu của phòng', 'Đăng file lên một công cụ miễn phí bất kỳ'],
    correctIndex: 1,
    explanation: 'Dữ liệu lương có thể nhạy cảm; nên dùng dữ liệu giả lập/ẩn danh và chỉ dùng công cụ, tài khoản được phê duyệt.',
  },
  {
    id: 'q8',
    skill: 'Human oversight',
    question: 'Quản lý đề nghị để AI tự phê duyệt mọi giao dịch mà AI đánh dấu là “bình thường”. Bạn nên phản hồi thế nào?',
    options: ['Đồng ý vì AI đã được huấn luyện', 'Tắt cảnh báo để quy trình nhanh hơn', 'Dùng AI để ưu tiên và giải thích tín hiệu, nhưng giữ xác minh và phê duyệt của con người', 'Bỏ qua toàn bộ kết quả của AI'],
    correctIndex: 2,
    explanation: 'AI hỗ trợ phân loại và giải thích; các quyết định có tác động tài chính vẫn cần kiểm soát và phê duyệt phù hợp.',
  },
]

export const accountingChatMessages = [
  { id: 'welcome', role: 'assistant' as const, text: 'Chào bạn! Tôi là AI Assistant cho lộ trình Kế toán. Bạn muốn làm rõ kỹ năng hay bài học nào?', time: '09:41' },
  { id: 'tip', role: 'assistant' as const, text: 'Gợi ý nhanh: khi đối soát, hãy yêu cầu AI chỉ ra điểm lệch và nguồn dữ liệu — đừng yêu cầu AI tự kết luận.', time: '09:42' },
]

export function getRole(slug: string | undefined) {
  return roles.find((role) => role.slug === slug)
}
