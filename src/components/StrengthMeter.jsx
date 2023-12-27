function StrengthMeter() {
    return (
        <div className="flex items-center gap-2 sm:gap-4 md:h-8">
            <span className="text-400 uppercase xs:text-500 md:text-600"></span>

            <div className="flex gap-1 xs:gap-2">
                <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
                <div className="h-7 w-2.5 border-2 border-solid border-white"></div>
            </div>
        </div>
    );
}

export default StrengthMeter;
