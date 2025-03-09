import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-5 max-w-8/12 mx-auto">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <Logo></Logo>
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                <Link href="/start-een-project">
                    <span>Start een project</span>
                </Link>
                <Link href="/hoe-werkt-het">
                    <span>Hoe werkt het?</span>
                </Link>
                <Link href="/over-ons">
                    <span>Over ons</span>
                </Link>
                <Link href="/inloggen">
                    <span className="border border-black rounded-md px-3 py-1 font-bold">Inloggen</span>
                </Link>
            </div>
        </div>
    );
}
