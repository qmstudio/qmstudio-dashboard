# QMStudio Management Dashboard

A comprehensive project management dashboard for tracking multiple projects with timeline, budget, team assignments, and scheduled meetings.

## Features

- **Project Overview** - View all active projects at a glance
- **Progress Tracking** - Circular progress indicators for each project (0-100%)
- **Phase Timeline** - Track project phases (Scope, Contract, Development, Delivery, Training) with status symbols
- **Calendar Timeline** - Visual 14-day calendar showing scheduled work phases
- **Team Management** - Assign team members to development tasks
- **Budget Tracking** - Monitor allocated vs. spent budget with visual progress bar
- **Risk Assessment** - Low/Medium/High risk level indicators
- **Dependencies** - Track project dependencies and blockers
- **Scheduled Meetings** - List meetings with attendees, dates, and times (checkable)
- **Development Tasks** - Track specific tasks with team member assignments
- **Project Notes** - Status updates and observations
- **Status History** - Project timeline and progress metrics

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens at http://localhost:3000

3. **View HTML Preview** (no build needed)
   - Open `preview.html` in your browser

## File Structure

```
qmstudio-dashboard/
├── dashboard.jsx           # Main React component
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .gitignore            # Git ignore rules
├── preview.html          # Standalone HTML preview
├── header-image.jpg      # Header background image
└── README.md             # This file
```

## Project Data

Each project in the dashboard includes:
- Project name and description
- Progress percentage (0-100) with circular indicator
- Team member assignments
- Budget tracking (allocated vs. spent)
- Risk level (Low/Medium/High)
- Project dependencies
- Development tasks with assignments
- Scheduled meetings with dates and times
- Status history and notes
- Phase timeline with completion status

## Phase Status Symbols

- ✓ = Complete
- → = In Progress
- ○ = Upcoming
- ◐ = Partial
- — = N/A

## Current Projects

- **Butter Freight** (60% - Low Risk, Due Mar 10)
- **Pod.ing** (40% - Medium Risk)
- **AllVetsClub.com** (50% - High Risk, URGENT)
- **rove.ing** (90% - Low Risk)

## Customization

### Edit Project Data
Modify the `projects` array in `dashboard.jsx` to add/edit projects.

### Change Colors
Update the color values in `dashboard.jsx`:
- Header: #404040
- Frame: #cccccc
- Phase colors: #e8e8e8, #d4d4d4, #707070

### Adjust Layout
All styling uses Tailwind CSS classes. Modify `tailwind.config.js` for theme changes.

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

## Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

## Typography

- **Title**: Playfair Display (serif), 4.5rem
- **Body**: Helvetica Neue
- **Letter Spacing**: -0.02em

## Technologies

- React
- Tailwind CSS
- JavaScript ES6+

## Notes

- The dashboard is fully responsive
- Calendar shows first 14 days of month
- Meetings appear on calendar and in checklist
- Budget uses visual progress bar
- Team members are clickable badges

## For Support

Refer to the detailed sections in this README or check the component code for implementation details.
