import styles from '../styles/Home.module.css';
import BusinessCards from './components/BusinessCards';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/wojtazk',
    icon: '/images/icons/github-mark-white.svg',
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
