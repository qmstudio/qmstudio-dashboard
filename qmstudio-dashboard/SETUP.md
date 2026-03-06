# Setup Instructions for New Computer

Follow these steps to get the QMStudio Management Dashboard running on a new computer.

## Prerequisites

Make sure you have installed:
- **Node.js** (v14 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js) - Check with `npm --version`
- **Git** (optional but recommended) - Download from https://git-scm.com/

## Step 1: Extract Files

1. Extract the `qmstudio-dashboard` folder to your desired location
2. Open a terminal/command prompt in that folder

## Step 2: Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

This will create a `node_modules` folder with all dependencies (may take 1-2 minutes).

## Step 3: Start the Development Server

```bash
npm start
```

The dashboard will automatically open in your browser at `http://localhost:3000`

If it doesn't open automatically, manually visit: http://localhost:3000

## Step 4: View the Project

- **Dashboard**: Interactive version at http://localhost:3000
- **Preview**: Standalone `preview.html` (open in any browser, no server needed)

## Troubleshooting

### Port 3000 is already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Node modules issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Dependencies won't install
```bash
# Clear npm cache
npm cache clean --force
npm install
```

## Building for Production

To create an optimized build:

```bash
npm run build
```

This creates a `build` folder ready for deployment.

## Using with Git

Initialize a Git repository (optional):

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## File Descriptions

- **dashboard.jsx** - Main React component with all project data
- **package.json** - Lists all dependencies and scripts
- **tailwind.config.js** - Tailwind CSS theme configuration
- **postcss.config.js** - CSS processing configuration
- **preview.html** - Standalone HTML preview (no build required)
- **header-image.jpg** - Background image for header
- **.gitignore** - Files to ignore in Git

## Available Commands

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run tests (if configured)
npm run eject      # Advanced: expose configuration (not reversible)
```

## Next Steps

1. Open `dashboard.jsx` to modify project data
2. Add your own projects, team members, and meetings
3. Customize colors and styling with Tailwind
4. Deploy to production when ready

## Support

For detailed information, see README.md in the same folder.
