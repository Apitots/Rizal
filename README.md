## Dr. José Rizal: Life & Works

A modern, dark, museum-style web experience that presents José Rizal as a complex, contested, and deeply human figure—moving beyond simple timelines and textbook hero worship.

### Features

- **Premium historical aesthetic**: Dark navy/charcoal palette with gold accents, cinematic hero, and subtle motion.
- **Debate-driven storytelling**: Split-panel treatments (e.g., the Retraction controversy, “American-made hero” debate).
- **Deep-dive content**: Academic yet accessible copy on Rizal’s life, works, and legacy, focused on debates and human complexity.
- **Interactive journeys**: SVG-based world map and timeline for Rizal’s travels and exile.
- **Responsive & animated**: Framer Motion scroll reveals, hover states, and a refined navigation bar.
- **Accessible by design**: Semantic HTML, ARIA labels, and keyboard-friendly navigation.

### Main Sections

1. **Hero** – Cinematic banner with Rizal’s portrait and calls-to-action to explore his works and journey.
2. **Life Beyond Dates** – Humanizes Rizal beyond a timeline:
   - Retraction controversy presented as a “for vs against” historical debate.
   - Profile cards for Segunda Katigbak, Leonor Rivera, Josephine Bracken, and O-Sei-San.
   - Rizal in Dapitan as doctor, naturalist, and engineer (Draco rizali, Apogonia rizali, waterworks, ophthalmology).
   - Mercado Rizal family cards (Paciano, Teodora Alonso, the Mercado/Rizal surname story).
3. **Literary Works** – Vintage-style book cards for *Noli Me Tángere*, *El Filibusterismo*, and key essays/poetry.
4. **Beyond the Famous Novels** – Works deep-dive:
   - *Makamisa* (unfinished Tagalog satire).
   - Annotations to Morga’s *Sucesos* as decolonial history.
   - Character symbolism (Maria Clara, Simoun/Ibarra, Padre Damaso, Pilosopo Tasio).
   - Letters to Blumentritt as windows into Rizal’s doubts, strategies, and friendships.
5. **Global Journey & Exile** – Interactive world map with route lines and a timeline slider from Calamba to Dapitan.
6. **The Polymath** – Icon-based grid of Rizal as physician, writer, artist, and scientist, with a closing quote.
7. **Beyond Monuments and Holidays (Legacy)** – Critical legacy section:
   - The “American-made hero” debate (Constantino and counter-views).
   - Rizalistas as folk religious movements around Mount Banahaw.
   - The Knights of Rizal and Republic Act 646 as institutional memory.
   - “Social cancer” and modern relevance: corruption, dynasties, and social media discourse with reflective questions.
8. **The Final Sacrifice** – Dramatic treatment of the execution at Bagumbayan and *Mi Último Adiós*.

### Navigation

- Sticky header with `RIZAL LEGACY` branding and a refined, centered navigation bar.
- Menu links:
  - **Life Beyond Dates** (`#life-beyond-dates`)
  - **Literary Works** (`#literary-works`)
  - **Beyond the Famous Novels** (`#works-deep-dive`)
  - **Global Journey** (`#global-journey`)
  - **The Polymath** (`#polymath`)
  - **Beyond Monuments and Holidays** (`#legacy`)
  - **Final Sacrifice** (`#final-sacrifice`)

### Tech Stack

- **React 18+** – Component-based UI.
- **Vite** – Fast dev server and bundler.
- **Tailwind CSS** – Utility-first styling with a custom dark/gold theme.
- **Framer Motion** – Scroll and hover animations.
- **Heroicons** – Outline icons for talents and content cards.

### Getting Started

