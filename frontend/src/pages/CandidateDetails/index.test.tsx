import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CandidateDetails from '.'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

jest.mock('../../services/index', () => ({
  getCandidateInfo: jest.fn(() =>
    Promise.resolve([
      {
        name: 'John Smith',
        status: 'CLEAR',
        adjudication: '-'
      }
    ])
  ),
  getCandidateDetails: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        location: 'Barrouallie',
        date: '2/22/2022',
        email: 'john.smith@checkr.com',
        dob: '1990-09-10 (26)',
        phoneNo: '(555) 555-5555',
        zipcode: '94158',
        socialSecurity: 'XXX-XX-6789',
        driverLicense: 'FTEST1111 (CA)',
        createdAt: '2016-11-29 11:05:57',
        package: 'Employee pro',
        reportCreatedAt: '2016-12-01 12:00:00',
        reportCompletionDate: '2016-12-04 12:00:00',
        turnAroundTime: '1 Day , 14 hours'
      }
    ])
  ),
  getCourtSearchesData: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        search: 'SSN Verification',
        status: 'CLEAR',
        date: '2/22/2022'
      }
    ])
  )
}))

describe('CandidateDetails Component', () => {
  it('renders without errors', async () => {
    render(
      <BrowserRouter>
        <CandidateDetails />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Candidate Information')).toBeInTheDocument()
      expect(screen.getByText('Report Information')).toBeInTheDocument()
    })
  })
})
