# Jaya Laksana - Landing Page Design Specification

## 1. Project Overview

**Brand Name:** Jaya Laksana  
**Tagline:** Solusi Transportasi & Logistik Terpercaya di Jabodetabek  
**Industry:** Trucking, Loading/Unloading Services  
**Service Area:** Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)

---

## 2. Design Direction & Aesthetic

### Visual Style: Professional Industrial
- **Primary Color:** Deep Navy Blue (#1e3a5f) - Trust, reliability, professionalism
- **Secondary Color:** Vibrant Orange (#f97316) - Energy, action, visibility
- **Accent Color:** Slate Gray (#475569) - Industrial strength
- **Background:** White (#ffffff) with light gray (#f8fafc) surface variations
- **Text:** Dark Slate (#0f172a) for headings, Medium Slate (#334155) for body

### Design Characteristics
- **Bold Typography:** Strong, confident headlines with high readability
- **Geometric Shapes:** Sharp angles, structured layouts, grid-based design
- **High Contrast:** WCAG AA compliant for accessibility
- **Minimal but Impactful:** Clean, uncluttered with purposeful visual elements
- **Professional Iconography:** Industrial/transportation-themed icons

### Differentiator
- Interactive service calculator for instant quotes
- Real-time tracking visualization
- Animated logistics network map of Jabodetabek area

---

## 3. Design Token System

### Color Palette (CSS Variables)

```css
:root {
  /* Primary Colors - Navy Blue */
  --primary-50: #f0f4f8;
  --primary-100: #d9e2ec;
  --primary-200: #bcccdc;
  --primary-300: #9fb3c8;
  --primary-400: #829ab1;
  --primary-500: #627d98;
  --primary-600: #486581;
  --primary-700: #334e68;
  --primary-800: #243b53;
  --primary-900: #102a43;
  --primary-950: #1e3a5f; /* Main brand color */

  /* Secondary Colors - Orange */
  --secondary-50: #fff7ed;
  --secondary-100: #ffedd5;
  --secondary-200: #fed7aa;
  --secondary-300: #fdba74;
  --secondary-400: #fb923c;
  --secondary-500: #f97316; /* Main accent */
  --secondary-600: #ea580c;
  --secondary-700: #c2410c;
  --secondary-800: #9a3412;
  --secondary-900: #7c2d12;
  --secondary-950: #431407;

  /* Neutral Colors */
  --background: #ffffff;
  --surface: #f8fafc;
  --surface-elevated: #f1f5f9;
  --border: #e2e8f0;
  --border-subtle: #f1f5f9;

  /* Text Colors */
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #64748b;
  --text-inverse: #ffffff;

  /* Semantic Colors */
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --info: #3b82f6;
}
```

### Typography Scale

```css
:root {
  /* Font Family */
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Display - Hero Section */
  --font-size-display-sm: 2.5rem;  /* 40px */
  --font-size-display-md: 3rem;    /* 48px */
  --font-size-display-lg: 3.5rem;  /* 56px */
  --font-size-display-xl: 4rem;    /* 64px */

  /* Headings */
  --font-size-h1: 2.25rem;  /* 36px */
  --font-size-h2: 1.875rem; /* 30px */
  --font-size-h3: 1.5rem;   /* 24px */
  --font-size-h4: 1.25rem;  /* 20px */
  --font-size-h5: 1.125rem; /* 18px */
  --font-size-h6: 1rem;     /* 16px */

  /* Body */
  --font-size-body-lg: 1.125rem; /* 18px */
  --font-size-body-md: 1rem;     /* 16px */
  --font-size-body-sm: 0.875rem; /* 14px */

  /* Small */
  --font-size-small: 0.75rem; /* 12px */

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

### Spacing Scale (8px Base)

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-5: 1.25rem;  /* 20px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-10: 2.5rem;  /* 40px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
  --spacing-20: 5rem;    /* 80px */
  --spacing-24: 6rem;    /* 96px */
  --spacing-32: 8rem;    /* 128px */
}
```

### Radius Scale

```css
:root {
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}
```

### Shadow Scale

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Motion Tokens

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 220ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;

  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

---

## 4. Content Structure & Wireframe

### Section 1: Header/Navigation (Sticky)
**Location:** Top, sticky on scroll

**Desktop:**
- Left: Logo (Jaya Laksana - text + truck icon)
- Center: Navigation links (Beranda, Layanan, Area, Tentang Kami, Kontak)
- Right: CTA Button ("Minta Penawaran") + Phone Number

**Mobile:**
- Left: Logo
- Right: Hamburger menu (full-screen drawer)
- Mobile menu includes all nav links + phone + CTA

**Components:**
- Logo with truck/trailer icon
- Navigation links with hover underline animation
- Primary CTA button (orange, pill shape)
- Phone number clickable

---

### Section 2: Hero Section
**Layout:** Full viewport height (min-h-screen), split layout (desktop) / stacked (mobile)

**Content:**
- **Headline:** "Solusi Transportasi & Logistik Terpercaya untuk Bisnis Anda di Jabodetabek"
- **Subheadline:** "Jasa truk dan bongkar muat profesional dengan fleksibilitas tinggi, harga kompetitif, dan pelayanan 24/7"
- **CTA Buttons:**
  - Primary: "Minta Penawaran Gratis" (orange, large)
  - Secondary: "Hubungi Kami" (outline, navy)
- **Trust Indicators:**
  - "500+ Klien Puas"
  - "10+ Tahun Pengalaman"
  - "24/7 Layanan"
  - "Cakupan Jabodetabek Penuh"
- **Hero Image/Visual:**
  - Right side: High-quality truck fleet image or 3D illustration
  - Background: Subtle gradient overlay (navy to light blue)
  - Animated elements: Moving truck, delivery route lines

**Interactions:**
- Parallax effect on scroll
- Animated truck moving across route
- Button hover effects with scale and shadow
- Trust counter animation (counting up)

---

### Section 3: Services Overview
**Layout:** 4-column grid (desktop) / 2-column (tablet) / 1-column (mobile)

**Content:**
- **Section Title:** "Layanan Kami"
- **Section Subtitle:** "Solusi lengkap untuk kebutuhan transportasi dan logistik Anda"

**Service Cards (4 main services):**

1. **Trucking Services**
   - Icon: Truck icon
   - Title: "Armada Truk Lengkap"
   - Description: "Koleksi truk dari engkel hingga tronton, siap melayani berbagai jenis pengiriman barang"
   - Features list:
     - Engkel (CDE, CDD)
     - Double Engkel (Fuso)
     - Tronton (6 roda, 10 roda)
     - Pick-up & Box Van

2. **Loading/Unloading Services**
   - Icon: Box/lift icon
   - Title: "Bongkar Muat Profesional"
   - Description: "Tim terlatih dengan peralatan modern untuk penanganan barang aman dan efisien"
   - Features list:
     - Forklift operation
     - Manual loading team
     - Pallet handling
     - Fragile item care

3. **Warehousing**
   - Icon: Warehouse icon
   - Title: "Penyimpanan Barang"
   - Description: "Gudang aman dengan sistem manajemen stok modern dan keamanan 24 jam"
   - Features list:
     - Clean & dry storage
     - CCTV monitoring
     - Inventory management
     - Flexible terms

4. **Same-Day Delivery**
   - Icon: Clock/fast icon
   - Title: "Pengiriman Hari Sama"
   - Description: "Layanan ekspres untuk pengiriman mendesak dalam area Jabodetabek"
   - Features list:
     - Priority handling
     - Real-time tracking
     - GPS monitoring
     - Proof of delivery

**Interactions:**
- Card hover: lift up with shadow, border color change
- Icon animation on hover
- Feature items slide in on scroll

---

### Section 4: Why Choose Us
**Layout:** Alternating grid with icons/numbers (desktop) / stacked (mobile)

**Content:**
- **Section Title:** "Mengapa Memilih Jaya Laksana?"
- **Section Subtitle:** "Partner logistik yang mengerti kebutuhan bisnis Anda"

**Key Differentiators (6 points):**

1. **Pengalaman 10+ Tahun**
   - Icon: Calendar/badge
   - Description: "Ribuan pengiriman sukses dengan tingkat kepuasan 98%"

2. **Armada Terawat**
   - Icon: Shield/check
   - Description: "Perawatan rutin, asuransi lengkap, dan inspeksi berkala"

3. **Harga Kompetitif**
   - Icon: Price tag/dollar
   - Description: "Transparan, tanpa biaya tersembunyi, dengan penawaran fleksibel"

4. **Tim Profesional**
   - Icon: Users/team
   - Description: "Sopir berpengalaman dan tim bongkar muat terlatih"

5. **Layanan 24/7**
   - Icon: Clock/24h
   - Description: "Dukungan pelanggan dan tracking real-time setiap saat"

6. **Cakupan Penuh Jabodetabek**
   - Icon: Map/pin
   - Description: "Mengenal setiap rute dan area di Jabodetabek"

**Visual Element:**
- Large number/icon on left side
- Text on right side
- Alternating layout for visual interest
- Subtle background pattern (geometric shapes)

---

### Section 5: Service Process
**Layout:** Horizontal timeline (desktop) / vertical accordion (mobile)

**Content:**
- **Section Title:** "Cara Kerja Kami"
- **Section Subtitle:** "Proses sederhana dan transparan dari awal hingga selesai"

**Process Steps (5 steps):**

1. **Konsultasi & Penawaran**
   - Icon: Chat/phone
   - Description: "Hubungi kami, berikan detail kebutuhan, dapatkan penawaran instan"
   - Time: "5-10 menit"

2. **Konfirmasi & Jadwal**
   - Icon: Calendar/check
   - Description: "Konfirmasi detail, tetapkan jadwal penjemputan dan pengantaran"
   - Time: "30 menit - 2 jam"

3. **Penjemputan & Loading**
   - Icon: Truck/loading
   - Description: "Armada t tepat waktu, tim profesional memuat barang dengan aman"
   - Time: "Sesuai jadwal"

4. **Transportasi & Tracking**
   - Icon: Route/map
   - Description: "Pengiriman aman dengan pelacakan real-time selama perjalanan"
   - Time: "Sesuai jarak"

5. **Pengantaran & Validasi**
   - Icon: Check/delivery
   - Description: "Barang sampai dengan aman, serah terima dengan tanda terima resmi"
   - Time: "Selesai"

**Visual Element:**
- Connected timeline with dots
- Animated path line
- Each step expands on click (mobile)
- Progress indicator showing current step

---

### Section 6: Coverage Area
**Layout:** Map visualization + list grid (split layout)

**Content:**
- **Section Title:** "Area Layanan Kami"
- **Section Subtitle:** "Mencakup seluruh wilayah Jabodetabek dengan rute teroptimasi"

**Coverage List:**

**Jakarta:**
- Jakarta Pusat
- Jakarta Utara
- Jakarta Barat
- Jakarta Selatan
- Jakarta Timur

**Bogor:**
- Kota Bogor
- Kabupaten Bogor
- Sentul
- Cibinong
- Depok

**Depok:**
- Kota Depok
- Cimanggis
- Sawangan
- Cinere

**Tangerang:**
- Kota Tangerang
- Tangerang Selatan
- BSD City
- Gading Serpong
- Cikupa

**Bekasi:**
- Kota Bekasi
- Kabupaten Bekasi
- Cikarang
- Tambun
- Cibitung

**Visual Element:**
- Interactive map of Jabodetabek
- Highlighted service areas
- Animated delivery routes
- Hover effects on area names showing details

---

### Section 7: Testimonials
**Layout:** 3-column carousel (desktop) / 1-column slider (mobile)

**Content:**
- **Section Title:** "Apa Kata Klien Kami"
- **Section Subtitle:** "Kepercayaan klien adalah prioritas utama kami"

**Testimonial Cards (6 testimonials, showing 3 at a time):**

1. **PT. Maju Jaya Logistik**
   - "Layanan luar biasa! Armada selalu tepat waktu dan barang sampai dalam kondisi sempurna. Sudah 3 tahun bekerja sama."
   - Rating: 5/5 stars
   - Role: "Manager Operasional"
   - Industry: "FMCG"

2. **CV. Sejahtera Abadi**
   - "Harga sangat kompetitif dengan kualitas pelayanan premium. Tim bongkar muat sangat profesional dan teliti."
   - Rating: 5/5 stars
   - Role: "Direktur"
   - Industry: "Distributor"

3. **Tokopedia Logistic Partner**
   - "Respons cepat, tracking real-time, dan dukungan 24/7 membuat operasional kami jauh lebih efisien."
   - Rating: 5/5 stars
   - Role: "Head of Logistics"
   - Industry: "E-commerce"

4. **PT. Food Indonesia**
   - "Penanganan barang makanan sangat aman dengan suhu terjaga. Sangat direkomendasikan untuk produk perishable."
   - Rating: 5/5 stars
   - Role: "Supply Chain Manager"
   - Industry: "Food & Beverage"

5. **IndoBuild Mart**
   - "Armada tronton terawat dengan baik, mampu membawa muatan berat dengan aman. Pilihan terbaik untuk konstruksi."
   - Rating: 5/5 stars
   - Role: "Project Manager"
   - Industry: "Konstruksi"

6. **CV. Berkah Elektronik**
   - "Barang elektronik fragile ditangani dengan ekstra hati-hati. Nol kerusakan dalam 50+ pengiriman."
   - Rating: 5/5 stars
   - Role: "Owner"
   - Industry: "Elektronik"

**Visual Element:**
- Card design with quote icon
- Company logo placeholder
- Star rating display
- Auto-play carousel with manual controls
- Smooth slide transitions

---

### Section 8: FAQ (Frequently Asked Questions)
**Layout:** 2-column grid (desktop) / 1-column (mobile) with accordion

**Content:**
- **Section Title:** "Pertanyaan Sering Diajukan"
- **Section Subtitle:** "Jawaban untuk pertanyaan umum tentang layanan kami"

**FAQ Items (8 questions):**

1. **Berapa lama waktu yang dibutuhkan untuk pengiriman dalam Jabodetabek?**
   - "Untuk pengiriman reguler, waktu tempuh rata-rata 2-4 jam tergantung lokasi penjemputan dan tujuan. Layanan same-day delivery tersedia untuk pengiriman mendesak."

2. **Bagaimana cara menghitung harga pengiriman?**
   - "Harga dihitung berdasarkan jarak, jenis armada, berat/volume barang, dan jenis layanan (reguler/ekspres). Dapatkan penawaran gratis dengan menghubungi kami."

3. **Apakah barang diasuransikan selama pengiriman?**
   - "Ya, semua pengiriman dilindungi asuransi. Nilai pertanggungan dapat disesuaikan sesuai nilai barang Anda."

4. **Apakah melayani pengiriman di hari libur?**
   - "Ya, kami melayani pengiriman 7 hari seminggu termasuk hari libur nasional, dengan tambahan biaya layanan."

5. **Bagaimana sistem pembayaran yang tersedia?**
   - "Kami menerima transfer bank, e-wallet (OVO, GoPay, Dana), dan pembayaran tempo untuk klien korporat dengan syarat dan ketentuan berlaku."

6. **Apakah menyediakan layanan bongkar muat di lokasi tujuan?**
   - "Ya, tim bongkar muat kami tersedia untuk membantu di lokasi penjemputan maupun tujuan sesuai kebutuhan Anda."

7. **Bagaimana cara tracking pengiriman?**
   - "Anda akan menerima nomor resi yang dapat dilacak melalui website kami atau WhatsApp. Tim support kami juga dapat membantu tracking secara manual."

8. **Apakah ada minimum order untuk pengiriman?**
   - "Untuk armada engkel dan pick-up, minimum order 1 trip. Untuk armada besar, kami dapat mengkombinasikan beberapa tujuan dalam satu trip (LTL)."

**Visual Element:**
- Accordion style with smooth expand/collapse
- Icon indicates open/closed state
- Hover effect on closed items
- Active state highlighted with primary color

---

### Section 9: CTA Section
**Layout:** Full-width, centered content with gradient background

**Content:**
- **Headline:** "Siap Mengirim Barang Anda dengan Aman dan Tepat Waktu?"
- **Subheadline:** "Dapatkan penawaran gratis dalam 10 menit. Tim kami siap membantu kebutuhan logistik Anda."
- **CTA Buttons:**
  - Primary: "Hubungi Sekarang" (large, orange)
  - Secondary: "WhatsApp Chat" (with WhatsApp icon, green)
- **Contact Info:**
  - Phone: +62 812-3456-7890
  - Email: info@jayalaksana.co.id
  - Address: Jl. Logistik Raya No. 123, Jakarta Timur

**Visual Element:**
- Gradient background (navy to darker navy)
- Subtle pattern overlay (geometric shapes)
- Floating elements (small truck icons, boxes)
- High contrast for CTAs

---

### Section 10: Footer
**Layout:** 4-column grid (desktop) / 2-column (tablet) / 1-column (mobile)

**Content:**

**Column 1 - Brand Info:**
- Logo: Jaya Laksana
- Tagline: "Solusi Transportasi & Logistik Terpercaya di Jabodetabek"
- Short description: "Mitra logistik profesional dengan armada lengkap dan pelayanan 24/7"

**Column 2 - Quick Links:**
- Beranda
- Tentang Kami
- Layanan
- Area Layanan
- FAQ
- Kontak

**Column 3 - Services:**
- Trucking Services
- Loading/Unloading
- Warehousing
- Same-Day Delivery
- Corporate Logistics
- Last-Mile Delivery

**Column 4 - Contact Info:**
- Phone: +62 812-3456-7890
- Email: info@jayalaksana.co.id
- Address: Jl. Logistik Raya No. 123, Jakarta Timur 13450
- Social Media:
  - Instagram
  - Facebook
  - LinkedIn
  - YouTube

**Bottom Bar:**
- Copyright: © 2025 Jaya Laksana. All rights reserved.
- Legal: Privacy Policy | Terms of Service
- Badges: "Verified Business" | "Insured Fleet"

**Visual Element:**
- Dark background (primary-950)
- Light text
- Social icons with hover effect
- Sticky to bottom of page
- Respect safe area on mobile devices

---

## 5. SEO Optimization

### Meta Tags

```html
<title>Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana - Solusi Logistik Terpercaya</title>
<meta name="description" content="Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7. Minta penawaran gratis sekarang!">
<meta name="keywords" content="jasa truk jabodetabek, bongkar muat, sewa truk, logistik jakarta, trucking service, pengiriman barang, cargo jakarta, truk engkel, truk tronton">

<!-- Open Graph / Social -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://jayalaksana.co.id/">
<meta property="og:title" content="Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana">
<meta property="og:description" content="Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7.">
<meta property="og:image" content="https://jayalaksana.co.id/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Jasa Truk & Bongkar Muat Jabodetabek | Jaya Laksana">
<meta name="twitter:description" content="Jasa truk dan bongkar muat profesional di Jabodetabek. Armada lengkap, harga kompetitif, layanan 24/7.">
```

### Target Keywords

**Primary Keywords:**
- Jasa truk Jabodetabek
- Bongkar muat Jakarta
- Sewa truk logistik
- Trucking service Jabodetabek
- Pengiriman barang Jakarta

**Secondary Keywords:**
- Jasa angkut barang
- Truk engkel sewa
- Truk tronton Jakarta
- Jasa pindahan
- Cargo murah Jabodetabek
- Same-day delivery Jakarta

**Long-tail Keywords:**
- Jasa truk dan bongkar muat terpercaya di Jakarta
- Sewa truk engkel untuk pindahan rumah
- Jasa logistik perusahaan di Bekasi
- Harga sewa truk tronton harian
- Jasa pengiriman barang cepat Jabodetabek

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jaya Laksana",
  "image": "https://jayalaksana.co.id/logo.png",
  "description": "Jasa truk dan bongkar muat profesional di Jabodetabek",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Logistik Raya No. 123",
    "addressLocality": "Jakarta Timur",
    "addressRegion": "DKI Jakarta",
    "postalCode": "13450",
    "addressCountry": "ID"
  },
  "telephone": "+6281234567890",
  "email": "info@jayalaksana.co.id",
  "url": "https://jayalaksana.co.id",
  "priceRange": "Rp500.000 - Rp5.000.000",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    "Jakarta",
    "Bogor",
    "Depok",
    "Tangerang",
    "Bekasi"
  ],
  "serviceType": [
    "Trucking",
    "Loading/Unloading",
    "Warehousing",
    "Logistics"
  ]
}
```

### Technical SEO Requirements

1. **Semantic HTML:** Use proper heading hierarchy (H1 → H2 → H3)
2. **Alt Text:** All images have descriptive alt text
3. **Internal Links:** Link between sections with anchor links
4. **Mobile Optimization:** Fully responsive with touch-friendly targets (44px+)
5. **Page Speed:**
   - Lazy load images below fold
   - Optimize images (WebP format)
   - Minify CSS/JS
   - Use system fonts or subset web fonts
6. **Core Web Vitals:**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

---

## 6. Responsive Design Breakpoints

### Mobile (Portrait) - 375px - 639px
- Single column layout
- Stacked sections
- Full-width buttons
- Hamburger menu
- Bottom spacing for thumb zone
- Touch targets min 44px

### Mobile (Landscape) - 640px - 767px
- 2-column grid for services
- Horizontal scrolling for testimonials
- Tablet-optimized navigation
- Increased spacing

### Tablet - 768px - 1023px
- 2-3 column grids
- Tabbed navigation for mobile menu
- Larger touch targets (48px)
- Optimized image sizes

### Desktop - 1024px - 1279px
- 3-4 column grids
- Full navigation
- Hover interactions
- Max-width containers (1200px)

### Large Desktop - 1280px+
- 4+ column grids
- Enhanced animations
- Larger typography
- Wider containers (1400px)

---

## 7. Accessibility Requirements

### WCAG AA Compliance

**Color Contrast:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Tab order follows visual flow
- Focus indicators always visible
- Skip to main content link

**ARIA Labels:**
- Icon-only buttons have aria-label
- Modal dialogs properly labeled
- Form inputs have associated labels
- Live regions for dynamic content

**Screen Reader Support:**
- Semantic HTML (main, nav, section, article)
- Alt text for all images
- Heading hierarchy logical
- Lists properly marked up

**Reduced Motion:**
- Respect `prefers-reduced-motion`
- Provide non-animated alternatives
- Allow animation disabling

---

## 8. Performance Requirements

### Load Time Targets
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

### Optimization Strategies
- Image lazy loading with Intersection Observer
- Critical CSS inlined
- JavaScript deferred
- Font display: swap
- Next.js Image component for automatic optimization
- Code splitting for heavy components

### Bundle Size Targets
- Initial JS: < 200KB gzipped
- CSS: < 50KB gzipped
- Images: < 500KB total on first load

---

## 9. Interactive Elements & Animations

### Scroll Animations
- Fade-in up for sections
- Staggered animation for cards
- Counter animation for numbers
- Progress bars for process steps

### Hover Effects
- Button: scale(1.05), shadow increase
- Card: lift up, border color change
- Link: underline animation
- Icon: rotate or color change

### Micro-interactions
- Button press feedback
- Form input focus ring
- Accordion smooth expand/collapse
- Modal backdrop blur
- Loading skeleton with shimmer

### Special Features
- Animated truck route in hero
- Floating elements in CTA section
- Parallax scrolling for hero background
- Interactive map hover states

---

## 10. Component Specifications

### Primary Button
```tsx
<Button variant="primary" size="lg" className="bg-secondary-500 hover:bg-secondary-600">
  Minta Penawaran Gratis
</Button>
```
- Background: Secondary-500 (#f97316)
- Hover: Secondary-600 (#ea580c)
- Text: White
- Padding: 16px 32px (desktop), 14px 24px (mobile)
- Radius: md (6px) or xl (12px) for pill shape
- Height: 48px (desktop), 44px (mobile)
- Transition: 220ms ease-in-out

### Secondary Button
```tsx
<Button variant="outline" size="lg">
  Hubungi Kami
</Button>
```
- Background: Transparent
- Border: Primary-950 (#1e3a5f)
- Text: Primary-950
- Hover: Primary-50 background
- Padding: 16px 32px
- Radius: md (6px)

### Card Component
```tsx
<Card className="p-6 hover:shadow-lg transition-shadow duration-300">
  <CardHeader>
    <Icon className="h-12 w-12 text-secondary-500 mb-4" />
    <CardTitle>Service Title</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>Service description</CardDescription>
  </CardContent>
</Card>
```
- Background: White
- Border: Border (#e2e8f0)
- Radius: lg (8px)
- Shadow: md, lg on hover
- Padding: 24px (p-6)
- Gap: 24px between cards

### Input Fields
```tsx
<Input placeholder="Masukkan nama Anda" className="h-12" />
```
- Height: 48px (h-12)
- Radius: md (6px)
- Border: Border (#e2e8f0)
- Focus ring: Primary-500
- Padding: 12px 16px

---

## 11. Image Requirements

### Hero Section
- Size: 1920x1080px (desktop), 750x1334px (mobile)
- Format: WebP with fallback to JPEG
- Content: Truck fleet or logistics scene
- Style: Professional, bright, clean

### Service Icons
- Size: 64x64px
- Format: SVG
- Style: Line or solid, consistent stroke width

### Testimonial Avatars
- Size: 64x64px
- Format: WebP
- Style: Professional headshots or company logos

### Map Visualization
- Size: Responsive
- Format: SVG or optimized image
- Style: Clean, highlighted areas

---

## 12. Form Requirements

### Contact Form Fields
1. **Nama Lengkap** (required, text)
2. **Nomor Telepon** (required, phone, Indonesia format)
3. **Email** (required, email)
4. **Jenis Layanan** (required, select)
   - Trucking
   - Loading/Unloading
   - Warehousing
   - Same-Day Delivery
   - Lainnya
5. **Jenis Armada** (optional, select)
   - Pick-up
   - Engkel (CDE/CDD)
   - Double Engkel (Fuso)
   - Tronton 6 Roda
   - Tronton 10 Roda
6. **Lokasi Penjemputan** (required, text)
7. **Lokasi Tujuan** (required, text)
8. **Tanggal Pengiriman** (required, date)
9. **Pesan Tambahan** (optional, textarea)

### Form Validation
- Real-time validation
- Clear error messages
- Success confirmation
- Loading state during submission

---

## 13. Implementation Priority

### Phase 1: Core Structure
1. Header/Navigation
2. Hero Section
3. Services Overview
4. Footer

### Phase 2: Trust & Credibility
5. Why Choose Us
6. Testimonials
7. FAQ

### Phase 3: Conversion Elements
8. Service Process
9. Coverage Area
10. CTA Section
11. Contact Form

### Phase 4: Enhancement
- Animations and transitions
- Interactive elements
- Performance optimization
- Accessibility audit

---

## 14. Success Metrics (KPIs)

### Conversion Metrics
- CTA Click-through Rate: > 5%
- Form Submission Rate: > 3%
- Phone Call Rate: Tracked via UTM

### Engagement Metrics
- Time on Page: > 2 minutes
- Bounce Rate: < 40%
- Scroll Depth: > 60% to Services section

### Performance Metrics
- Page Load Time: < 3 seconds
- Mobile Score: > 90 (Lighthouse)
- Desktop Score: > 95 (Lighthouse)

### SEO Metrics
- Organic Traffic: Track monthly
- Keyword Rankings: Top 10 for primary keywords
- Backlinks: Quality logistics/directory sites

---

## 15. Brand Guidelines

### Logo Usage
- Minimum size: 120px wide (desktop), 80px (mobile)
- Clear space: 2x logo height
- Background: Can be used on light or dark backgrounds
- Don't: Stretch, rotate, or modify colors

### Tone of Voice
- Professional yet approachable
- Confident and reliable
- Direct and clear
- Customer-focused

### Photography Style
- Bright and clean
- Professional quality
- Show real trucks and team
- Diverse representation

---

## 16. Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (New York style)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Forms Backend:** Next.js API Routes
- **Database:** Prisma (optional for form storage)

---

## 17. File Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/
│       ├── contact/route.ts  # Contact form endpoint
│       └── quote/route.ts    # Quote request endpoint
├── components/
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── process.tsx
│   │   ├── coverage.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── header.tsx            # Navigation header
│   └── contact-form.tsx      # Contact form component
└── lib/
    └── utils.ts              # Utility functions
```

---

## 18. Next Steps

1. ✅ Design specification complete
2. ⏳ Implement frontend components (starting with Phase 1)
3. ⏳ Create backend API routes
4. ⏳ Add animations and interactions
5. ⏳ Optimize performance and accessibility
6. ⏳ Test across all devices
7. ⏳ Deploy and monitor analytics

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Status:** Ready for Implementation
