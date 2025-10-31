import { OnboardingProvider } from "./store";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}