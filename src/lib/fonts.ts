import { Bebas_Neue, Archivo } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display-var',
  display: 'swap',
})

export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'swap',
})
