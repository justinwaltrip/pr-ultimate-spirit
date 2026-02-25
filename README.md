# Pine-Richland Ultimate

A modern, responsive website for the Pine-Richland Ultimate Frisbee program showcasing team information, schedules, resources, and community engagement opportunities.

> **🎯 Use This Template!** This project is open source and designed to be forked. Create your own team website in minutes by following the [Fork for Your Own Team](#-fork-for-your-own-team) guide below.

![Website Screenshot](src/assets/screenshot.png)

## ✨ Features

- **Team Information**: Comprehensive details about the program, including history and team structure
- **Schedule & Calendar**: Interactive calendar showing practices, games, and tournaments
- **News Updates**: Latest announcements and team achievements
- **Resources**: Educational materials for players, parents, and coaches
- **Summer Opportunities**: Information about camps and summer programs
- **FAQ Section**: Answers to common questions about Ultimate and the program
- **Dark/Light Theme**: Theme toggle for user preference
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Accessibility**: Built with accessibility best practices

## 🚀 Tech Stack

- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vite.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality UI components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[Lucide Icons](https://lucide.dev/)** - Icon library

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm, yarn, or bun package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/justinwaltrip/pr-ultimate-spirit.git
   cd pr-ultimate-spirit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Project Structure

```
pr-ultimate-spirit/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Theme

The site supports dark and light modes. Theme preferences are stored in local storage. Modify theme colors in:

- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme configuration

### Content

Component files are organized by feature in `src/components/`. Update content directly in the respective component files.

## 🍴 Fork for Your Own Team

Want to create a website for your own Ultimate team or sports program? This project is designed to be easily forkable and customizable!

### Quick Start for Your Team

1. **Fork this repository**
   - Click the "Fork" button at the top right of the GitHub page
   - This creates your own copy of the project

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/pr-ultimate-spirit.git
   cd pr-ultimate-spirit
   ```

3. **Customize for your team**
   - Update team name, colors, and branding in `src/index.css`
   - Modify component content in `src/components/`
   - Replace team information in each section component
   - Update contact information and links
   - Customize the theme in `tailwind.config.ts`

4. **Update package details**
   - Change project name in `package.json`
   - Update README with your team information
   - Modify LICENSE if needed (keep MIT attribution)

5. **Deploy your site**
   - Enable GitHub Pages in your repository settings
   - Run `npm run deploy` to publish
   - Or deploy to Vercel, Netlify, or any static hosting service

### What to Customize

| Component         | File                                                   | What to Change                      |
| ----------------- | ------------------------------------------------------ | ----------------------------------- |
| Team Name & Logo  | `src/components/Header.tsx`, `src/components/Hero.tsx` | Team name, tagline, logo            |
| Colors & Branding | `src/index.css`, `tailwind.config.ts`                  | Primary colors, fonts, theme        |
| About Section     | `src/components/About.tsx`                             | Team description, values            |
| History           | `src/components/History.tsx`                           | Your team's history and milestones  |
| News              | `src/components/News.tsx`                              | Current news and updates            |
| Schedule          | `src/components/Schedule.tsx`                          | Practice times, game schedule       |
| Calendar          | `src/components/Calendar.tsx`                          | Team events and tournaments         |
| FAQ               | `src/components/FAQ.tsx`                               | Team-specific questions and answers |
| Resources         | `src/components/Resources.tsx`                         | Your team's resources and links     |
| Contact           | `src/components/Contact.tsx`                           | Contact email and registration info |
| Footer            | `src/components/Footer.tsx`                            | Social links, copyright             |

### Deployment Options

- **GitHub Pages**: Built-in deployment with `npm run deploy`
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag-and-drop or Git integration
- **Cloudflare Pages**: Fast global CDN deployment

All these options work great with this Vite + React setup!

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Pittsburgh Ultimate](https://pittsburgh-ultimate.org) for supporting the program
- All contributors and team members who help maintain this project

## 📧 Contact

For questions or inquiries about the Pine-Richland Ultimate program:

- Email: prultimatecoaches@gmail.com
- Register: [pittsburgh-ultimate.org](https://pittsburgh-ultimate.org)

---

Made with ❤️ by the Pine-Richland Ultimate community
