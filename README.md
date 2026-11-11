# Gloria Aguedu — Portfolio

Next.js 14 + Tailwind CSS. All text lives in `data/content.js`.

## Run it on your computer (Command Prompt)

```
cd /d C:\Users\Hello
tar -xf "gloria-portfolio.zip" -C .
cd gloria-portfolio
npm install
npm run dev
```
Open http://localhost:3000

## Edit content
- Words, case studies, skills: `data/content.js`
- CV download: replace `public/Aguedu_Gloria_CV.pdf`
- Demo video: `demoVideo` in `data/content.js` (off by default until the recording is rebranded)

## Deploy free on Vercel
1. Create an empty GitHub repo called `gloria-portfolio`.
2. In Command Prompt, inside the project folder:
```
git init
git add -A
git commit -m "Portfolio first version"
git branch -M main
git remote add origin https://github.com/boluwatifemi23/gloria-portfolio.git
git push -u origin main
```
3. Go to vercel.com, sign in with GitHub, click Add New > Project, import `gloria-portfolio`, click Deploy.

## Make the contact form send emails (optional)
1. Create a free account at resend.com and copy an API key.
2. In Vercel: Project > Settings > Environment Variables, add
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = uchechukwugloria44@gmail.com
3. Redeploy. Until then, the form shows your email address instead.
