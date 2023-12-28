function Button() {
    return (
        <button
            id="generateButton"
            className="flex h-14 w-full items-center justify-center bg-green fill-gray-600 text-gray-600 hover:border-2 hover:border-solid hover:border-green hover:bg-gray-600 hover:fill-green hover:text-green md:h-16 md:text-500"
        >
            GENERATE
            <svg className="ml-4 md:ml-6" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
        </button>
    );
}

export default Button;
