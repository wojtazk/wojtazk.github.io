import styles from '../styles/Home.module.css';
import BusinessCards from './components/BusinessCards';

const links = [
  {
    site: 'LinkedIn',
    username: 'kowal-wojciech',
    url: 'https://www.linkedin.com/in/kowal-wojciech/',
    icon: '/images/icons/LI-In-Bug.png',
  },

  {
    site: 'GitHub',
    username: 'wojtazk',
    url: 'https://github.com/wojtazk',
    icon: '/images/icons/github-mark-white.svg',
  },

  {
    site: 'Codecademy',
    username: 'wojtazk',
    url: 'https://www.codecademy.com/profiles/wojtazk',
    icon: '/images/icons/Codecademy_icon.svg',
  },
  {
    site: 'Twitter',
    username: 'wojtaz_k',
    url: 'https://twitter.com/wojtaz_k',
    icon: '/images/icons/twitter_logo_blue.svg',
  },
  {
    site: 'Instagram',
    username: 'kowalwojtek',
    url: 'https://www.instagram.com/kowalwojtek/',
    icon: '/images/icons/Instagram_Glyph_Gradient_RGB.svg',
  },
];

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <h1>Hello there!</h1>
      <h2>I'm Wojciech</h2>

      <BusinessCards links={links} />
    </main>
  );
}
