
import { SignIn } from "@/action/auth/signin"
import Button from "../common/button"

export default function SignInForm() {
    return (
        <form
            action={async () => {
                await SignIn("google")
            }}
        >
            <Button type="submit">Sign Up</Button>
        </form>
    )
} 