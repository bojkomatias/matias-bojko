import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { Trans } from '@lingui/react/macro'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { TextEffect } from '@/components/ui/text-effect'
import { messages } from '@/locales/en/messages'

i18n.load('en', messages)
i18n.activate('en')

export const Route = createRootRoute({
  component: () => (
    <I18nProvider i18n={i18n}>
      <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 py-20">
          <Header />
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </I18nProvider>
  ),
})

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link to="/" className="font-medium text-black dark:text-white">
          Matías Bojko
        </Link>
        <Trans>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </Trans>
      </div>
    </header>
  )
}
