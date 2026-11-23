export type Language = 'en' | 'vi'

const STORAGE_KEY = 'codediggs-language'

const vietnamese: Record<string, string> = {
  'Primary navigation': 'Điều hướng chính',
  'Mobile navigation': 'Điều hướng trên thiết bị di động',
  'Open navigation menu': 'Mở menu điều hướng',
  'Close navigation menu': 'Đóng menu điều hướng',
  'Open menu': 'Mở menu',
  'Close menu': 'Đóng menu',
  About: 'Giới thiệu',
  Projects: 'Dự án',
  'Featured Project': 'Dự án nổi bật',
  'Selected Repositories': 'Kho mã được chọn',
  Publications: 'Ấn phẩm',
  Experience: 'Kinh nghiệm',
  'Professional Experience': 'Kinh nghiệm chuyên môn',
  'Automotive Career History': 'Quá trình nghề nghiệp ô tô',
  Entrepreneurship: 'Khởi nghiệp',
  Education: 'Học vấn',
  Certifications: 'Chứng chỉ',
  Military: 'Quân ngũ',
  'Military Service': 'Quân ngũ',
  Skills: 'Kỹ năng',
  Contact: 'Liên hệ',
  'Hi, I’m John': 'Xin chào, tôi là John',
  'I blend mechanical intuition with software precision — building systems that connect the physical and digital worlds.':
    'Tôi kết hợp trực giác cơ khí với độ chính xác của phần mềm để xây dựng những hệ thống kết nối thế giới vật lý và kỹ thuật số.',
  'View My Work': 'Xem công việc của tôi',
  'About Me': 'Về tôi',
  'I’m a multidisciplinary technologist, educator, and entrepreneur with experience across software engineering, automotive diagnostics, IT and network support, low-voltage electrical systems, and technical design. My background combines hands-on repair and systems troubleshooting with software development, automation, business operations, and classroom/lab instruction.':
    'Tôi là một chuyên gia công nghệ đa lĩnh vực, nhà giáo dục và doanh nhân với kinh nghiệm về kỹ thuật phần mềm, chẩn đoán ô tô, hỗ trợ CNTT và mạng, hệ thống điện hạ thế và thiết kế kỹ thuật. Nền tảng của tôi kết hợp sửa chữa thực tế và xử lý sự cố hệ thống với phát triển phần mềm, tự động hóa, vận hành doanh nghiệp và giảng dạy trong lớp học/phòng thực hành.',
  'I approach problems by understanding how the pieces interact, identifying root causes, and turning complex ideas into practical, maintainable solutions. That same curiosity informs my independent research and work with emerging AI technologies, connecting mechanical, electrical, and digital disciplines rather than treating them as separate fields.':
    'Tôi giải quyết vấn đề bằng cách hiểu cách các thành phần tương tác, xác định nguyên nhân gốc và biến những ý tưởng phức tạp thành giải pháp thực tế, dễ bảo trì. Sự tò mò đó cũng định hướng nghiên cứu độc lập và công việc của tôi với các công nghệ AI mới, kết nối cơ khí, điện và kỹ thuật số thay vì xem chúng là những lĩnh vực tách biệt.',
  'Featured live work and a selection of software projects and experiments.':
    'Các dự án đang hoạt động cùng một số dự án phần mềm và thử nghiệm tiêu biểu.',
  'Featured Live Project': 'Dự án đang hoạt động nổi bật',
  'A living character sheet for your real life': 'Bảng nhân vật sống cho cuộc sống thực của bạn',
  'A real-life RPG personal-development app that turns lived experience into a persistent character sheet, tracking skills, attributes, talents, goals, activities, evidence, and deterministic XP rather than relying on streaks.':
    'Ứng dụng phát triển bản thân theo phong cách RPG ngoài đời thực, biến trải nghiệm sống thành một bảng nhân vật lâu dài, theo dõi kỹ năng, thuộc tính, tài năng, mục tiêu, hoạt động, bằng chứng và XP xác định thay vì dựa vào chuỗi ngày liên tiếp.',
  'Visit sagestatus.com': 'Truy cập sagestatus.com',
  'Python research prototype for storing and prioritizing persistent context in a hierarchical neural-network layer, with CLI tools and tests.':
    'Nguyên mẫu nghiên cứu Python để lưu trữ và ưu tiên ngữ cảnh dài hạn trong một lớp mạng nơ-ron phân cấp, kèm công cụ CLI và kiểm thử.',
  'A job-board application with separate frontend and backend code, exploring a full-stack approach to job discovery.':
    'Ứng dụng bảng việc làm với frontend và backend tách riêng, thử nghiệm cách tiếp cận full-stack cho việc tìm kiếm cơ hội nghề nghiệp.',
  'A Django web application integrating multiple food-related APIs.':
    'Ứng dụng web Django tích hợp nhiều API liên quan đến thực phẩm.',
  'A Flask web application with articles, user profiles, dashboards, and Flask-SQLAlchemy-backed features.':
    'Ứng dụng web Flask với bài viết, hồ sơ người dùng, bảng điều khiển và các tính năng dùng Flask-SQLAlchemy.',
  'An exploratory C++ project examining personality layers and behavior models for AI characters.':
    'Dự án thử nghiệm C++ nghiên cứu các lớp tính cách và mô hình hành vi cho nhân vật AI.',
  'Earlier Software Projects': 'Các dự án phần mềm trước đây',
  'Historical work documented in an earlier résumé; these are not presented as current live deployments.':
    'Các dự án cũ được ghi nhận trong hồ sơ trước đây; chúng không được trình bày như các hệ thống hiện đang hoạt động.',
  'Designed and developed a Flask web application using Flask-SQLAlchemy and SQLite.':
    'Thiết kế và phát triển ứng dụng web Flask sử dụng Flask-SQLAlchemy và SQLite.',
  'Built a simple Flask and Python CRUD application, previously hosted on Heroku.':
    'Xây dựng ứng dụng CRUD đơn giản bằng Flask và Python, trước đây được triển khai trên Heroku.',
  'Browse all public GitHub repositories': 'Xem tất cả kho mã GitHub công khai',
  'Independent research and formal technical writing published with permanent citations.':
    'Nghiên cứu độc lập và các bài viết kỹ thuật chính thức được xuất bản với trích dẫn vĩnh viễn.',
  Publication: 'Ấn phẩm',
  'Scientific Preprint': 'Bản thảo khoa học',
  'Open access': 'Truy cập mở',
  Version: 'Phiên bản',
  Publisher: 'Nhà xuất bản',
  'Publication status': 'Trạng thái xuất bản',
  'Preprint · Not peer reviewed': 'Bản thảo · Chưa được bình duyệt',
  License: 'Giấy phép',
  'View Publication': 'Xem ấn phẩm',
  'Read Publication': 'Đọc ấn phẩm',
  'A retrospective scientific case study examining human-directed coordination of multiple AI research systems across a nine-paper scientific research program. It documents research organization, GitHub-based coordination, mathematical investigation, scientific criticism, source verification, and research provenance while distinguishing documented research activity from independently verified scientific findings. It does not claim that the underlying Postulations / Dynamic Door hypotheses have been experimentally proven.':
    'Một nghiên cứu trường hợp khoa học hồi cứu về việc con người điều phối nhiều hệ thống AI trong một chương trình nghiên cứu gồm chín bài. Công trình ghi lại cách tổ chức nghiên cứu, phối hợp qua GitHub, khảo sát toán học, phản biện khoa học, xác minh nguồn và nguồn gốc nghiên cứu, đồng thời phân biệt hoạt động nghiên cứu có tài liệu chứng minh với các phát hiện khoa học đã được xác minh độc lập. Công trình không tuyên bố rằng các giả thuyết Postulations / Dynamic Door nền tảng đã được chứng minh bằng thực nghiệm.',
  'Research Methodology': 'Phương pháp nghiên cứu',
  'Human–AI Collaboration': 'Hợp tác người–AI',
  'Multi-AI Coordination': 'Điều phối đa AI',
  'Research Provenance': 'Nguồn gốc nghiên cứu',
  'Scientific Criticism': 'Phản biện khoa học',
  'A speculative theoretical extension that makes microtubule excitation transport a conditional candidate local substrate within UQCP, separating physical transport, biological relevance, and non-local field claims into distinct evidentiary stages with explicit falsification gates.':
    'Một phần mở rộng lý thuyết mang tính giả thuyết, xem vận chuyển kích thích trong vi ống như một ứng viên cục bộ có điều kiện trong UQCP, đồng thời tách vận chuyển vật lý, ý nghĩa sinh học và các tuyên bố trường phi cục bộ thành các giai đoạn bằng chứng riêng biệt với tiêu chí bác bỏ rõ ràng.',
  'A theoretical framework and experimental program for testing axial excitation-energy transport, inter-tube hopping and crosstalk, fabrication preservation, and driven ELF modulation in microtubules, with explicit engineering thresholds and stop/falsification criteria.':
    'Một khuôn khổ lý thuyết và chương trình thí nghiệm để kiểm tra vận chuyển năng lượng kích thích theo trục, chuyển tiếp và xuyên nhiễu giữa các vi ống, khả năng bảo toàn sau chế tạo và điều biến ELF cưỡng bức trong vi ống, với các ngưỡng kỹ thuật và tiêu chí dừng/bác bỏ rõ ràng.',
  'A revised theoretical postulation and experimental proposal centered on a Driven Microtubular Near-Field Transduction Array, narrowing the physical model to chromophore-mediated transport through the tubulin lattice and treating electrical, mechanical/acoustic, and magnetic perturbations as testable modulation axes while keeping broader consciousness claims conditional.':
    'Một giả thuyết lý thuyết và đề xuất thí nghiệm đã được chỉnh sửa, tập trung vào Mảng Chuyển đổi Trường Gần Vi ống Cưỡng bức, thu hẹp mô hình vật lý vào vận chuyển qua mạng tubulin do chromophore trung gian và xem nhiễu điện, cơ học/âm học và từ trường như các trục điều biến có thể kiểm nghiệm, trong khi vẫn giữ các tuyên bố rộng hơn về ý thức ở trạng thái có điều kiện.',
  'Automotive Instructor': 'Giảng viên ô tô',
  'Software Engineer': 'Kỹ sư phần mềm',
  'Software Engineering Intern': 'Thực tập sinh kỹ thuật phần mềm',
  'IT Intern': 'Thực tập sinh CNTT',
  'Deliver classroom and hands-on lab instruction in automotive diagnostics, electrical systems, fuel systems, drivability, and professional shop practices.':
    'Giảng dạy trên lớp và thực hành về chẩn đoán ô tô, hệ thống điện, hệ thống nhiên liệu, khả năng vận hành và quy trình xưởng chuyên nghiệp.',
  'Coach evidence-led troubleshooting using service information, wiring diagrams, waveforms, compression testing, and fuel-system examples.':
    'Hướng dẫn chẩn đoán dựa trên bằng chứng bằng tài liệu dịch vụ, sơ đồ mạch điện, dạng sóng, kiểm tra áp suất nén và các ví dụ về hệ thống nhiên liệu.',
  'Manage classroom/lab activities, student groups, safety, attendance, assessments, and differentiated instruction across multiple workstations.':
    'Quản lý hoạt động lớp học/phòng thực hành, nhóm sinh viên, an toàn, điểm danh, đánh giá và giảng dạy phân hóa trên nhiều trạm làm việc.',
  'Use Blackboard to organize coursework, assignments, grades, feedback, and student progress while coaching diagnostic strategy, documentation, and professional communication.':
    'Sử dụng Blackboard để quản lý bài học, bài tập, điểm số, phản hồi và tiến độ sinh viên, đồng thời hướng dẫn chiến lược chẩn đoán, lập tài liệu và giao tiếp chuyên nghiệp.',
  'Collaborated with senior engineers on full-stack and CI/CD development supporting secure automation pipelines through Jenkins, Trivy, Coverity, and Jira/Confluence.':
    'Phối hợp với các kỹ sư cao cấp trong phát triển full-stack và CI/CD, hỗ trợ các quy trình tự động hóa an toàn bằng Jenkins, Trivy, Coverity và Jira/Confluence.',
  'Engineered and maintained secure React applications with TypeScript and JavaScript.':
    'Phát triển và duy trì các ứng dụng React an toàn bằng TypeScript và JavaScript.',
  'Built CI/CD pipelines integrating security scans with Jenkins, Trivy, and Coverity.':
    'Xây dựng quy trình CI/CD tích hợp quét bảo mật bằng Jenkins, Trivy và Coverity.',
  'Directed Linux server administration and Dockerized environments for mission-critical systems.':
    'Quản trị máy chủ Linux và môi trường Docker cho các hệ thống quan trọng.',
  'Migrated CentOS 7 infrastructure to RHEL 10 using Docker Compose and a bastion host; independently researched and resolved migration issues with limited documentation.':
    'Chuyển hạ tầng CentOS 7 sang RHEL 10 bằng Docker Compose và bastion host; tự nghiên cứu và xử lý các vấn đề di chuyển trong điều kiện tài liệu hạn chế.',
  'Automated reporting workflows and supported Agile sprint planning with technical leads.':
    'Tự động hóa quy trình báo cáo và hỗ trợ lập kế hoạch sprint Agile cùng các trưởng nhóm kỹ thuật.',
  'Integrated Java, C++, and TypeScript components into automated software testing systems.':
    'Tích hợp các thành phần Java, C++ và TypeScript vào hệ thống kiểm thử phần mềm tự động.',
  'Resolved versioning, library, and reference-link conflicts during cross-language integration.':
    'Xử lý xung đột phiên bản, thư viện và liên kết tham chiếu trong quá trình tích hợp đa ngôn ngữ lập trình.',
  'Provided common functionality across different compilation environments.':
    'Cung cấp chức năng chung trên các môi trường biên dịch khác nhau.',
  'Worked closely with a mentor and technical experts in a team-oriented engineering environment.':
    'Làm việc chặt chẽ với người hướng dẫn và chuyên gia kỹ thuật trong môi trường kỹ thuật đề cao làm việc nhóm.',
  'Coordinated application packaging for 96 applications in 10 weeks and worked with users on packaging documentation.':
    'Điều phối đóng gói 96 ứng dụng trong 10 tuần và làm việc với người dùng về tài liệu đóng gói.',
  'Worked with the SCCM team on technical processes and coordinated key parts of an IT audit.':
    'Làm việc với nhóm SCCM về quy trình kỹ thuật và điều phối các phần quan trọng của một cuộc kiểm toán CNTT.',
  'Remediated regional asset inventory and analyzed North American PC encryption status with endpoint-user-services teams.':
    'Khắc phục dữ liệu kiểm kê tài sản khu vực và phân tích trạng thái mã hóa máy tính tại Bắc Mỹ cùng các nhóm dịch vụ người dùng đầu cuối.',
  'Assisted with two major site integrations; imaged approximately 170 machines in 10 weeks and deployed devices to manufacturing and sales HQ sites.':
    'Hỗ trợ hai đợt tích hợp cơ sở lớn; tạo image cho khoảng 170 máy trong 10 tuần và triển khai thiết bị tới các cơ sở sản xuất và trụ sở bán hàng.',
  'Automotive technician, service, parts, and shop-operations positions from 2001–2019. Select an employer to view responsibilities.':
    'Các vị trí kỹ thuật viên ô tô, dịch vụ, phụ tùng và vận hành xưởng từ 2001–2019. Chọn một nơi làm việc để xem trách nhiệm.',
  'View responsibilities': 'Xem trách nhiệm',
  'Automotive Technician': 'Kỹ thuật viên ô tô',
  'Service Advisor': 'Cố vấn dịch vụ',
  'Sales Associate': 'Nhân viên bán hàng',
  'Shop Manager / Technician': 'Quản lý xưởng / Kỹ thuật viên',
  'Night Closing Manager': 'Quản lý ca đóng cửa',
  'A-Level Technician': 'Kỹ thuật viên cấp A',
  'B-Level Technician': 'Kỹ thuật viên cấp B',
  'C-Level Technician': 'Kỹ thuật viên cấp C',
  'Entry-Level Technician': 'Kỹ thuật viên mới vào nghề',
  'Lube Technician': 'Kỹ thuật viên bảo dưỡng nhanh',
  'Routine oil/lube service, fluid and tire checks, and basic preventive maintenance.':
    'Thay dầu/bôi trơn định kỳ, kiểm tra chất lỏng và lốp, cùng bảo dưỡng phòng ngừa cơ bản.',
  'Receive work orders; diagnose and repair customer concerns and complete requested services.':
    'Nhận lệnh sửa chữa; chẩn đoán và sửa các vấn đề khách hàng phản ánh và hoàn thành dịch vụ được yêu cầu.',
  'Perform courtesy vehicle inspections and record recommendations in CDK Service Edge.':
    'Thực hiện kiểm tra xe miễn phí và ghi nhận khuyến nghị trong CDK Service Edge.',
  'Communicate with service advisors and, when necessary, directly with customers.':
    'Trao đổi với cố vấn dịch vụ và khi cần thì trực tiếp với khách hàng.',
  'Document warranty repairs with proper punch times and descriptions of work performed.':
    'Lập hồ sơ sửa chữa bảo hành với thời gian công và mô tả công việc đúng quy định.',
  'Perform requested tasks and inspect vehicles for additional service recommendations.':
    'Thực hiện công việc được yêu cầu và kiểm tra xe để đề xuất thêm dịch vụ khi cần.',
  'Diagnose and repair European, Asian, and domestic vehicles and communicate findings to the service advisor.':
    'Chẩn đoán và sửa chữa xe châu Âu, châu Á và xe nội địa, đồng thời báo kết quả cho cố vấn dịch vụ.',
  'Carry out day-to-day shop operations.': 'Thực hiện các hoạt động vận hành xưởng hằng ngày.',
  'Discuss service needs and concerns with customers; answer calls and schedule appointments.':
    'Trao đổi với khách hàng về nhu cầu và vấn đề dịch vụ; trả lời điện thoại và đặt lịch hẹn.',
  'Explain estimates, obtain repair approval, and monitor work against promised completion times.':
    'Giải thích báo giá, xin phê duyệt sửa chữa và theo dõi tiến độ so với thời gian hoàn thành cam kết.',
  'Communicate expected delays; review repairs and multi-point inspections with customers.':
    'Thông báo các chậm trễ dự kiến; cùng khách hàng rà soát sửa chữa và kiểm tra nhiều điểm.',
  'Handle repair documentation, follow-up calls, and service survey reviews.':
    'Xử lý hồ sơ sửa chữa, cuộc gọi theo dõi và phản hồi khảo sát dịch vụ.',
  'Present tire products and automotive services and provide in-store and telephone customer service.':
    'Giới thiệu sản phẩm lốp và dịch vụ ô tô, đồng thời hỗ trợ khách hàng tại cửa hàng và qua điện thoại.',
  'Coordinate with the customer service manager and technicians on service timing.':
    'Phối hợp với quản lý dịch vụ khách hàng và kỹ thuật viên về thời gian thực hiện dịch vụ.',
  'Explain warranty coverage and customer options.': 'Giải thích phạm vi bảo hành và các lựa chọn cho khách hàng.',
  'Prepare work orders, estimates, invoices, and receipts.': 'Chuẩn bị lệnh sửa chữa, báo giá, hóa đơn và biên nhận.',
  'Receive customers, interpret vehicle concerns, and process payments.':
    'Tiếp nhận khách hàng, xác định vấn đề của xe và xử lý thanh toán.',
  'Carry out automotive repairs with a focus on diagnostics and testing.':
    'Thực hiện sửa chữa ô tô, tập trung vào chẩn đoán và kiểm tra.',
  'Close and count registers, count the safe, and prepare the next day’s deposit.':
    'Đóng và kiểm đếm quầy tiền, kiểm két và chuẩn bị khoản tiền gửi cho ngày hôm sau.',
  'Coordinate mail pickup and assign employee closing duties.':
    'Điều phối việc nhận thư và phân công nhiệm vụ đóng cửa cho nhân viên.',
  'Install batteries and wiper blades and handle stocking and inventory.':
    'Lắp ắc quy và cần gạt mưa, đồng thời xử lý bổ sung hàng và kiểm kê.',
  'Diagnose and repair electrical, OBD I/OBD II, air-conditioning, and brake systems.':
    'Chẩn đoán và sửa chữa hệ thống điện, OBD I/OBD II, điều hòa và phanh.',
  'Diagnose noise and drivability concerns; perform repairs and service.':
    'Chẩn đoán tiếng ồn và vấn đề vận hành; thực hiện sửa chữa và bảo dưỡng.',
  'Remove and replace major components and complete major and minor preventive maintenance.':
    'Tháo lắp các cụm lớn và thực hiện bảo dưỡng phòng ngừa lớn và nhỏ.',
  'Diagnose noise and drivability issues and replace major components.':
    'Chẩn đoán tiếng ồn và vấn đề vận hành, đồng thời thay thế các cụm lớn.',
  'Perform major and minor preventive maintenance.': 'Thực hiện bảo dưỡng phòng ngừa lớn và nhỏ.',
  'Diagnose and repair electrical, minor OBD II, steering and suspension, and brake systems; perform alignments.':
    'Chẩn đoán và sửa chữa hệ thống điện, OBD II cơ bản, lái, treo và phanh; thực hiện cân chỉnh góc đặt bánh xe.',
  'Address noise and drivability concerns and carry out preventive maintenance.':
    'Xử lý tiếng ồn và vấn đề vận hành, đồng thời thực hiện bảo dưỡng phòng ngừa.',
  'Complete technical bulletins and campaigns, plus mechanical disassembly, repair, and rebuild work.':
    'Thực hiện các bản tin kỹ thuật và chiến dịch dịch vụ, cùng công việc tháo rời, sửa chữa và lắp lại cơ khí.',
  'Service brakes, alignments, steering and suspension systems, and minor OBD issues.':
    'Bảo dưỡng phanh, cân chỉnh góc đặt bánh xe, hệ thống lái/treo và các vấn đề OBD cơ bản.',
  'Perform preventive maintenance and tire mounting and balancing.':
    'Thực hiện bảo dưỡng phòng ngừa, lắp và cân bằng lốp.',
  'Performed routine oil and filter changes and vehicle lubrication services.':
    'Thực hiện thay dầu, lọc dầu và bôi trơn xe định kỳ.',
  'Checked fluid levels and tire pressure as part of basic maintenance.':
    'Kiểm tra mức chất lỏng và áp suất lốp trong bảo dưỡng cơ bản.',
  'Assisted with general preventive-maintenance checks and safe shop procedures.':
    'Hỗ trợ kiểm tra bảo dưỡng phòng ngừa tổng quát và tuân thủ quy trình an toàn trong xưởng.',
  Founder: 'Nhà sáng lập',
  'Co-owner/operator': 'Đồng sở hữu / vận hành',
  'Owner/operator': 'Chủ sở hữu / vận hành',
  'Business formation and administration': 'Thành lập và quản trị doanh nghiệp',
  'Software product strategy and planning': 'Chiến lược và lập kế hoạch sản phẩm phần mềm',
  'Brand, website, and online-presence management': 'Quản lý thương hiệu, website và hiện diện trực tuyến',
  'Designed, implemented, troubleshot, and maintained a WordPress and WooCommerce storefront backed by MySQL':
    'Thiết kế, triển khai, xử lý sự cố và bảo trì cửa hàng WordPress/WooCommerce sử dụng MySQL',
  'Managed product listings, payment processing, and site analytics':
    'Quản lý danh sách sản phẩm, xử lý thanh toán và phân tích website',
  'Product branding, packaging, and marketing': 'Xây dựng thương hiệu sản phẩm, bao bì và tiếp thị',
  'Manufacturing infrastructure and workflow setup': 'Thiết lập hạ tầng sản xuất và quy trình làm việc',
  'Inventory, order-fulfillment, and shipping management': 'Quản lý tồn kho, hoàn tất đơn hàng và vận chuyển',
  'Mobile automotive-service business operations': 'Vận hành doanh nghiệp dịch vụ ô tô lưu động',
  'Customer intake, estimates, scheduling, and invoicing': 'Tiếp nhận khách hàng, báo giá, xếp lịch và lập hóa đơn',
  'Client relationships and workflow management': 'Quản lý quan hệ khách hàng và quy trình công việc',
  'Daily deli and food-service business operations': 'Vận hành hằng ngày cửa hàng đồ ăn và dịch vụ thực phẩm',
  'Staffing and workflow management': 'Quản lý nhân sự và quy trình làm việc',
  'Menu planning and design': 'Lập kế hoạch và thiết kế thực đơn',
  'Purchasing, vendor coordination, and inventory control': 'Mua hàng, phối hợp nhà cung cấp và kiểm soát tồn kho',
  'Mobile personal-training business operations': 'Vận hành dịch vụ huấn luyện cá nhân lưu động',
  'Client acquisition, scheduling, and retention': 'Thu hút khách hàng, xếp lịch và duy trì khách hàng',
  'Service planning and customer relations': 'Lập kế hoạch dịch vụ và quan hệ khách hàng',
  'Bachelor of Arts in Computing and Informatics': 'Cử nhân Nghệ thuật ngành Điện toán và Tin học',
  'Associate of Science in Computer Science': 'Cao đẳng Khoa học ngành Khoa học Máy tính',
  'Automotive Technician Certificate': 'Chứng chỉ Kỹ thuật viên Ô tô',
  'Spring 2023 commencement': 'Lễ tốt nghiệp mùa xuân 2023',
  'Dean’s List — Fall 2021 and Spring 2022': 'Danh sách Dean — mùa thu 2021 và mùa xuân 2022',
  'President’s List — Fall 2022': 'Danh sách President — mùa thu 2022',
  '4.0 final semester': 'Điểm 4.0 trong học kỳ cuối',
  'Minor in Computer Science': 'Ngành phụ Khoa học Máy tính',
  'Dean’s List — Spring 2020': 'Danh sách Dean — mùa xuân 2020',
  '4.0 Spring 2020 semester': 'Điểm 4.0 trong học kỳ mùa xuân 2020',
  'High Honors': 'Danh dự cao',
  'Lincoln Tech Race Team': 'Đội đua Lincoln Tech',
  '120-Hour Premier TEFL / TESOL Course': 'Khóa TEFL / TESOL Premier 120 giờ',
  'Successfully completed and passed the 120-hour Premier TEFL course':
    'Đã hoàn thành và đạt khóa TEFL Premier 120 giờ',
  '50-hour TEFL, 30-hour Grammar & Language Awareness, 20-hour Video Observation, 10-hour Teaching Online, and 10-hour Teaching Large Classes':
    '50 giờ TEFL, 30 giờ Ngữ pháp & Nhận thức Ngôn ngữ, 20 giờ Quan sát Video, 10 giờ Dạy Trực tuyến và 10 giờ Dạy Lớp Đông',
  'Master Gardener Program': 'Chương trình Master Gardener',
  Completed: 'Đã hoàn thành',
  'Completed Master Gardener training program': 'Đã hoàn thành chương trình đào tạo Master Gardener',
  'ASE Certifications & Current Designations': 'Chứng chỉ ASE & Danh hiệu hiện tại',
  'Current ASE designations — Automobile Technician; Maintenance and Light Repair Technician; Advanced Level Specialist':
    'Danh hiệu ASE hiện tại — Kỹ thuật viên Ô tô; Kỹ thuật viên Bảo dưỡng và Sửa chữa Nhẹ; Chuyên gia Cấp cao',
  'Audi Academy Technician Certifications': 'Chứng chỉ Kỹ thuật viên Audi Academy',
  'Inventor for Beginners': 'Inventor cho người mới bắt đầu',
  'Personal Fitness Trainer Certification': 'Chứng chỉ Huấn luyện viên Thể hình Cá nhân',
  'Previously certified; credential expired October 1, 2019': 'Đã từng được chứng nhận; chứng chỉ hết hạn ngày 1/10/2019',
  'BMW Body Electronics IV': 'BMW Body Electronics IV',
  'Completed 16 hours of technical training in BMW body electronics': 'Đã hoàn thành 16 giờ đào tạo kỹ thuật về điện thân xe BMW',
  'View current ASE status': 'Xem trạng thái ASE hiện tại',
  'View A8 recertification report': 'Xem báo cáo tái chứng nhận A8',
  'View L1 examination report': 'Xem báo cáo kỳ thi L1',
  'View 2015 Service Technician certificate': 'Xem chứng chỉ Kỹ thuật viên Dịch vụ 2015',
  'View 2018 Technician — Registered certificate': 'Xem chứng chỉ Kỹ thuật viên — Đăng ký 2018',
  'View certificate': 'Xem chứng chỉ',
  'View record': 'Xem hồ sơ',
  'View degree': 'Xem bằng cấp',
  'Download certificate PDF': 'Tải PDF chứng chỉ',
  'Download redacted PDF': 'Tải PDF đã ẩn thông tin',
  'Download PDF': 'Tải PDF',
  'Proof of Honorable Service': 'Bằng chứng phục vụ danh dự',
  'View proof of service': 'Xem bằng chứng phục vụ',
  'Avionics Mechanic (68N10)': 'Thợ máy điện tử hàng không (68N10)',
  'Army National Guard': 'Vệ binh Quốc gia Lục quân',
  'Trained in and performed electrical wiring diagnosis and repair on helicopter systems.':
    'Được đào tạo và thực hiện chẩn đoán, sửa chữa hệ thống dây điện trên trực thăng.',
  Teaching: 'Giảng dạy',
  'Programming & Software Development': 'Lập trình & Phát triển Phần mềm',
  'Computer Science Foundations': 'Nền tảng Khoa học Máy tính',
  Languages: 'Ngôn ngữ lập trình',
  Frameworks: 'Framework',
  Databases: 'Cơ sở dữ liệu',
  Tools: 'Công cụ',
  Platforms: 'Nền tảng',
  'AI Tools': 'Công cụ AI',
  'IT Support & Systems': 'Hỗ trợ CNTT & Hệ thống',
  'CAD & Technical Design': 'CAD & Thiết kế Kỹ thuật',
  Automotive: 'Ô tô',
  'Additional Expertise': 'Chuyên môn bổ sung',
  'Knowledge & Analytical': 'Kiến thức & Phân tích',
  'Practical & Hands-On': 'Thực hành & Kỹ năng trực tiếp',
  'Classroom/lab management': 'Quản lý lớp học/phòng thực hành',
  'Curriculum delivery': 'Triển khai chương trình giảng dạy',
  'Lesson planning': 'Lập kế hoạch bài học',
  'Student engagement': 'Tương tác với sinh viên',
  'Assessment/grading': 'Đánh giá/chấm điểm',
  'Coaching/mentoring': 'Huấn luyện/cố vấn',
  Safety: 'An toàn',
  'Differentiated instruction': 'Giảng dạy phân hóa',
  'Object-oriented programming': 'Lập trình hướng đối tượng',
  'Data structures and algorithms': 'Cấu trúc dữ liệu và thuật toán',
  'Database systems': 'Hệ quản trị cơ sở dữ liệu',
  'Computer networks and data communications': 'Mạng máy tính và truyền thông dữ liệu',
  'Information security': 'An toàn thông tin',
  'Human-computer interaction': 'Tương tác người-máy',
  'Web development': 'Phát triển web',
  'Computer organization': 'Tổ chức máy tính',
  'Computer architecture and assembly language': 'Kiến trúc máy tính và hợp ngữ',
  'Computer logic and design': 'Logic và thiết kế máy tính',
  'Operating systems': 'Hệ điều hành',
  'Systems analysis and design': 'Phân tích và thiết kế hệ thống',
  'Software project development': 'Phát triển dự án phần mềm',
  'Programming language concepts': 'Khái niệm ngôn ngữ lập trình',
  'Scientific programming': 'Lập trình khoa học',
  'Workstation imaging and deployment': 'Tạo image và triển khai máy trạm',
  'Application packaging and software deployment': 'Đóng gói ứng dụng và triển khai phần mềm',
  'Endpoint administration and asset tracking': 'Quản trị thiết bị đầu cuối và theo dõi tài sản',
  'Peripheral installation and support': 'Cài đặt và hỗ trợ thiết bị ngoại vi',
  'Desktop and laptop diagnosis, repair, and hardware upgrades': 'Chẩn đoán, sửa chữa và nâng cấp phần cứng máy bàn/laptop',
  'Custom PC builds and hardware modifications': 'Lắp ráp PC tùy chỉnh và chỉnh sửa phần cứng',
  'Operating-system and software installation, configuration, and permissions management': 'Cài đặt, cấu hình hệ điều hành/phần mềm và quản lý quyền',
  'Residential network installation and upgrades': 'Lắp đặt và nâng cấp mạng gia đình',
  'Wired and wireless network diagnosis, repair, and management': 'Chẩn đoán, sửa chữa và quản lý mạng có dây/không dây',
  'Linux server administration': 'Quản trị máy chủ Linux',
  'Operating-system migrations': 'Di chuyển hệ điều hành',
  'Dockerized environment administration and troubleshooting': 'Quản trị và xử lý sự cố môi trường Docker',
  'Encryption compliance and IT audit remediation': 'Tuân thủ mã hóa và khắc phục sau kiểm toán CNTT',
  'Vulnerability scanning and secure deployment workflows': 'Quét lỗ hổng và quy trình triển khai an toàn',
  'Parametric 3D modeling': 'Mô hình 3D tham số',
  'Assembly design': 'Thiết kế lắp ráp',
  'Engineering graphics': 'Đồ họa kỹ thuật',
  'Production-ready 2D drawings': 'Bản vẽ 2D sẵn sàng cho sản xuất',
  'Advanced diagnostics': 'Chẩn đoán nâng cao',
  'Electrical and electronic systems': 'Hệ thống điện và điện tử',
  'Wiring diagnosis and repair': 'Chẩn đoán và sửa chữa dây điện',
  'Hybrid vehicle systems': 'Hệ thống xe hybrid',
  'Engine performance': 'Hiệu suất động cơ',
  'Drivability diagnostics': 'Chẩn đoán khả năng vận hành',
  'Fuel and ignition systems': 'Hệ thống nhiên liệu và đánh lửa',
  'Brake systems': 'Hệ thống phanh',
  'Steering and suspension': 'Hệ thống lái và treo',
  'Heating and air conditioning': 'Sưởi và điều hòa',
  'Scan-tool diagnostics': 'Chẩn đoán bằng máy quét',
  'Oscilloscope and waveform analysis': 'Phân tích dao động ký và dạng sóng',
  'Compression testing': 'Kiểm tra áp suất nén',
  'Fuel-injector testing': 'Kiểm tra kim phun nhiên liệu',
  'Residual fuel-pressure testing': 'Kiểm tra áp suất nhiên liệu còn lại',
  'Preventive maintenance': 'Bảo dưỡng phòng ngừa',
  'Shop safety and procedures': 'An toàn và quy trình xưởng',
  'Automotive technical instruction': 'Giảng dạy kỹ thuật ô tô',
  'Oceanography and marine science fundamentals': 'Nền tảng hải dương học và khoa học biển',
  'Geometry, trigonometry, and calculus': 'Hình học, lượng giác và giải tích',
  'Physics and mechanical principles': 'Vật lý và nguyên lý cơ học',
  'Economics and analytical reasoning': 'Kinh tế học và tư duy phân tích',
  'Psychology and human behavior fundamentals': 'Nền tảng tâm lý học và hành vi con người',
  'Research writing and composition': 'Viết nghiên cứu và biên soạn',
  'Technical documentation and procedure development': 'Tài liệu kỹ thuật và xây dựng quy trình',
  'Diagnostic reporting and workflow documentation': 'Báo cáo chẩn đoán và tài liệu quy trình công việc',
  'History and global studies': 'Lịch sử và nghiên cứu toàn cầu',
  'Team leadership and mentoring': 'Lãnh đạo nhóm và cố vấn',
  'Construction, maintenance, and hands-on problem-solving': 'Xây dựng, bảo trì và giải quyết vấn đề thực tế',
  'Residential framing': 'Đóng khung nhà ở',
  'High- and low-voltage electrical installation and trim-out': 'Lắp đặt và hoàn thiện điện cao áp/hạ áp',
  'Helicopter avionics electrical wiring diagnosis and repair': 'Chẩn đoán và sửa chữa dây điện điện tử hàng không trực thăng',
  'Shop and lab setup, organization, and equipment maintenance': 'Thiết lập, tổ chức xưởng/phòng thực hành và bảo trì thiết bị',
  'Multi-station shop and lab workflow coordination': 'Điều phối quy trình nhiều trạm trong xưởng/phòng thực hành',
  'Window and door installation': 'Lắp đặt cửa sổ và cửa ra vào',
  'Landscaping and garden design': 'Thiết kế cảnh quan và sân vườn',
  'Planting, cultivation, and harvesting': 'Trồng, chăm sóc và thu hoạch',
  'Landscape site and grounds maintenance': 'Bảo trì cảnh quan và khuôn viên',
  'Seasonal landscape maintenance': 'Bảo trì cảnh quan theo mùa',
  'Commercial-vehicle detailing, including dump-truck cleaning and polishing': 'Chăm sóc xe thương mại, bao gồm vệ sinh và đánh bóng xe ben',
  'Tool and equipment operation': 'Vận hành dụng cụ và thiết bị',
  'Cooking, food preparation, and production': 'Nấu ăn, sơ chế và sản xuất thực phẩm',
  'Commercial kitchen cleaning and sanitation': 'Vệ sinh và khử trùng bếp thương mại',
  'Table service and customer care': 'Phục vụ bàn và chăm sóc khách hàng',
  'Personal training, coaching, and motivation': 'Huấn luyện cá nhân, hướng dẫn và tạo động lực',
  'First aid and CPR fundamentals': 'Nền tảng sơ cứu và CPR',
  'Workplace safety and compliance': 'An toàn nơi làm việc và tuân thủ',
  'Reach out at': 'Liên hệ qua',
  'Built with React + Tailwind CSS': 'Xây dựng bằng React + Tailwind CSS',
  'Close credential document': 'Đóng tài liệu chứng chỉ',
}

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim()

export const translateText = (language: Language, value: string): string => {
  if (language === 'en' || !value) return value

  const leading = value.match(/^\s*/)?.[0] ?? ''
  const trailing = value.match(/\s*$/)?.[0] ?? ''
  const key = normalize(value)
  const translated = vietnamese[key]

  return translated ? `${leading}${translated}${trailing}` : value
}

export const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'

  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (queryLanguage === 'en' || queryLanguage === 'vi') return queryLanguage

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'vi') return saved
  } catch {
    // Browsing contexts with blocked storage still get browser-language detection.
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return languages.some((value) => value?.toLowerCase().startsWith('vi')) ? 'vi' : 'en'
}

export const persistLanguage = (language: Language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Language switching still works for the current session if storage is unavailable.
  }
}
