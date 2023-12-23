import Password from "./Password";

function App() {
    return (
        <div className="h-screen w-full bg-gray-800 font-jetBrainsMono text-400 text-white">
            <div className="mx-auto max-w-[35.75rem] px-4">
                <h1 className="pt-16 text-center text-gray-500 md:pt-32 md:text-600">Password Generator</h1>
                <main>
                    <Password />
                    <div className="bg-gray-600 px-4 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6"></div>
                </main>
            </div>
        </div>
    );
}

export default App;
