# Karuna R — Portfolio Website
## Setup & Hosting Guide

---

## STEP 1 — Install Required Tools

Install these if you don't have them:

1. **Node.js** → https://nodejs.org (download LTS version)
2. **Angular CLI** → open terminal and run:
   ```
   npm install -g @angular/cli
   ```
3. **Git** → https://git-scm.com/downloads

---

## STEP 2 — Set Up the Project

1. Create a folder called `karuna-portfolio` on your computer
2. Copy ALL the files from this zip into that folder (keeping the folder structure)
3. Open terminal / command prompt in that folder
4. Run:
   ```
   npm install
   ```
   (this installs all dependencies — takes 1-2 minutes)

---

## STEP 3 — Add Your Profile Photo

1. Rename your photo file to: `profile.jpg`
2. Put it inside: `src/assets/profile.jpg`
3. Your photo should be portrait-style (taller than wide) for best results

Also copy your resume PDF:
- Put `Karuna_R_Resume.pdf` inside: `src/assets/`

---

## STEP 4 — Run Locally (Preview)

```
ng serve
```
Then open browser and go to: **http://localhost:4200**

You should see your full portfolio running locally!

---

## STEP 5 — Host for FREE on GitHub Pages

### 5a. Create a GitHub account
- Go to https://github.com and sign up (free)
- Your portfolio URL will be: `https://YOUR-USERNAME.github.io/karuna-portfolio`

### 5b. Create a new repository
- Click "+" → "New repository"
- Name it: `karuna-portfolio`
- Set to **Public**
- Click "Create repository"

### 5c. Push your code to GitHub
Run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/karuna-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 5d. Deploy to GitHub Pages
Run:
```
npm run deploy
```

Wait 2-3 minutes, then visit:
**https://YOUR-USERNAME.github.io/karuna-portfolio**

🎉 Your portfolio is LIVE!

---

## Updating Your Portfolio Later

Whenever you want to update content:
1. Edit the TypeScript files (the `.ts` files in each component folder)
2. Run `npm run deploy` again
3. Changes go live in 2-3 minutes

### Where to Edit Content:
| What to change | File to edit |
|---|---|
| Your name, bio, socials | `hero.component.ts` |
| About section text | `about.component.html` |
| Skills and levels | `skills.component.ts` |
| Work experience | `experience.component.ts` |
| Projects | `projects.component.ts` |
| Contact info | `contact.component.ts` |

---

## Custom Domain (Optional, FREE)

You can get a free domain from:
- https://www.freenom.com (e.g. karunar.tk)

Or buy a professional one (~$10/year):
- https://namecheap.com (e.g. karunar.dev)

Then in GitHub repo → Settings → Pages → Custom domain → enter your domain.

---

## File Structure

```
karuna-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── app.component.ts/.html/.css
│   │   └── app.config.ts
│   ├── assets/
│   │   ├── profile.jpg        ← ADD YOUR PHOTO HERE
│   │   └── Karuna_R_Resume.pdf  ← ADD YOUR RESUME HERE
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## Need Help?

If you face any issues, the most common fixes:
- `npm install` not working → make sure Node.js is installed
- `ng serve` not found → run `npm install -g @angular/cli` again
- Photo not showing → make sure file is named exactly `profile.jpg` in `src/assets/`
