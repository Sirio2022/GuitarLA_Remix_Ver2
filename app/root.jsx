import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';

import normalize from './styles/normalize.css';
import styles from '~/styles/index.css';

import Header from '~/components/header/header';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function meta() {
  return [
    {
      title: 'GuitarLA - Remix',
    },
    {
      name: 'description',
      content: 'GuitarLA, remix, venta de guitarras de alta gama',
    },
    {
      name: 'keywords',
      content: 'GuitarLA,remix',
    },
  ];
}

export function links() {
  return [
    { rel: 'stylesheet', href: normalize },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: cssBundleHref },
  ];
}

/* Manejo de errores*/
export function ErrorBoundry() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>ERROR</h1>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
      </div>
    );
  }
  return null;
}
