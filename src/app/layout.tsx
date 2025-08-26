import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "./_components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title:
    "‏‎+966 50 114 4066‎‏ -شركة امكو - تنظيف منازل فلل شقق نقل اثاث عفش عزل ",
  description:
    "شركة اسادكو المتحدة افضل شركة تنظيف منازل و نقل اثاث و عفش بالرياض مع ضمان الفك والتركيب كما انها تعد من ارخص شركات النظافة و النقل المنزلي المكتبي او العفش وفي مجال خدمات تاثيث العقارات او العقار او المباني العقاريه سوى مبنى عقاري او مجموعة عقارات او منزل سكني او عقار تجاري او حكومي . بواسطة فريق عمل متخصص محترف او عدة فرق اعمال متخصصه و محترفه في العناية بتقديم الخدمات و تقديم خدمة غسيل المبنى او المنزل السكني او التجاري او الحكومي حيث تقدم جميع خدمات المباني المنزليه و السكنيه و التجاريه و الحكومية وذلك في مجال نظافة و نقل الأثاث وتشمل التالي:- ( مباني منزلية او سكنية قصر قصور حكومية عماره عمائر تجارية غسيل فيلا فلل شقه شقق بيت بيوت مكتب مكاتب معرض معارض صالة صالات رياضيه غرفة غرف دورة دورات مياه حمامات صالون صالونات مجلس مجالس كنب سجاد موكيت ستائر فرش ابواب بوابه بوابات شباك شبابيك حاط جدران نعله نعلات افياش ديكور ديكورات جبس ترويبه اسمنت طرطشه غراء قاعه كوفي شوب تلميع جلي رخام جرانيت درج سيراميك بلاط ارضيه ارضيات الارضيات سلم سلالم ممر ممرات الممرات سطح سطوح سقف اسقف منور سكاي لايت قبه ثريا ثريات ثيل انجيله مسطحات خضراء حوش ملاعب ملعب عزل خزان خزانات الخزانات مكيف مطبخ مطابخ مطعم مطاعم واجهة زجاج واجهات زجاجية حجرية الواجهات الزجاجية تركيب شبك حمام صيانة مكيف شباكي مكيفات اسبلت تكييف مركزي تكييفات مركزية إزالة ترحيل مخلفات او المخلفات او الاستكرات استكرات الشبابيك تعقيم مكافحة حشرات الحشرات رش مبيد حشري المبيدات مبيدات حشريه دفان مع التعقيم وذلك على اعلى معايير الجودة وبواسطة احدث مواد المواد ذات الفعالية العالية و المعدات العالمية وتعد اسادكو من ارقى الشركات بالعاصمه الرياض والمملكه",
  keywords:
    "تنظيف الفلل, تنظيف المنازل, خدمات تنظيف, تنظيف واجهات, تنظيف خزانات, تنظيف شقق, تنظيف كنب, تنظيف سجاد, تنظيف موكيت, تنظيف مطابخ, نقل أثاث بالرياض, نقل عفش بالرياض, مكافحة حشرات, رش مبيدات, عزل خزانات, غسيل كنب, صيانة مكيفات, تنظيف واجهات مباني, صيانة منزلية, خدمات تنظيف بالرياض,تنظيف المنازل في السعودية,شركة تنظيف بالرياض السعودية,تنظيف فلل السعودية,تنظيف شقق في السعودية,نقل أثاث في السعودية,مكافحة حشرات السعودية,عزل خزانات في السعودية,نقل عفش السعودية",
  author: "شـركـة آمـكـو النموذجية",
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title:
      "شركة امكو - تنظيف منازل نظافة فلل غسيل شقق نقل اثاث عفش - عزل خزان ‏‎+966 50 114 4066‎‏",
    description:
      "شركة تنظيف منازل منزل بالرياض نظافة فلل فيلا شقق شقه واجهة مبنى واجهات مباني عماره عمائر مكتب مكاتب معرض معارض مطعم مطبخ غسيل مجلس مجالس كنب سجاد موكيت عزل خزان خزانات نقل اثاث الاثاث عفش العفش صيانة مكيف مكيفات رش مبيد مبيدات تعقيم مكافحة حشرات بالرياض الرياض",
    url: "https://www.amcoksa.com",
    siteName: "شـركـة آمـكـو النموذجية",
    images: [
      {
        url: "https://www.amcoksa.com/logo/logo.png",
        width: 800,
        height: 600,
        alt: "شـركـة آمـكـو النموذجية",
      },
    ],
    videos: [
      {
        url: "https://www.amcoksa.com/videos/main-video.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو رئيسي من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-1.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 1 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-2.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 2 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-3.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 3 من شركة آمكو النموذجية",
      },
      {
        url: "https://www.amcoksa.com/videos/video-4.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
        alt: "فيديو 4 من شركة آمكو النموذجية",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amcoksa",
    creator: "@amkoksa",
    videos: [
      {
        url: "https://www.amcoksa.com/videos/main-video.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="sba9tCIoW2AoAikPfDaIj6YWxzI8rmBD-Hpwroi3450"
        />

        {/* Add preconnect for performance */}
        <link rel="preconnect" href="https://www.amcoksa.com" />
        <link rel="dns-prefetch" href="https://www.amcoksa.com" />

        {/* Add preload for critical resources */}
        <link
          rel="preload"
          as="image"
          href="/logo/logo.png"
          type="image/png"
          fetchPriority="high"
        />

        {/* Add preload for logo images */}
        <link
          rel="preload"
          as="image"
          href="/images/saudi-man.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />

        <meta
          property="og:image"
          content="https://amcoksa.com/images/saudi-man.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Schema markup */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "شركة آمـكـو النموذجية",
      "url": "https://www.amcoksa.com",
      "logo": "https://amcoksa.com/images/saudi-man.jpg",
   "sameAs": [
  "https://x.com/asad_companySA",
  "https://www.tiktok.com/@asadunitedco",
  "https://www.instagram.com/AsadUnitedCoSA/",
  "https://www.snapchat.com/add/sh-iz1?invite_id=55IfyKbg&locale=ar_SA%40calendar%3Dgregorian&share_id=mJQrd00dSoqbG33alWvAEA&sid=a124c58240ab4926ace691d736404c89",
  "https://www.youtube.com/@AsadUnitedCoSA"
  ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501144066",
        "contactType": "Customer Service",
        "areaServed": "SA",
        "availableLanguage": "Arabic"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      }
    }
  `}
        </script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="font-almarai">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
