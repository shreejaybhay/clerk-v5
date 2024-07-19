import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center w-full h-[calc(100vh-60px)]">
            <SignUp />
        </div>
      )
}
