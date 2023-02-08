import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{ token: { borderRadius: 20, colorPrimary: '#5b8c00' } }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
