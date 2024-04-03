
import  { Toaster } from 'react-hot-toast';
import '../styles/global.css';
import { getServerSession } from 'next-auth';
import MainLayout from '@/components/Layouts/MainLayout';


export const metadata = {
  title: 'Pavicon Technologies',
  description: 'Your Number One Tech Company',
}

export default  async function RootLayout({ children}) {
  // const pathname = usePathname();

 const session = await getServerSession()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainLayout session={session}>
          <Toaster
            position='top-right'
            reverseOrder={false}
           />
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
