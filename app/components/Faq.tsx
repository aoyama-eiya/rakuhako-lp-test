"use client";
import React, { useState } from 'react';

const faqs = [
    {
        q: "特殊サイズにも対応できますか？",
        a: "規格外サイズについては、別途お見積りにて対応可能です。まずは診断機能で近いサイズをお試しいただき、備考欄にて詳細をお知らせください。"
    },
    {
        q: "既存の梱包業者と併用できますか？",
        a: "もちろん可能です。案件に応じて使い分けていただけます。特に急ぎの案件や規格品で対応可能な案件でご活用ください。"
    },
    {
        q: "セキュリティは大丈夫ですか？",
        a: "SSL暗号化通信により、お客様の情報は安全に保護されています。また、決済情報は保持せず、都度入力いただく仕組みとなっています。"
    },
    {
        q: "支払い方法は何がありますか？",
        a: "請求書払い（月末締め翌月末払い）、クレジットカード、銀行振込に対応しています。法人のお客様は請求書払いをご利用いただけます。"
    },
    {
        q: "ISPM-15対応は可能ですか？",
        a: "対応可能です。国際輸送用の熱処理済み木材を使用し、ISPM-15マークを刻印した梱包材をご提供できます。ご注文時にオプション選択してください。"
    },
    {
        q: "富山県内送料無料の条件は？",
        a: "1回のご注文が5万円以上、または月額定期利用契約（月10万円以上）をいただいている企業様が対象となります。詳細はお問い合わせください。"
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 antialiased">
            <main className="max-w-[1440px] mx-auto px-6 lg:px-24 py-20 lg:py-32">
                <div className="text-center mb-16 lg:mb-24">
                    <span className="inline-block px-5 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-bold mb-6 tracking-widest uppercase">FAQ</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">よくあるご質問</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        ラクハコキットのご利用にあたって、<br className="hidden md:block" />多く寄せられるお問い合わせをまとめました。
                    </p>
                </div>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 rounded-3xl overflow-hidden ${openIndex === index ? 'border-primary/20 shadow-lg' : 'hover:border-primary/20 hover:shadow-lg'}`}>
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex cursor-pointer items-center justify-between gap-6 p-6 lg:p-8 select-none transition-colors text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                        <span className="font-display font-bold text-lg">Q{index + 1}</span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-base lg:text-lg font-bold leading-tight">
                                        {faq.q}
                                    </h3>
                                </div>
                                <div className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}>
                                    <span className="material-symbols-outlined text-2xl">expand_more</span>
                                </div>
                            </button>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-6 lg:px-8 pb-8">
                                        <div className="flex gap-6 border-t border-slate-100 dark:border-slate-700/50 pt-6">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl text-slate-300 dark:text-slate-600">
                                                <span className="font-display font-bold text-lg">A</span>
                                            </div>
                                            <div className="pt-1">
                                                <p className="text-slate-600 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 lg:p-20 rounded-[3rem] bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden text-center lg:text-left">
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="max-w-3xl text-center mb-12">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6">解決しない場合はこちら</h3>
                            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
                                専門の技術スタッフがお客様のお困りごとを直接解決いたします。ラクハコキットに関するご相談も随時承っております。
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
                            <a className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all active:scale-[0.98] shadow-2xl text-lg w-full sm:w-auto min-w-[240px]" href="https://www.yamaguchi-butsuryu.com/contact/" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">mail</span>
                                お問い合わせ
                            </a>
                            <a className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white font-bold hover:brightness-110 transition-all active:scale-[0.98] shadow-2xl shadow-primary/20 text-lg w-full sm:w-auto min-w-[240px]" href="tel:0764656166">
                                <span className="material-symbols-outlined">phone_in_talk</span>
                                076-465-6166
                            </a>
                        </div>
                    </div>
                    <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 size-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
                </div>
            </main>
        </section>
    );
}
