"use client";

import React, { useRef, useEffect, useState } from 'react';

// Simple hook for scroll animation
const useScrollAnimation = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${isVisible
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-16 scale-95 blur-md'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default function Future() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header - The Declaration */}
                <AnimatedSection className="text-center mb-32">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                        もう、業者とのやり取りは<span className="hidden lg:block lg:h-0"></span>
                        <span className="text-primary relative inline-block">
                            必要ありません
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                        。
                    </h2>
                    <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-loose">
                        梱包手配の時間が、劇的に変わります。<br />
                        本来の業務に集中し、定時で帰って家族と過ごす。<br />
                        そんな「利用後の幸福な未来」がここにあります。
                    </p>
                </AnimatedSection>

                {/* Time Comparison Graphic */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40">
                    <AnimatedSection delay={100} className="relative">
                        {/* Before */}
                        <div className="mb-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-slate-400 font-bold tracking-wider text-sm">これまでの業務</span>
                                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-black">週 3時間</span>
                            </div>
                            <div className="h-16 bg-slate-100 rounded-2xl relative overflow-hidden w-full border border-slate-200">
                                <div className="absolute inset-y-0 left-0 bg-slate-300 w-full flex items-center px-6 text-white font-black tracking-widest striped-bg-light">
                                    PACKING TIME...
                                </div>
                            </div>
                        </div>

                        {/* After */}
                        <div className="relative transform lg:scale-110 lg:translate-x-4 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-primary font-bold tracking-wider text-lg">ラクハコ導入後</span>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black border border-primary/20">週 5分</span>
                            </div>
                            <div className="h-28 bg-gradient-to-r from-primary to-blue-600 rounded-3xl shadow-2xl shadow-primary/30 relative overflow-hidden flex items-center px-10">
                                <span className="text-4xl font-black text-white italic tracking-tighter mr-auto">SUCCESS!</span>
                                <span className="text-5xl font-black text-white">5<span className="text-xl font-bold ml-1 opacity-80">min</span></span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={300} className="space-y-8">
                        <h3 className="text-4xl font-black text-slate-900 leading-tight">
                            圧倒的な<span className="text-primary">「時間」</span>が<br />生まれる。
                        </h3>
                        <p className="text-slate-500 text-lg leading-loose font-medium">
                            これまで「見積もり依頼」「回答待ち」「業者選定」にかかっていた時間を、独自のアルゴリズムシステムが瞬時に解決。<br />
                            週3時間かかっていた作業が、わずか5分で完了します。
                        </p>
                    </AnimatedSection>
                </div>

                {/* Features Details - Zigzag Layout */}
                <div className="mt-32 space-y-40">
                    {/* Feature 1: Sokuji Wakaru - Left Image, Right Text */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/sokujiwakaru.png`}
                                alt="即時わかる機能イメージ"
                                className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]"
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="space-y-6">
                            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                即時わかる
                            </h3>
                            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                            <p className="text-xl text-slate-500 leading-loose font-medium">
                                面倒な見積もり依頼は不要。<br />
                                サイズを入力するだけで、瞬時に最適な梱包仕様と価格を提示します。
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Feature 2: Shinchoku ga Wakaru - Right Image, Left Text */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection className="lg:order-2 relative group perspective-1000">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/sinntyokugawakaru.png`}
                                alt="進捗がわかる機能イメージ"
                                className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:-rotate-y-2 group-hover:scale-[1.02]"
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="lg:order-1 space-y-6">
                            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                進捗がわかる
                            </h3>
                            <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
                            <p className="text-xl text-slate-500 leading-loose font-medium">
                                「いつ届くの？」という問い合わせに即答。<br />
                                製造・出荷・配送のステータスをリアルタイムで可視化します。
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Feature 3: Saichumon Shiyasui - Left Image, Right Text */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-green-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/saityuumonsiyasui.png`}
                                alt="再注文しやすい機能イメージ"
                                className="relative w-full rounded-[2.5rem] shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]"
                            />
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="space-y-6">
                            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                再注文しやすい
                            </h3>
                            <div className="w-20 h-1 bg-green-500 rounded-full mb-8"></div>
                            <p className="text-xl text-slate-500 leading-loose font-medium">
                                過去の履歴から1クリックで再発注。<br />
                                担当者が変わっても、同じ品質・同じ仕様でスムーズに手配できます。
                            </p>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Conclusion */}
                <AnimatedSection className="mt-48 max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl lg:text-6xl font-black text-slate-900 mb-12 leading-tight tracking-tight">
                        「誰でもできる」が、<br />
                        <span className="text-primary relative inline-block">
                            組織を強くする。
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h3>
                    <p className="text-xl lg:text-2xl text-slate-500 leading-loose font-medium">
                        特定の担当者の記憶や経験に頼る必要はありません。<br />
                        すべての履歴と仕様がシステムに可視化されることで、<br className="hidden lg:block" />
                        誰もが迷わず、正確な手配が可能に。<br />
                        <span className="text-slate-900 font-bold border-b-2 border-primary/30">業務の標準化</span>が、組織のリスクを最小化し、成長を加速させます。
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
