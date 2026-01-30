import React from 'react';

export default function Story() {
    return (
        <section className="relative bg-white dark:bg-gray-950 py-32 px-8 xl:px-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 shadow-2xl">
                                <img alt="President of Yamaguchi Butsuryu" className="w-full h-full object-cover" src="/img/yamagutishatyounogazou.jpg" />
                                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                                    <p className="text-2xl font-bold">山口 秀佳</p>
                                    <p className="text-sm tracking-widest opacity-80 uppercase">President, Yamaguchi Butsuryu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-10">
                            <h2 className="text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-[#111617] dark:text-white">
                                <span className="block whitespace-nowrap">物流を止めない。</span>
                                <span className="block whitespace-nowrap"><span className="text-primary italic">現場の苦労</span>をなくしたい。</span>
                            </h2>
                        </div>
                        <div className="relative space-y-8 text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                            <span className="material-symbols-outlined absolute -top-12 -left-8 text-8xl text-gray-100 dark:text-gray-800 -z-10 select-none">format_quote</span>
                            <p className="mb-6">
                                長年、物流の現場で汗を流してきました。その中で目の当たりにしたのは、過酷な労働環境と、後継者不足により失われゆく熟練職人の尊い技術でした。
                            </p>
                            <div className="pl-6 border-l-4 border-primary mb-6">
                                <p className="font-bold text-2xl text-[#111617] dark:text-white mb-4 text-wrap-balance leading-relaxed">
                                    「このままでは、日本の物流が止まってしまう」
                                </p>
                                <p className="text-base text-primary font-medium">
                                    その危機感が、私たちの開発の原動力でした。
                                </p>
                            </div>
                            <p className="mb-6">
                                私たちは、この業界の未来を救うために立ち上がりました。ラクハコキットは、単なるデジタルツールではありません。それは<span className="font-bold text-[#111617] dark:text-white underline decoration-primary decoration-4 underline-offset-4">現場の悲鳴から生まれた希望</span>です。
                            </p>
                            <p>
                                職人の長年の勘と経験をデジタル化し、誰でも高い品質で作業が行える環境を整えること。現場の負担を劇的に軽減し、次世代が誇りを持って働ける業界を創ること。それが私の、そして私たちの変わらぬ使命です。
                            </p>
                        </div>
                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-px w-16 bg-primary/30"></div>
                            <p className="font-bold text-lg dark:text-white">山口物流 代表取締役 山口 秀佳</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
