# Gulzameen - Premium eCommerce & SaaS Platform 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-3D-white?logo=three.js)

Welcome to **Gulzameen**, a cutting-edge, ultra-premium web platform that seamlessly bridges the gap between high-end eCommerce and modern SaaS interfaces. Designed with a dark glassmorphism aesthetic and immersive 3D interactions, Gulzameen delivers an unparalleled digital experience.

---

## ✨ Key Features

- **Immersive 3D Graphics**: Built using `@react-three/fiber` and `three.js` to render breathtaking interactive 3D hero sections (floating shapes, glowing rings, starry backgrounds).
- **Premium UI/UX**: Ultra-modern dark theme (`#0f0f0f`), neon cyan/purple gradients, and intricate glassmorphism cards.
- **Fluid Animations**: Scroll-triggered animations, interactive hover states, and seamless page transitions powered by `framer-motion`.
- **Role-Based Dashboards**: 
  - **User Dashboard** (`/dashboard`): A personalized hub for customers to view orders, manage addresses, and update payment methods.
  - **Admin Panel** (`/admin`): A comprehensive overview for admins featuring glowing revenue charts, real-time activity feeds, and metric tracking.
- **State Management**: Robust Redux Toolkit integration tailored for a complete Cart system.
- **Database Ready**: Pre-configured MongoDB connection utility (`src/lib/db.ts`) with caching for optimized Next.js serverless functions.
- **Lightning Fast**: Built on the new Next.js App Router for optimal Server-Side Rendering (SSR) and SEO.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Frontend** | React 19 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **3D Rendering** | Three.js, React Three Fiber, Drei |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **State** | Redux Toolkit (`@reduxjs/toolkit`) |
| **Database** | MongoDB (`mongoose`) |
| **Security** | `bcryptjs`, `jsonwebtoken` |

---

## 🚀 Getting Started

Follow these steps to run the platform on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abidali72/eCommerce-website.git
   cd eCommerce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/gulzameen
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) (or whichever port Next.js binds to) to experience the platform!

---

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── admin/           # Dedicated Admin Panel
│   │   ├── dashboard/       # User Personal Dashboard
│   │   ├── layout.tsx       # Root layout with fonts & providers
│   │   └── page.tsx         # Immersive 3D Landing Page
│   ├── components/          # Reusable UI components (Navbar, Footer, Hero3D)
│   └── lib/                 # Utilities
│       ├── features/        # Redux Slices (cartSlice.ts)
│       ├── db.ts            # MongoDB connection
│       └── store.ts         # Redux Store Configuration
├── public/                  # Static assets
└── next.config.ts           # Next.js config (Unsplash images allowed)
```

---

## 🎨 Design System

The application utilizes a custom Tailwind CSS configuration (`globals.css`) focused on a deep dark theme:
- **Background**: `#0f0f0f` and `#121212`
- **Primary Accent**: Purple (`#7c3aed`)
- **Secondary Accent**: Cyan/Blue (`#3b82f6`)
- **Typography**: Inter (Body) & Poppins (Headings)

Custom utility classes like `.glass-card`, `.text-gradient`, and `.neon-glow` are available globally.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 

## 📝 License
This project is licensed under the MIT License.
