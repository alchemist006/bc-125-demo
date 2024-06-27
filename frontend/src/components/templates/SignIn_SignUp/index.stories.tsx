import { StoryFn, Meta } from '@storybook/react'
import SignInSignUpTemplate from '.'
import OtpCard from '../../organisms/OTPCard'
import PrivacyPolicy from '../../../../public/assets/images/PrivacyPolicy.svg'
import SignUp from '../../organisms/SignUp'

export default {
  title: 'Templates/signIn_signUp',
  component: SignInSignUpTemplate
} as Meta

const Template: StoryFn<typeof SignInSignUpTemplate> = (args) => <SignInSignUpTemplate {...args} />

export const Sign_up = Template.bind({});
Sign_up.args = {
  body: <SignUp />,
  image: PrivacyPolicy ,
};

export const OTP = Template.bind({})
OTP.args = {
  body: <OtpCard />,
  image: PrivacyPolicy
}