# MicroLearn - Interactive Learning Platform

MicroLearn is a modern, interactive learning platform that helps users build knowledge through hands-on exercises and real-world applications. The platform features a gamified learning experience with streaks, XP, and leaderboards to keep users engaged and motivated.

## Features

- 🎯 Interactive Learning Experience
- 📊 Progress Tracking
- 🏆 Gamification (Streaks, XP, Leaderboards)
- 🌙 Dark/Light Mode
- 📱 Responsive Design
- 🔄 Real-time Updates
- 📝 Reflective Learning

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- PostgreSQL
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jassBawa/entrepi-assignment
   cd entrepi-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/microlearn"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the application.

## Project Structure

```
microlearn/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   ├── styles/          # Global styles
│   └── types/           # TypeScript types
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Database Schema

The application uses the following main models:
- User
- Course
- Lesson
- LessonCompletion
- Streak
- ReflectiveQuestion
- Reflection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)

## Support

For support, email support@microlearn.com or join our Slack channel.
