import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="center-element">
      <div>
        <Image alt="logo" src="/logo.png" className="responsive-element" width="300" height="100" /> 
      </div>

      <SignIn />

    </div>
  )
}
