# Contributing to Pine-Richland Ultimate

Thank you for your interest in contributing to the Pine-Richland Ultimate website! We welcome contributions from everyone.

> **Note:** If you're looking to create a website for your own team, feel free to fork this repository! See the [Fork for Your Own Team](README.md#-fork-for-your-own-team) section in the README. The contribution guidelines below are for improving the core template and Pine-Richland-specific content.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by a code of respect and inclusivity. By participating, you are expected to uphold this standard. Please be kind, respectful, and considerate in your interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** for the enhancement
- **Mockups or examples** if applicable
- **Potential implementation approach**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/yourusername/pr-ultimate-spirit.git
cd pr-ultimate-spirit

# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add tests** if applicable
3. **Ensure the build passes** - run `npm run build` and `npm run lint`
4. **Update the README.md** if you're adding features
5. **Follow the style guidelines** outlined below
6. **Request review** from maintainers

### PR Title Format

Use clear, descriptive titles:

- `feat: add summer camp registration form`
- `fix: correct calendar timezone display`
- `docs: update installation instructions`
- `style: improve mobile navigation layout`

## Style Guidelines

### TypeScript/React

- Use **TypeScript** for all new files
- Follow **functional components** with hooks
- Use **named exports** for components
- Keep components **small and focused**
- Add **proper types** - avoid `any`

### Code Formatting

- We use **ESLint** for linting
- Run `npm run lint` before committing
- Use **Prettier** settings from the project config
- Use **2 spaces** for indentation
- Use **tabs** as specified in the project

### Component Structure

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

const MyComponent = ({ title, onAction }: MyComponentProps) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### CSS/Styling

- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **CSS variables** from the theme
- Maintain **accessibility** (ARIA labels, semantic HTML)

## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(calendar): add tournament registration
fix(mobile): resolve navigation menu overflow
docs(readme): add development setup instructions
style(hero): improve spacing on mobile devices
```

## Questions?

Feel free to reach out:

- Open an issue for discussion
- Email: prultimatecoaches@gmail.com

Thank you for contributing! 🎉
