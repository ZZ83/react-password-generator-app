function Checkboxes({ handleCheckboxChange }) {
    return (
        <section>
            {/* Uppercase Checkbox */}
            <div className="mb-5 flex gap-5 md:gap-6">
                <div className="relative inline-flex items-center">
                    <input
                        className="checked:before:bg-red-500 peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-white checked:border-green checked:bg-green hover:border-green"
                        id="uppercaseCheckbox"
                        type="checkbox"
                        onChange={(event) => {
                            handleCheckboxChange("uppercase", event);
                        }}
                    />
                    <svg
                        className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                        width="14"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                    </svg>
                </div>
                <label className="cursor-pointer text-300 xs:text-400 md:text-500" htmlFor="uppercaseCheckbox">
                    Include Uppercase Letters
                </label>
            </div>
            {/* Lowercase Checkbox */}
            <div className="mb-5 flex gap-5 md:gap-6">
                <div className="relative inline-flex items-center">
                    <input
                        className="checked:before:bg-red-500 peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-white checked:border-green checked:bg-green hover:border-green"
                        id="lowercaseCheckbox"
                        type="checkbox"
                        onChange={(event) => {
                            handleCheckboxChange("lowercase", event);
                        }}
                    />
                    <svg
                        className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                        width="14"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                    </svg>
                </div>
                <label className="cursor-pointer text-300 xs:text-400 md:text-500" htmlFor="lowercaseCheckbox">
                    Include Lowercase Letters
                </label>
            </div>
            {/* Numbers Checkbox */}
            <div className="mb-5 flex gap-5 md:gap-6">
                <div className="relative inline-flex items-center">
                    <input
                        className="checked:before:bg-red-500 peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-white checked:border-green checked:bg-green hover:border-green"
                        id="numbersCheckbox"
                        type="checkbox"
                        onChange={(event) => {
                            handleCheckboxChange("numbers", event);
                        }}
                    />
                    <svg
                        className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                        width="14"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                    </svg>
                </div>
                <label className="cursor-pointer text-300 xs:text-400 md:text-500" htmlFor="numbersCheckbox">
                    Include Numbers
                </label>
            </div>
            {/* Symbols Checkbox */}
            <div className="mb-8 flex gap-5 md:gap-6">
                <div className="relative inline-flex items-center">
                    <input
                        className="checked:before:bg-red-500 peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-white checked:border-green checked:bg-green hover:border-green"
                        id="symbolsCheckbox"
                        type="checkbox"
                        onChange={(event) => {
                            handleCheckboxChange("symbols", event);
                        }}
                    />
                    <svg
                        className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                        width="14"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                    </svg>
                </div>
                <label className="cursor-pointer text-300 xs:text-400 md:text-500" htmlFor="symbolsCheckbox">
                    Include Symbols
                </label>
            </div>
        </section>
    );
}

export default Checkboxes;
