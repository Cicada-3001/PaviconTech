
import  { Toaster } from 'react-hot-toast';
import '../styles/main.scss';
import { getServerSession } from 'next-auth';


export const metadata = {
  title: 'Pavicon Technology',
  description: 'Your Number One Tech Company',
}

export default  async function RootLayout({ children}) {


  const session = await getServerSession()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Toaster
            position='top-right'
            reverseOrder={false}
           />
          {children}

      </body>
    </html>
  )
}
