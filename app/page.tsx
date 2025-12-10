"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Chip,
  Button,
} from "@nextui-org/react";
import ScrollToTop from "@/components/ScrollToTop";

type Language = "vi" | "en";

interface Section {
  title: { vi: string; en: string };
  icon: string;
  color: string;
  content: { vi: string[]; en: string[] };
}

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<Language>("vi");

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const translations = {
    vi: {
      header: "Chính Sách Bảo Mật",
      subtitle: "Quyền riêng tư của bạn quan trọng với chúng tôi",
      effectiveDate: "Hiệu lực: 10/12/2025",
      downloadPDF: "Tải PDF",
      mainTitle: "Chính Sách Bảo Mật",
      lastUpdated: "Cập nhật lần cuối: 10/12/2025",
      introduction: "Chào mừng bạn đến với chính sách bảo mật của chúng tôi. Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Tài liệu này giải thích cách chúng tôi thu thập, sử dụng, và bảo vệ thông tin của bạn theo các tiêu chuẩn quốc tế như GDPR và CCPA.",
      security: "Bảo mật",
      transparency: "Minh bạch",
      privacy: "Quyền riêng tư",
      compliance: "Tuân thủ",
      contactTitle: "Liên Hệ Với Chúng Tôi",
      contactSubtitle: "Chúng tôi luôn sẵn sàng hỗ trợ bạn",
      contactDescription: "Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc cách chúng tôi xử lý dữ liệu của bạn, vui lòng liên hệ với chúng tôi qua các kênh sau:",
      email: "Email",
      hotline: "Hotline",
      workingHours: "Giờ làm việc",
      weekdays: "Thứ 2 - Thứ 6: 9:00 - 18:00",
      saturday: "Thứ 7: 9:00 - 12:00",
      footerCompany: "Cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn theo các tiêu chuẩn quốc tế.",
      quickLinks: "Liên kết nhanh",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      gdprCompliance: "GDPR Compliance",
      dataRequest: "Data Request",
      complianceTitle: "Tuân thủ",
      multilingualSupport: "Multilingual Support",
      sslEncrypted: "SSL Encrypted",
      copyright: "© 2025 Privacy Policy. All rights reserved.",
      poweredBy: "Powered by",
    },
    en: {
      header: "Privacy Policy",
      subtitle: "Your privacy matters to us",
      effectiveDate: "Effective: 10/12/2025",
      downloadPDF: "Download PDF",
      mainTitle: "Privacy Policy",
      lastUpdated: "Last Updated: 10/12/2025",
      introduction: "Welcome to our privacy policy. We are committed to protecting your privacy and personal data. This document explains how we collect, use, and protect your information according to international standards such as GDPR and CCPA.",
      security: "Security",
      transparency: "Transparency",
      privacy: "Privacy",
      compliance: "Compliance",
      contactTitle: "Contact Us",
      contactSubtitle: "We're always here to help",
      contactDescription: "If you have any questions about this privacy policy or how we handle your data, please contact us through the following channels:",
      email: "Email",
      hotline: "Hotline",
      workingHours: "Working Hours",
      weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
      saturday: "Sat: 9:00 AM - 12:00 PM",
      footerCompany: "Committed to protecting your privacy and personal data according to international standards.",
      quickLinks: "Quick Links",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      gdprCompliance: "GDPR Compliance",
      dataRequest: "Data Request",
      complianceTitle: "Compliance",
      multilingualSupport: "Multilingual Support",
      sslEncrypted: "SSL Encrypted",
      copyright: "© 2025 Privacy Policy. All rights reserved.",
      poweredBy: "Powered by",
    },
  };

  const t = translations[language];

  const sections: Section[] = [
    {
      title: {
        vi: "1. Thông Tin Chúng Tôi Thu Thập",
        en: "1. Information We Collect",
      },
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      content: {
        vi: [
          "Chúng tôi có thể thu thập các loại thông tin sau:",
          "• Thông tin cá nhân: Tên, địa chỉ email, số điện thoại khi bạn tự nguyện cung cấp",
          "• Thông tin kỹ thuật: Địa chỉ IP, loại trình duyệt, hệ điều hành",
          "• Dữ liệu sử dụng: Cách bạn tương tác với dịch vụ của chúng tôi",
          "• Thông tin thiết bị: Model thiết bị, hệ điều hành, định danh duy nhất",
        ],
        en: [
          "We may collect the following types of information:",
          "• Personal information: Name, email address, phone number when you voluntarily provide",
          "• Technical information: IP address, browser type, operating system",
          "• Usage data: How you interact with our services",
          "• Device information: Device model, operating system, unique identifiers",
        ],
      },
    },
    {
      title: {
        vi: "2. Cách Chúng Tôi Sử Dụng Thông Tin",
        en: "2. How We Use Information",
      },
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      content: {
        vi: [
          "Thông tin của bạn được sử dụng để:",
          "• Cung cấp và cải thiện dịch vụ của chúng tôi",
          "• Giao tiếp với bạn về cập nhật và thay đổi",
          "• Phân tích và hiểu cách người dùng sử dụng dịch vụ",
          "• Bảo vệ chống lại gian lận và lạm dụng",
          "• Cá nhân hóa trải nghiệm người dùng",
        ],
        en: [
          "Your information is used to:",
          "• Provide and improve our services",
          "• Communicate with you about updates and changes",
          "• Analyze and understand how users use our services",
          "• Protect against fraud and abuse",
          "• Personalize user experience",
        ],
      },
    },
    {
      title: {
        vi: "3. Chia Sẻ Thông Tin",
        en: "3. Information Sharing",
      },
      icon: "🤝",
      color: "from-green-500 to-emerald-500",
      content: {
        vi: [
          "Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp:",
          "• Với sự đồng ý của bạn",
          "• Với các nhà cung cấp dịch vụ đáng tin cậy",
          "• Khi pháp luật yêu cầu",
          "• Để bảo vệ quyền và an toàn của chúng tôi",
          "• Trong các giao dịch kinh doanh (sáp nhập, mua bán)",
        ],
        en: [
          "We do not sell your personal information. We only share information in the following cases:",
          "• With your consent",
          "• With trusted service providers",
          "• When required by law",
          "• To protect our rights and safety",
          "• In business transactions (mergers, acquisitions)",
        ],
      },
    },
    {
      title: {
        vi: "4. Bảo Mật Dữ Liệu",
        en: "4. Data Security",
      },
      icon: "🔐",
      color: "from-red-500 to-orange-500",
      content: {
        vi: [
          "Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ thông tin của bạn:",
          "• Mã hóa dữ liệu trong quá trình truyền tải (SSL/TLS)",
          "• Kiểm soát truy cập nghiêm ngặt",
          "• Thường xuyên cập nhật các biện pháp bảo mật",
          "• Giám sát hoạt động bất thường 24/7",
          "• Backup dữ liệu định kỳ",
        ],
        en: [
          "We take reasonable security measures to protect your information:",
          "• Data encryption during transmission (SSL/TLS)",
          "• Strict access controls",
          "• Regularly updating security measures",
          "• 24/7 monitoring for unusual activity",
          "• Regular data backups",
        ],
      },
    },
    {
      title: {
        vi: "5. Quyền Của Bạn",
        en: "5. Your Rights",
      },
      icon: "⚖️",
      color: "from-indigo-500 to-blue-500",
      content: {
        vi: [
          "Bạn có các quyền sau đối với thông tin cá nhân của mình:",
          "• Quyền truy cập và xem thông tin",
          "• Quyền chỉnh sửa hoặc cập nhật thông tin",
          "• Quyền xóa thông tin (Right to be forgotten)",
          "• Quyền phản đối việc xử lý dữ liệu",
          "• Quyền chuyển dữ liệu (Data portability)",
          "• Quyền rút lại sự đồng ý bất cứ lúc nào",
        ],
        en: [
          "You have the following rights regarding your personal information:",
          "• Right to access and view information",
          "• Right to edit or update information",
          "• Right to delete information (Right to be forgotten)",
          "• Right to object to data processing",
          "• Right to data portability",
          "• Right to withdraw consent at any time",
        ],
      },
    },
    {
      title: {
        vi: "6. Cookies và Công Nghệ Theo Dõi",
        en: "6. Cookies and Tracking Technologies",
      },
      icon: "🍪",
      color: "from-yellow-500 to-amber-500",
      content: {
        vi: [
          "Chúng tôi sử dụng cookies và công nghệ tương tự để:",
          "• Ghi nhớ tùy chọn của bạn",
          "• Phân tích lưu lượng truy cập",
          "• Cải thiện trải nghiệm người dùng",
          "• Cung cấp quảng cáo có liên quan",
          "Bạn có thể quản lý cookies thông qua cài đặt trình duyệt của mình.",
        ],
        en: [
          "We use cookies and similar technologies to:",
          "• Remember your preferences",
          "• Analyze traffic",
          "• Improve user experience",
          "• Provide relevant advertising",
          "You can manage cookies through your browser settings.",
        ],
      },
    },
    {
      title: {
        vi: "7. Dịch Vụ Của Bên Thứ Ba",
        en: "7. Third-Party Services",
      },
      icon: "🌐",
      color: "from-teal-500 to-cyan-500",
      content: {
        vi: [
          "Dịch vụ của chúng tôi có thể chứa liên kết đến các trang web của bên thứ ba.",
          "Chúng tôi không chịu trách nhiệm về chính sách bảo mật của các trang web này.",
          "Chúng tôi khuyến khích bạn đọc chính sách bảo mật của họ.",
          "• Google Analytics - Phân tích web",
          "• Cloudflare - Bảo mật và CDN",
          "• Stripe - Xử lý thanh toán",
        ],
        en: [
          "Our services may contain links to third-party websites.",
          "We are not responsible for the privacy policies of these websites.",
          "We encourage you to read their privacy policies.",
          "• Google Analytics - Web analytics",
          "• Cloudflare - Security and CDN",
          "• Stripe - Payment processing",
        ],
      },
    },
    {
      title: {
        vi: "8. Thay Đổi Chính Sách",
        en: "8. Policy Changes",
      },
      icon: "📝",
      color: "from-pink-500 to-rose-500",
      content: {
        vi: [
          "Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian.",
          "Các thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo trên dịch vụ.",
          "Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.",
          "• Lịch sử thay đổi được lưu trữ",
          "• Thông báo trước 30 ngày cho thay đổi lớn",
        ],
        en: [
          "We may update this privacy policy from time to time.",
          "Significant changes will be notified via email or service announcements.",
          "Continuing to use the service after changes means you accept the new policy.",
          "• Change history is stored",
          "• 30-day advance notice for major changes",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 transition-colors relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all border-b border-purple-100 dark:border-purple-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg relative group">
                <span className="text-white font-bold text-xl sm:text-2xl relative z-10">P</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity blur" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.header}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">{t.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <Button
                size="sm"
                color="default"
                variant="flat"
                onClick={toggleLanguage}
                className="font-semibold"
                startContent={<span>{language === "vi" ? "🇬🇧" : "🇻🇳"}</span>}
              >
                {language === "vi" ? "EN" : "VI"}
              </Button>
              <Chip color="success" variant="flat" size="sm" className="hidden sm:flex" startContent={<span>🗓️</span>}>
                {t.effectiveDate}
              </Chip>
              <Button
                size="sm"
                color="secondary"
                variant="flat"
                className="hidden md:flex"
                startContent={<span>📥</span>}
              >
                {t.downloadPDF}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl relative z-10">
        {/* Introduction */}
        <Card className="mb-8 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-purple-100 dark:border-purple-900/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-col gap-3 pb-4 p-6 relative z-10">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-col sm:flex-row">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0 relative">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-1">
                  {t.mainTitle}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span>📅</span>
                  {t.lastUpdated}
                </p>
              </div>
            </div>
          </CardHeader>
          <Divider className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20" />
          <CardBody className="gap-4 p-6 relative z-10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              {t.introduction}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              <div className="flex flex-col items-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                <span className="text-2xl mb-1">🔒</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.security}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                <span className="text-2xl mb-1">✨</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.transparency}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg">
                <span className="text-2xl mb-1">🛡️</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.privacy}</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                <span className="text-2xl mb-1">✅</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t.compliance}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Policy Sections */}
        <div className="grid gap-6 animate-in fade-in duration-700">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 group relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color} opacity-100 group-hover:w-2 transition-all duration-300`} />
              
              <CardHeader className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-900/30 dark:to-gray-800/30 pb-3 px-6 pt-4">
                <div className="flex items-center gap-3 w-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white flex-1">
                    {section.title[language]}
                  </h3>
                </div>
              </CardHeader>
              <Divider className="bg-gray-200 dark:bg-gray-700" />
              <CardBody className="p-6">
                <div className="space-y-3">
                  {section.content[language].map((paragraph, pIndex) => (
                    <div
                      key={pIndex}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed text-base flex items-start gap-2"
                    >
                      {paragraph.startsWith("•") ? (
                        <>
                          <span className="text-purple-500 mt-1">▸</span>
                          <span className="flex-1">{paragraph.substring(1).trim()}</span>
                        </>
                      ) : (
                        <p className="w-full">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-10 shadow-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white overflow-hidden relative group">
          <CardBody className="gap-6 p-8 sm:p-10 relative">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                  📞
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{t.contactTitle}</h3>
                  <p className="text-sm opacity-90">{t.contactSubtitle}</p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg opacity-90 mb-6">
                {t.contactDescription}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="mailto:privacy@example.com"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white transition-all flex items-center gap-3 group/link border border-white/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-2xl group-hover/link:scale-110 transition-transform">
                    📧
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-75">{t.email}</div>
                    <div className="font-semibold">privacy@example.com</div>
                  </div>
                </Link>
                
                <Link
                  href="tel:+84123456789"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white transition-all flex items-center gap-3 group/link border border-white/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-2xl group-hover/link:scale-110 transition-transform">
                    📱
                  </div>
                  <div className="flex-1">
                    <div className="text-xs opacity-75">{t.hotline}</div>
                    <div className="font-semibold">+84 123 456 789</div>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="font-semibold mb-1">{t.workingHours}</div>
                    <div className="text-sm opacity-90">{t.weekdays}</div>
                    <div className="text-sm opacity-90">{t.saturday}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg mt-16 border-t border-purple-100 dark:border-purple-900/50 relative">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="font-bold text-gray-800 dark:text-white">Privacy Policy</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.footerCompany}
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-4">{t.quickLinks}</h4>
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>→</span> {t.termsOfService}
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>→</span> {t.cookiePolicy}
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>→</span> {t.gdprCompliance}
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>→</span> {t.dataRequest}
                </Link>
              </div>
            </div>
            
            {/* Compliance Badges */}
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-4">{t.complianceTitle}</h4>
              <div className="flex flex-wrap gap-2">
                <Chip size="sm" color="success" variant="flat">GDPR</Chip>
                <Chip size="sm" color="primary" variant="flat">CCPA</Chip>
                <Chip size="sm" color="secondary" variant="flat">ISO 27001</Chip>
                <Chip size="sm" color="warning" variant="flat">SOC 2</Chip>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2 mb-2">
                  <span>🌐</span> {t.multilingualSupport}
                </p>
                <p className="flex items-center gap-2">
                  <span>🔐</span> {t.sslEncrypted}
                </p>
              </div>
            </div>
          </div>
          
          <Divider className="mb-6" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.copyright}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 dark:text-gray-500">{t.poweredBy}</span>
              <div className="flex gap-2">
                <Chip size="sm" variant="bordered">Next.js</Chip>
                <Chip size="sm" variant="bordered">NextUI</Chip>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
