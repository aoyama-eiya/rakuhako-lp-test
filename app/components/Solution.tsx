import React from 'react';

export default function Solution() {
    return (
        <section id="service" className="relative py-24 lg:py-32 bg-[#0F1115] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-3000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-5000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-center mb-16">
                        {/* Badge removed */}
                    </div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            ラクハコキットで、
                        </span>
                        <span className="block text-4xl lg:text-6xl mt-4 text-gray-400 font-bold">
                            構造を劇的に変える。
                        </span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-12"></div>

                    <p className="text-xl lg:text-3xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
                        それは単なる「梱包手配システム」ではありません。<br />
                        あなたのビジネスに<strong className="text-white bg-primary/20 px-2 py-1 rounded mx-1">時間を生み出すシステム</strong>です。
                    </p>
                </div>

                {/* Content moved to Future.tsx */}
            </div>
        </section>
    );
}
