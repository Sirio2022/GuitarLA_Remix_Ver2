import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
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
export function ErrorBoundary({children}) {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="es">
        <head>
          <title>GuitarLA - Guitarra no encontrada</title>
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          <Outlet />
          <div className="error">
            <p>
              {error.status} - {error.statusText}
            </p>

            <Link to="/" className="error-enlace">
              Volver al inicio
            </Link>
          </div>
          <Footer />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  return children;
}
