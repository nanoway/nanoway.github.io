import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Accueil"
      description="Ressources pour mes Raspberry pi. Bouts de code, etc...">
      <main className="container margin-vert--xl">
        <Heading as="h1" className="hero__title">
          Nanoway
        </Heading>
        <p className="hero__subtitle">
          Ressources pour mes Raspberry pi. Bouts de code, etc...
        </p>
        <p>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs">
            Voir les guides
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            Lire le blog
          </Link>
        </p>
      </main>
    </Layout>
  );
}
