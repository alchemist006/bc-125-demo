import { render } from '@testing-library/react'
import AdverseActionPage from '.'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

describe('testing adverse action page', () => {
  test('should renders correctly in defalut state', () => {
    const { getByText } = render(
      <BrowserRouter>
        <AdverseActionPage />
      </BrowserRouter>
    )
    getByText('Candidate Information')
  })
})
