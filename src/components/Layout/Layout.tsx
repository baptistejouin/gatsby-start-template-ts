import React from 'react'
import { BaseComponentProps } from '@/types';

import '@/styles/reset.css'
import '@/styles/global.css'
import { container } from './Layout.module.sass';

export default function Layout({ children }: BaseComponentProps) {
  return (
    <div className={container}>
        <header>
            HEADER
        </header>
        <main>
          MAIN
          { children }
        </main>
        <footer>
            FOOTER
        </footer>
    </div>
  )
}
