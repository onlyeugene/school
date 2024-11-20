# School Website

A modern, responsive school website built with Next.js. This platform provides a comprehensive digital presence for schools, featuring student information, course details, announcements, and administrative tools.

## 🚀 Features

- Responsive design optimized for all devices
- Student/Parent portal integration
- Course catalog and curriculum information
- News and announcements system
- Events calendar
- Staff directory
- Online admission forms
- Resource center for students and teachers
- Photo gallery and virtual tour
- Contact forms and inquiry management

## 📋 Prerequisites

- Node.js (version 18.17 or higher)
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/school-website.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install

```

## 🏃‍♂️ Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Configuration

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:
```
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_UPLOAD_URL=your_upload_url
```

## 📁 Project Structure

```
school-website/
├── app/
│   ├── page.tsx           # Homepage
│   ├── about/            # About section      # Admission information
│   ├── news/            # News and announcements
│   └── contact/         # Contact forms
├── components/          # Reusable components
├── public/             # Static assets
│   ├── images/         # Image assets
│   └── documents/      # Downloadable documents
├── styles/            # Global styles
└── lib/              # Utility functions
```

## 🧪 Running Tests

```bash
npm run test
# or
yarn test
```

## 🚀 Deployment

The site can be deployed using Vercel for optimal performance with Next.js:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your environment variables
4. Deploy!

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Prisma](https://www.prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 🔐 Admin Features

- Dashboard for content management
- Student database management
- Staff management
- Attendance tracking
- Event management
- Newsletter system
- Document
