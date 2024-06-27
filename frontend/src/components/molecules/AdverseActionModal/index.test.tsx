import { render } from '@testing-library/react'
import AdverseActionModal from '.'
import React from 'react'
import { ADVERSE_ACTION_SENT_MODAL_TEXT } from '../../../utils/constants'

describe('testing AdverseActionSentModal component', () => {
  test('should renders correctly', () => {
    const { getByText } = render(
      <AdverseActionModal isOpen={true} label={ADVERSE_ACTION_SENT_MODAL_TEXT} />
    )
    expect(getByText('Pre-Advance Action notice successfully sent')).toBeInTheDocument()
  })
})
