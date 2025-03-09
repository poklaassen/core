import { Bolt } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <Bolt size="24" />
            <span className="font-bold text-3xl">Bedrijfsnaam</span>
        </div>
    );
}
