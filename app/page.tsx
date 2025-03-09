import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="max-w-7/12 mx-auto">
            <div className="ml-8 mt-20 max-w-6/12">
                <h1 className="text-5xl font-extrabold select-none">
                    Hét platform om jouw bouwproject te beheren
                </h1>
            </div>
            <div className="ml-8 mt-20 max-w-6/12">
                <h2 className="text-xl font-semibold select-none">
                    Wat ga jij (ver)bouwen?
                </h2>
            </div>
            <div className="ml-8 mt-8 max-w-6/12">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        className="h-12"
                        placeholder="Voorbeeld: uitbouw"
                    ></Input>
                    <Button className="h-12 text-xl" type="submit">
                        🚀
                    </Button>
                </div>
            </div>
            <div className="ml-8 mt-20 max-w-6/12">
                <h1 className="text-3xl font-extrabold select-none">
                    Hoe werkt het?
                </h1>
            </div>
            <div className="ml-8 mt-8">
                <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-4">
                        <div className="flex font-extrabold items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                            1
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold select-none">
                                Start een project
                            </h2>
                            <p className="text-gray-500 select-none">
                                Vertel ons wat je wilt verbouwen en wij helpen
                                je met het opzetten van een project.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex font-extrabold items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
                            2
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold select-none">
                                Beheer en volg
                            </h2>
                            <p className="text-gray-500 select-none">
                                Beheer de voortgang, planning, het budget en contact
                                met een vakman.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex font-extrabold items-center justify-center w-12 h-12 bg-blue-300 rounded-full">
                            3
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold select-none">
                                Geniet van het resultaat 🎉
                            </h2>
                            <p className="text-gray-500 select-none">
                                Je ontvangt van ons een compleet overzicht van de werkzaamheden.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