- Default dev URL: `http://localhost:5173/`
- To deploy your site online, see the [GitHub Pages deployment instructions](#deploying-to-github-pages) below.

#### Prerequisites

- Node.js 18+ and npm installed.
- GitHub account (for hosting the site on GitHub Pages)

#### Installation

```bash
# Navigate into the project
cd C:\Users\user\Documents\Rizal

# Install dependencies
npm install   # or: npm.cmd install

# Start development server
npm run dev   # or: npm.cmd run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### Deploying to GitHub Pages

GitHub Pages provides free hosting for static websites. This project is configured to deploy automatically using GitHub Actions.

**1. Create a GitHub Repository**

- Create a new repository on GitHub (e.g., `Rizal` or `rizal-legacy`)
- Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**2. Enable GitHub Pages**

- Go to your repository on GitHub
- Navigate to **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- Save the settings

**3. Automatic Deployment**

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically:
- Build your site when you push to the `main` branch
- Deploy it to GitHub Pages
- Your site will be available at: `https://YOUR_USERNAME.github.io/Rizal/`

**4. Manual Deployment (Alternative)**

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains your built site
# You can deploy the contents of the dist folder to GitHub Pages
```

**Note**: Make sure your repository name matches the `base` path in `vite.config.js`. Currently set to `/Rizal/`, so if your repository is named differently, update the `base` value accordingly.

**Updating Your Site**

Simply push changes to the `main` branch, and GitHub Actions will automatically rebuild and redeploy your site.

### Customization

#### Images

You can swap out the default assets in `src/assets/`:

1. **Rizal portrait** – Update the background image used in `Hero.jsx`.
2. **Logo / branding** – Replace `Rizzal_logo.gif` and adjust the markup in `Header.jsx`.
3. **World map** – Replace `world_map.png` or update the `<image>` in `GlobalJourney.jsx`.
4. **Monument** – Update the background image used in `FinalSacrifice.jsx`.

#### Colors & Theme

The core palette is defined in `tailwind.config.js`:

```js
colors: {
  navy: {
    dark: '#0a1628',
    DEFAULT: '#1a1a1a',
  },
  gold: {
    DEFAULT: '#d4af37',
    muted: '#c9b99b',
  },
}
```

You can adjust these values to shift the atmosphere while keeping the museum-style contrast.

### Project Structure

```text
src/
├── components/
│   ├── Header.jsx          # Sticky, refined navigation bar
│   ├── Hero.jsx            # Cinematic hero section
│   ├── LifeBeyondDates.jsx # Life – retraction, love life, science, family
│   ├── LiteraryWorks.jsx   # Core novels and key writings
│   ├── WorksDeepDive.jsx   # Makamisa, Morga, symbolism, Blumentritt letters
│   ├── GlobalJourney.jsx   # Map and timeline of travels and exile
│   ├── Polymath.jsx        # Talents showcase (doctor, writer, artist, scientist)
│   ├── Legacy.jsx          # Legacy – debates, Rizalistas, Knights, relevance
│   ├── FinalSacrifice.jsx  # Execution and Mi Último Adiós
│   └── BookCard.jsx        # Reusable vintage-style book card
├── App.jsx                 # Main app layout and section ordering
├── main.jsx                # React entry point
└── index.css               # Global styles
```

### Image Credits

The following images are credited to their respective sources:

- **José Rizal portrait**  
  Source: Wikimedia Commons  
  Link: `https://commons.wikimedia.org/wiki/File:Jose_Rizal_full.jpg`  
  License: Public Domain

- **“Licking Doro Firefly” GIF**  
  Original creator: Reddit user (as credited in the post)  
  Source: r/NIKKEOutpost on Reddit  
  Post: `https://www.reddit.com/r/NikkeOutpost/comments/1dmjvky/made_the_licking_dorofirefly_gif_that_a_person/`  
  Used for non-commercial, illustrative purposes.

- **World political map illustration**  
  Source: Vecteezy  
  Link: `https://www.vecteezy.com/vector-art/8218169-world-political-earth-map-in-retro-color-palette-vector-illustration`  
  License: Vecteezy License (used with attribution).

### License

This project is a tribute to Dr. José Rizal and is intended for educational and non-commercial use.
