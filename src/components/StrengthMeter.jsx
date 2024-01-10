function StrengthMeter({ password }) {
    if (password === "") {
        return null;
    } else if (password.length >= 11) {
        return (
            <div className="flex items-center gap-2 sm:gap-4 md:h-8">
                <span className="text-400 uppercase xs:text-500 md:text-600">Strong</span>
                <div className="flex gap-1 xs:gap-2">
                    <div className="h-7 w-2.5 bg-green"></div>
                    <div className="h-7 w-2.5 bg-green"></div>
                    <div className="h-7 w-2.5 bg-green"></div>
                    <div className="h-7 w-2.5 bg-green"></div>
                </div>
            </div>
        );
    } else if (password.length >= 9) {
        return (
            <div className="flex items-center gap-2 sm:gap-4 md:h-8">
                <span className="text-400 uppercase xs:text-500 md:text-600">Medium</span>
                <div className="flex gap-1 xs:gap-2">
                    <div className="h-7 w-2.5 bg-yellow"></div>
                    <div className="h-7 w-2.5 bg-yellow"></div>
                    <div className="h-7 w-2.5 bg-yellow"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                </div>
            </div>
        );
    } else if (password.length >= 6) {
        return (
            <div className="flex items-center gap-2 sm:gap-4 md:h-8">
                <span className="text-400 uppercase xs:text-500 md:text-600">Weak</span>

                <div className="flex gap-1 xs:gap-2">
                    <div className="h-7 w-2.5 bg-orange"></div>
                    <div className="h-7 w-2.5 bg-orange"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex items-center gap-2 sm:gap-4 md:h-8">
                <span className="text-400 uppercase xs:text-500 md:text-600">TOO WEAK!</span>
                <div className="flex gap-1 xs:gap-2">
                    <div className="h-7 w-2.5 bg-red"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                </div>
            </div>
        );
    }
}

export default StrengthMeter;
