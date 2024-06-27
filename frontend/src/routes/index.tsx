import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import CandidatePage from '../pages/Candidate'
import SignUpPage from '../pages/SignUp'
import ForgotPasswordPage from '../pages/ForgotPassword'
import CandidateDetails from '../pages/CandidateDetails'
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import SignInPage from '../pages/signIn'
import AdverseActionPage from '../pages/AdverseAction'
import PreAdverseActionPage from '../pages/PreAdverseAction'
import { HOME_URL, SIGNUP_URL, FORGOT_PASSWORD_URL, CANDIDATES_URL, CANDIDATE_DETAILS_URL, PRE_ADVERSE_ACTION_URL, ADVERSE_ACTIONS_URL } from '../utils/constants'

export const PageRoutes = () => {
  const { isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('isAuthLogin', 'true')
    }
  }, [isAuthenticated])
  const isUserLoggedIn =
    localStorage.getItem('isLogin') === 'true' || localStorage.getItem('isAuthLogin') === 'true'

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<SignInPage />} />
        <Route path={SIGNUP_URL} element={<SignUpPage />} />
        <Route path={FORGOT_PASSWORD_URL} element={<ForgotPasswordPage />} />
        <Route path={CANDIDATES_URL}  element={<CandidatePage />} />
        <Route
          path={CANDIDATE_DETAILS_URL}
          element={isUserLoggedIn ? <CandidateDetails /> : <Navigate to="/" replace />}
        />
        <Route
          path={PRE_ADVERSE_ACTION_URL}
          element={isUserLoggedIn ? <PreAdverseActionPage /> : <Navigate to="/" replace />}
        />
        <Route
          path={ADVERSE_ACTIONS_URL}
          element={isUserLoggedIn ? <AdverseActionPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}
