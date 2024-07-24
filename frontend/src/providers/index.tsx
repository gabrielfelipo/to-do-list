import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import NiceModal from '@ebay/nice-modal-react'
import * as React from 'react'

import 'react-toastify/dist/ReactToastify.min.css'
import { queryClient } from '~/lib/react-query'

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center text-danger"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
    </div>
  )
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <NextUIProvider>
            <NiceModal.Provider>{children}</NiceModal.Provider>
            <ToastContainer />
          </NextUIProvider>
        </AnimatePresence>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
