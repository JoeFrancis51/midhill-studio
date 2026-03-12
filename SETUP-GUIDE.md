# 🎨 Midhill Studio — Setup Guide

Follow these steps ONE TIME to get the site live. After that, Jess can add/edit artwork 
from her phone or laptop with no technical knowledge needed.

---

## PART 1 — Put the files on GitHub (5 min)

GitHub is free and stores your website files. Think of it as a Google Drive for websites.

1. Go to **github.com** and create a free account (or log in)
2. Click the **+** button (top right) → **New repository**
3. Name it: `midhill-studio`
4. Make sure it's set to **Public**
5. Click **Create repository**
6. On the next screen, click **uploading an existing file**
7. Drag ALL the files from the `midhill-studio` folder into the upload area:
   - `index.html`
   - `data.json`
   - `build.js`
   - `netlify.toml`
   - `admin/` folder (contains `index.html` and `config.yml`)
   - `images/` folder
8. Click **Commit changes**

---

## PART 2 — Connect to Netlify (5 min)

Netlify hosts the site for free and rebuilds it every time Jess adds artwork.

1. Go to **netlify.com** and sign up with your GitHub account
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** and select `midhill-studio`
4. Leave all settings as-is and click **Deploy site**
5. After ~1 minute your site will be live at something like `random-name.netlify.app`
6. To rename it: **Site settings** → **Domain management** → **Options** → **Edit site name**
   → Change to `midhillstudio` → your URL becomes `midhillstudio.netlify.app`

---

## PART 3 — Enable the CMS Login (5 min)

This lets Jess log into the admin panel to add artwork.

1. In Netlify, go to **Integrations** → search **Identity** → click **Enable Identity**
2. Go to **Identity** tab → **Invite users** → enter Jess's email → Send invite
3. Jess will get an email — she clicks the link and sets her password
4. Go to **Identity** → **Settings** → **Git Gateway** → click **Enable Git Gateway**
5. Open `admin/config.yml` on GitHub and change:
   ```
   repo: YOUR-GITHUB-USERNAME/midhill-studio
   ```
   to your actual GitHub username, e.g.:
   ```
   repo: jesssmith/midhill-studio
   ```
   Then click **Commit changes**

---

## PART 4 — Update the order form email (2 min)

So orders come to Jess's actual inbox:

1. Open `index.html` on GitHub
2. Find the line: `mailto:your@email.com`
3. Replace `your@email.com` with Jess's real email address
4. Click **Commit changes**

---

## ✅ You're done!

**The website:** `midhillstudio.netlify.app`  
**Jess's admin panel:** `midhillstudio.netlify.app/admin`

---

## HOW JESS ADDS ARTWORK

1. Go to `midhillstudio.netlify.app/admin`
2. Log in with her email & password
3. Click **New Artwork Piece**
4. Fill in the title, category, description, and upload a photo
5. Click **Publish** — the site updates in about 60 seconds!

That's it. No code. No technical knowledge. Works on her phone too.

---

## CUSTOM DOMAIN (optional, ~$12/year)

If you want `midhillstudio.com` instead of `.netlify.app`:
1. Buy the domain on **Namecheap.com** (~$10–15/year)
2. In Netlify → **Domain management** → **Add custom domain**
3. Follow their instructions to point the domain to Netlify (takes ~10 min)
