import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

export default function HomePage() {
  return (
    <div className="">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <p>On the homepage!</p>
    </div>
  );
}
