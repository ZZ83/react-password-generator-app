import { useState } from "react";
import Password from "./Password";
import CharaterLength from "./CharaterLength";
import Checkboxes from "./Checkboxes";
import StrengthMeter from "./StrengthMeter";
import GeneratePassword from "./GeneratePassword";

function App() {
    const [password, setPassword] = useState("");
    const [charaterLength, setCharaterLength] = useState(10);

    const [isCheckboxChecked, setIsCheckboxChecked] = useState({
        uppercase: [false, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        lowercase: [false, "abcdefghijklmnopqrstuvwxyz"],
        numbers: [false, "0123456789"],
        symbols: [false, "!@#$%^&*"],
    });

    function handleCheckboxChange(str, event) {
        const copy = { ...isCheckboxChecked };
        copy[str][0] = event.target.checked;
        setIsCheckboxChecked({ ...copy });
    }

    function getRandomCharater(string) {
        let randomIndex = Math.floor(Math.random() * string.length);
        return string[randomIndex];
    }

    function generatePassword() {
        let password = "";
        let passwordCharaters = "";
        const isAtLeaseOneTrue = Object.values(isCheckboxChecked).filter((arr) => arr.includes(true));
        if (isAtLeaseOneTrue.length >= 1 && charaterLength > 0) {
            for (const key in isCheckboxChecked) {
                if (isCheckboxChecked[key][0] === true) {
                    passwordCharaters += isCheckboxChecked[key][1];
                    password += getRandomCharater(isCheckboxChecked[key][1]);
                }
            }
            for (let i = 0; i < charaterLength; i++) {
                password += getRandomCharater(passwordCharaters);
            }
            setPassword(password.slice(0, charaterLength));
        } else {
            alert("Please select at least one checkbox");
        }
    }

    return (
        <div className="h-screen w-full bg-gray-800 font-jetBrainsMono text-400 text-white">
            <div className="mx-auto max-w-[35.75rem] px-4">
                <h1 className="pt-16 text-center text-gray-500 md:pt-32 md:text-600">Password Generator</h1>
                <main>
                    <Password password={password} />
                    <div className="bg-gray-600 px-4 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6">
                        <CharaterLength charaterLength={charaterLength} setCharaterLength={setCharaterLength} />
                        <Checkboxes handleCheckboxChange={handleCheckboxChange} />
                        <section className="mb-4 flex h-14 items-center justify-between bg-gray-700 px-4 md:mb-8 md:h-[4.5rem] md:px-8">
                            <h2 className="mt-0.5 text-300 xs:mt-0 xs:text-400 md:text-500">STRENGTH</h2>
                            <StrengthMeter password={password} />
                        </section>
                        <GeneratePassword generatePassword={generatePassword} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
