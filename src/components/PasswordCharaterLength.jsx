function PasswordCharaterLength({ passwordCharaterLength, setPasswordCharaterLength }) {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h2 className="md:text-500">Character Length</h2>
                <span className="text-600 text-green md:text-700">{passwordCharaterLength}</span>
            </div>
            <div className="relative mb-8 mt-2 flex h-[1.75rem] items-center md:mt-4">
                <div className="relative flex w-full">
                    <span className="absolute left-0 z-10 h-2 w-full bg-gray-700"></span>
                    <span
                        className="absolute left-0 z-20 h-2 bg-green"
                        style={{ width: `${passwordCharaterLength * 4.95}%` }}
                    ></span>
                    <input
                        className="relative z-30 m-0 h-2 w-full appearance-none bg-transparent outline-none [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:h-[1.75rem] [&::-moz-range-thumb]:w-[1.75rem] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-white hover:[&::-moz-range-thumb]:border-2 hover:[&::-moz-range-thumb]:border-solid hover:[&::-moz-range-thumb]:border-green hover:[&::-moz-range-thumb]:bg-gray-700 active:[&::-moz-range-thumb]:border-2 active:[&::-moz-range-thumb]:border-solid active:[&::-moz-range-thumb]:border-green active:[&::-moz-range-thumb]:bg-gray-700 [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:h-[1.75rem] [&::-webkit-slider-thumb]:w-[1.75rem] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:border-2 hover:[&::-webkit-slider-thumb]:border-solid hover:[&::-webkit-slider-thumb]:border-green hover:[&::-webkit-slider-thumb]:bg-gray-700"
                        onChange={(event) => setPasswordCharaterLength(event.target.value)}
                        type="range"
                        min="0"
                        max="20"
                        value={passwordCharaterLength}
                        autoComplete="off"
                    />
                </div>
            </div>
        </section>
    );
}

export default PasswordCharaterLength;
