import React from 'react'
import { render as testingLibraryRender, RenderOptions, RenderResult } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { server } from './mocks/server'

interface WrapperProps {
  children: React.ReactNode
}

const wrapper = ({ children }: WrapperProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())
  return testingLibraryRender(ui, { wrapper, ...options })
}

export * from '@testing-library/react'

export { customRender as render }
