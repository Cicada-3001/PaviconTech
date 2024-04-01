
import  { Toaster } from 'react-hot-toast';
import '../styles/main.scss';

import { getServerSession } from 'next-auth';
import AuthProvider from './contexts/Authprovider';

export const metadata = {
  title: 'Pavicon Technology',
  description: 'Your Number One Tech Company',
}

export default  function RootLayout({ children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <AuthProvider>
          <Toaster
            position='top-right'
            reverseOrder={false}
           />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
