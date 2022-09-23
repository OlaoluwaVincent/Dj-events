import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			{router.pathname === '/' ? <Showcase /> : null}

			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;

Layout.DefaultProps = {
	title: 'DJ Events | Find the hotest parties',
	description: 'Find the latest and other musical events',
	keywords: 'dj,music',
};
