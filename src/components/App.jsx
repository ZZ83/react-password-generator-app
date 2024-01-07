import { useState } from "react";
import Password from "./Password";
import CharaterLength from "./CharaterLength";
import Checkboxes from "./Checkboxes";
import StrengthMeter from "./StrengthMeter";
import GeneratePassword from "./GeneratePassword";

function App() {
    const [charaterLength, setCharaterLength] = useState(10);

    const [isCheckboxChecked, setIsCheckboxChecked] = useState({
        uppercase: [false, "(?=.*[A-Z])", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        lowercase: [false, "(?=.*[a-z])", "abcdefghijklmnopqrstuvwxyz"],
        numbers: [false, "(?=.*[0-9])", "0123456789"],
        symbols: [false, "(?=.*[!@#$%^&*])", "!@#$%^&*"],
    });

    function handleCheckboxChange(str, event) {
        const copy = { ...isCheckboxChecked };
        copy[str][0] = event.target.checked;
        setIsCheckboxChecked({ ...copy });
    }

    function generatePassword() {
        const isAtLeastOneTrue = Object.values(isCheckboxChecked).includes(true);
        console.log("Generating password...");
    }

    return (
        <div className="h-screen w-full bg-gray-800 font-jetBrainsMono text-400 text-white">
            <div className="mx-auto max-w-[35.75rem] px-4">
                <h1 className="pt-16 text-center text-gray-500 md:pt-32 md:text-600">Password Generator</h1>
                <main>
                    <Password />
                    <div className="bg-gray-600 px-4 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6">
                        <CharaterLength charaterLength={charaterLength} setCharaterLength={setCharaterLength} />
                        <Checkboxes handleCheckboxChange={handleCheckboxChange} />
                        <section className="mb-4 flex items-center justify-between bg-gray-700 px-4 py-3.5 md:mb-8 md:px-8 md:py-5">
                            <h2 className="mt-0.5 text-300 xs:mt-0 xs:text-400 md:text-500">STRENGTH</h2>
                            <StrengthMeter />
                        </section>
                        <GeneratePassword generatePassword={generatePassword} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
