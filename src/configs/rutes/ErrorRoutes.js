import React from 'react';
import ErrorLayout from '../../pages/error/ErrorLayout';
import Loadable from '../../components/Loadable';

const NotFound = Loadable(React.lazy(() => import('../../pages/error/NotFound')));
const InternalServer = Loadable(React.lazy(() => import('../../pages/error/InternalServer')));

const ErrorRoutes = {
    path: '/',
    element: <ErrorLayout />,
    children: [
        {
            path: '*',
            element: <NotFound />
        },
        {
            path: '/overload',
            element: <InternalServer />
        },
    ]
}

export default ErrorRoutes