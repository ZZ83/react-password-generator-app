function PasswordStrengthMeter({ password }) {
    let strength = 0;

    if (password.length > 8) {
        strength += 1;
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/\d/)) {
        strength += 1;
    }
    if (password.match(/[^a-zA-Z\d]/)) {
        strength += 1;
    }

    if (password === "") {
        return (
            <div className="flex items-center gap-2 sm:gap-4 md:h-8">
                <div className="flex gap-1 xs:gap-2">
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                    <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                </div>
            </div>
        );
    } else if (strength === 4) {
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
    } else if (strength === 3) {
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
    } else if (strength === 2) {
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

export default PasswordStrengthMeter;
