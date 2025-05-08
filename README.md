Haya Fashion Mobile

**Haya Fashion Mobile** is a modern, AI-powered mobile web application built with **React**, **TypeScript**, and **Tailwind CSS**, offering personalized fashion recommendations, wardrobe management, and stylist insights based on facial color analysis and user preferences.

 Features

- **AI Stylist Assistant:** Personalized outfit suggestions based on user wardrobe, face color analysis, and preferences.
- **Wardrobe Manager:** Upload and organize clothing items for easier outfit planning.
- **Color Analysis:** Analyzes user face image to recommend color palettes that match skin tone and undertones.
- **Blog:** Stay updated with the latest fashion trends and tips.
- **Admin Panel:**
  - **Login & Auth**
  - **Dashboard Overview**
  - **Manage Products / Outfits**

Pages & Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Index` | Home page |
| `/about` | `AboutEnhanced` | About Haya Fashion (Enhanced) |
| `/old-about` | `About` | Legacy About page |
| `/contact` | `Contact` | Contact us page |
| `/blog` | `Blog` | Blog and fashion insights |
| `/admin/login` | `AdminLogin` | Admin login page |
| `/admin` | `Admin` | Admin layout |
| `/admin/products` | `AdminProducts` | Manage outfits/products |
| `*` | `NotFound` | Catch-all for undefined routes |

Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS
- **Routing:** React Router DOM
- **State Management & Data Fetching:** React Query (`@tanstack/react-query`)
- **UI Libraries:** Custom components + ShadCN UI
- **Toasts & Notifications:** 
  - `Toaster` (custom alerts)
  - `Sonner` (non-blocking notifications)
- **Tooltips:** `TooltipProvider` from ShadCN
- **Backend & AI Logic (Planned/External):** Python backend (e.g., Flask or FastAPI)

 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NahidaMaryam/haya-fashion-mobile.git
   cd haya-fashion-mobile
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   ```

Folder Structure (Simplified)

```
src/
├── components/
│   └── ui/                 # UI components like Toaster, Tooltip, Sonner
├── pages/                  # App pages (Index, About, Admin, Blog, etc.)
├── App.tsx                 # Main app component with routing
├── main.tsx                # Entry point
```

 License

This project is licensed under the [MIT License](LICENSE)

---



