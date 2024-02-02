import { useState } from "react";

function Password({ password }) {
    const [show, setShow] = useState(false);
    return (
        <section className="relative mb-4 mt-4 flex h-16 items-center justify-between bg-gray-600 px-4 md:mb-6 md:mt-8 md:h-20 md:px-8">
            <span className="text-500 before:opacity-25 empty:before:content-['P4$5W0rD!'] xs:text-[20px] sm:text-600 md:text-700">
                {password}
            </span>
            <svg
                className="h-5 cursor-pointer fill-green hover:fill-white md:h-6"
                onClick={(event) => {
                    if (show === true) {
                        event.preventDefault();
                    } else {
                        navigator.clipboard.writeText(password);
                        setShow(true);
                        setTimeout(() => {
                            setShow(false);
                        }, 2500);
                    }
                }}
                viewBox="0 0 21 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
            </svg>

            {show && (
                <span className="absolute -top-5 right-0 animate-fade text-300 leading-4 text-green opacity-0 md:-top-8 md:text-500">
                    COPIED
                </span>
            )}
        </section>
    );
}

export default Password;
