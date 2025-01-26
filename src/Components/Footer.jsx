import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300 py-8 cursor-pointer">
            <div className="container mx-auto px-4 text-center">
                <div className="space-y-4">
                    <p className="text-sm">
                        <span className="hover:underline">Terms and Privacy Notice</span>
                        <span className="mx-2">|</span>
                        <span className="hover:underline">Send us feedback</span>
                        <span className="mx-2">|</span>
                        <span className="hover:underline">Help</span>
                    </p>
                    <span className="text-sm text-gray-400">&copy; 1996-2025, Prime-GPT, Inc. or its affiliates</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
