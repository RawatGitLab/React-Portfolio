
# Er. Varun Rawat – MERN + AI Portfolio

live link : https://varun-latest-portfolio.netlify.app/
---

## 📌 About This Project

This is my personal developer portfolio and engineering guestbook. It showcases my journey as a **JavaScript & React Specialist**, **UI/UX Designer**, and **Product Engineering Design (PED)** practitioner. The site highlights:

- My technical skills (MERN, TypeScript, AI, GIS, etc.)
- Verified professional projects with real impact metrics
- Work experience timeline (Tech Mahindra, Excel Technologies, etc.)
- A live **guestbook stream** where visitors can leave messages
- DSA problem‑solving benchmark (100+ solutions)

The portfolio is built to be fast, responsive, and interactive – reflecting my engineering philosophy of clean code and scalable architecture.

---

## 🛠️ Tech Stack

| Category       | Technologies                                                                                     |
|----------------|--------------------------------------------------------------------------------------------------|
| **Frontend**   | React 18, Tailwind CSS, Swiper, JavaScript (ES6), TypeScript                                      |
| **Mapping**    | Leaflet, Mapbox GL, ESRI ArcGIS API, GDAL                                                        |
| **Backend (Demo Projects)** | Node.js, Express, MongoDB, Mongoose, Joi, REST APIs                                    |
| **DevOps**     | Git, GitHub Actions (CI/CD), Netlify                                                             |
| **Other Skills** | C/C++, Core Java, Angular, Azure, FME, QGIS, Drupal CMS                                         |

> **Note**: This portfolio frontend is static and deployed on Netlify. The guestbook stream and backend‑powered projects (e.g., QKart, Expense Tracker) are demonstrated via live demos or GitHub repositories linked from the site.

---

## ✨ Key Features

- **Fully responsive layout** – works on desktop, tablet, and mobile.
- **Interactive skill tags** – hover to highlight, "View All" expands the list.
- **Project carousel** – each verified project includes tech stack tags and a timeframe.
- **Timeline of engineering milestones** (QKart, Expense Tracker, QTIFY).
- **Guestbook** – visitors can leave messages (frontend form + mock stream; backend can be added).
- **Direct contact** – email link and message form.

---

## 🚀 Getting Started (Local Development)

If you want to run this portfolio locally (e.g., to customize or contribute):

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RawatGitLab/React-Portfolio.git

# 2. Navigate to the project folder
cd your-portfolio-repo

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start the development server
npm start
# or
yarn start
The site will open at http://localhost:3000. The guestbook functionality (if implemented) may require a backend API – see “Customization & Extending” below.

📂 Project Structure (Example)
text
src/
├── components/
│   ├── Header.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Timeline.js
│   ├── Guestbook.js
│   └── Footer.js
├── data/
│   ├── skillsData.js
│   ├── projectsData.js
│   └── experienceData.js
├── styles/
│   └── tailwind.css
├── App.js
└── index.js
Your actual structure may vary – adjust accordingly.

```
🔧 Customization & Extending
Guestbook Backend – To make the guestbook persistent, connect it to a simple API (Node.js + MongoDB) or a Firebase/Firestore collection.

Add More Projects – Edit the projectsData.js file. Each project object supports title, date, description, tags, and a verified flag.

Update Skills – Modify skillsData.js. Icons can be added using react-icons or custom SVGs.

Deploy to Netlify – Connect your GitHub repo to Netlify; it will auto‑deploy on every git push.

📄 License
This project is open source under the MIT License. Feel free to use the code structure for your own portfolio, but please replace personal information (name, projects, experience) with your own.

🤝 Connect with Me
Email: varunrawatmailbox2507@gmail.com

LinkedIn: https://www.linkedin.com/in/vr2507/

GitHub: https://github.com/RawatGitLab

Guestbook – Leave a message directly on the live site!

🙏 Acknowledgements
Icons and design inspiration from various open‑source portfolios.

Tailwind CSS for rapid styling.

React community for excellent tooling.

