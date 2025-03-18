import ReactMarkdown from "react-markdown";
import aboutMe from "../content/AboutMe"; // Adjusted path

const AboutPage = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                    src="/info/about.jpeg"
                    alt="Ashu Adhikari"
                    className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="text-gray-600">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-xl font-medium text-gray-700 mt-3 mb-2">{children}</h3>,
                            p: ({ children }) => <p className="text-gray-600 mb-3">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
                            li: ({ children }) => <li className="mb-1">{children}</li>,
                            a: ({ href = "", children }) => { // Ensure href is always a string
                                const isExternal = href.startsWith("http");
                                const isMailto = href.startsWith("mailto:");

                                return (
                                    <a
                                        href={href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            if (isMailto) {
                                                e.preventDefault(); // Prevent page change
                                                window.open(href, "_blank"); // Open mail client
                                            }
                                        }}
                                    >
                                        {children}
                                    </a>
                                );
                            },
                        }}
                    >
                        {aboutMe}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
