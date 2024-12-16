# Fynn - A Personal Project

Welcome to **Fynn**, a personal project dedicated to creating a modern and cozy platform for my friend, an aspiring author, to share his stories and novels with the world. This project is a minimalistic, aesthetic website designed for readers and writers alike.

## 🌟 Project Overview

**Fynn** is under active development, aiming to provide a space where my friend can:

- **Write and Publish** his books and chapters directly or upload files.
- **Engage with Readers** through a seamless commenting and feedback system.
- **Create an Interactive Community**, allowing readers to create accounts, save their favorite books, and explore new ones.

This platform is built with user-friendly design principles and a cozy vibe to resonate with the warmth and creativity of storytelling.

## 🚀 Features (Planned and Under Development)

- **Minimalistic Homepage**:
  - A beautiful hero section introducing the author.
  - A call-to-action button for readers to start exploring.
- **Authentication System**:
  - User registration and login for readers.
  - Role management for authors and readers.
- **Content Management**:
  - Write chapters directly on the platform or upload `.docx` files.
  - Save drafts and publish completed works.
- **Reader Engagement**:
  - Comment on books and chapters.
  - Save favorite books for later.
- **Responsive Design**:
  - Fully optimized for desktops, tablets, and mobile devices.

## 💡 Inspiration

Life after school and college has been overwhelming, but when my best friend reached out and shared his love for writing, it inspired me to create this platform. It’s a personal gesture to support his creativity and passion.

## 🛠️ Technology Stack

The project utilizes modern technologies to ensure scalability, performance, and a great user experience:

- **Frontend**: Next.js (React framework) with Tailwind CSS for styling.
- **Backend**: Node.js with Express.js for server-side functionality.
- **Database**: PostgreSQL for structured data storage.
- **Authentication**: NextAuth.js for secure user login and session management.
- **Deployment**: Planned deployment on Vercel for the frontend and a VPS for the backend.

## 🔧 Development Setup

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/mubeenkexe/fynn.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fynn
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your-database-url
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=http://localhost:3000
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Access the application at [http://localhost:3000](http://localhost:3000).

## 🗂️ Folder Structure

```plaintext
fynn/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   │   ├── button/
│   │   │   ├── Button.module.css
│   │   │   └── Button.tsx
│   │   └── layout-wrapper/
│   │       └── LayoutWrapper.tsx
│   ├── home/
│   │   ├── hero/
│   │   │   ├── content/
│   │   │   │   ├── Content.tsx
│   │   │   │   └── content.module.css
│   │   │   ├── Hero.tsx
│   │   │   └── hero.module.css
│   │   └── layouts/
│   │       ├── credit/
│   │       │   └── Credit.tsx
│   │       └── header/
│   │           ├── Header.module.css
│   │           ├── Header.tsx
│   │           └── index.tsx
├── constants/
│   └── navLinks.ts
├── .gitignore
├── .vscode/
│   └── settings.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- **To my best friend**: For inspiring me to start this journey and for believing in me.
- **Open-source community**: For providing tools and frameworks that make this possible.
- **You**: For checking out this project. Stay tuned for updates!