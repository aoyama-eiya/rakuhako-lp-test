"use client";

import React, { useState, useEffect } from 'react';

const episodes = [
    {
        id: 1,
        title: "見積もりに関するやりとりが手間",
        chat: [
            {
                side: "left",
                icon: "badge", // Vendor
                name: "梱包業者 A社",
                text: "今回の見積もりですが、サイズ確認のため一度持ち帰らせてください。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "えっ、図面送りましたよね？"
            },
            {
                side: "left",
                icon: "badge", // Vendor
                name: "梱包業者 A社",
                text: "念のため現物も見たくて... 来週また伺います。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "来週！？金曜までに出荷しないといけないんです！"
            },
            {
                side: "left",
                icon: "badge", // Vendor
                name: "梱包業者 A社",
                text: "あー、そこまでは予定がいっぱいでして..."
            },
            {
                side: "right",
                type: "thought",
                text: "マジか... こんなことなら他の業者に頼めばよかった..."
            },
            {
                side: "right",
                type: "thought",
                text: "見積もりのやり取りだけで、もう3往復目...手間すぎる..."
            }
        ]
    },
    {
        id: 2,
        title: "夕方17時の急な出荷依頼",
        chat: [
            {
                side: "left",
                icon: "schedule", // Clock/Urgent
                name: "営業担当",
                text: "急ぎで明日着の便、まだ間に合う？頼むよ！"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "えっ、もう集荷終わってますよ..."
            },
            {
                side: "left",
                icon: "schedule", // Clock/Urgent
                name: "営業担当",
                text: "そこをなんとか！お客様めちゃくちゃお怒りなんだよ。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "今から梱包しても、トラックとんぼ返りさせるなんて無理です。"
            },
            {
                side: "left",
                icon: "schedule", // Clock/Urgent
                name: "営業担当",
                text: "営業所に持ち込みできない？"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "2トンですよ！？運べるわけないじゃないですか！"
            },
            {
                side: "right",
                type: "thought",
                text: "もう17時...今から梱包材を手配して梱包なんて絶対無理だ..."
            }
        ]
    },
    {
        id: 3,
        title: "業者の電話が繋がらない",
        chat: [
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "（プルルル...）あー、また話し中！集荷依頼できない！"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "これで5回目だぞ...早くしてくれ..."
            },
            {
                side: "left",
                icon: "call_end", // Busy
                name: "梱包業者 B社",
                text: "ただいま電話に出ることができません。ピーッという発信音の後に..."
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "また留守電かよ！段ボールの在庫あるか確認したいだけなのに。"
            },
            {
                side: "right",
                type: "thought",
                text: "もう！他の業者探す時間もないのに！"
            }
        ]
    },
    {
        id: 4,
        title: "上司に即答できない無力感",
        chat: [
            {
                side: "left",
                icon: "supervisor_account", // Boss
                name: "上長",
                text: "例の案件、コストいくらかかりそう？会議で使うから今すぐ教えて。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "あ、はい。今業者に見積もり依頼中でして..."
            },
            {
                side: "left",
                icon: "supervisor_account", // Boss
                name: "上長",
                text: "まだ？昨日頼んだよね？概算でいいから早く出してよ。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "現物見ないと概算も出せないと言われまして..."
            },
            {
                side: "left",
                icon: "supervisor_account", // Boss
                name: "上長",
                text: "だから仕事遅いんだよ。適当でいいから出して！"
            },
            {
                side: "right",
                type: "thought",
                text: "（適当に出して間違ってたら怒るくせに...）"
            },
            {
                side: "right",
                type: "thought",
                text: "すみません...まだ業者から返事がなくて...（また怒られる...）"
            }
        ]
    }
];

export default function Problem() {
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [visibleMessageCount, setVisibleMessageCount] = useState(0);
    const [isEpisodeTransitioning, setIsEpisodeTransitioning] = useState(false);

    // Episode duration management
    useEffect(() => {
        const episode = episodes[currentEpisodeIndex];
        const totalDuration = episode.chat.length * 1500 + 3000; // Time to show all msgs + pause

        const timer = setTimeout(() => {
            setIsEpisodeTransitioning(true);
            setTimeout(() => {
                setCurrentEpisodeIndex((prev) => (prev + 1) % episodes.length);
                setVisibleMessageCount(0);
                setIsEpisodeTransitioning(false);
            }, 500);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [currentEpisodeIndex]);

    // Message animation management
    useEffect(() => {
        if (isEpisodeTransitioning) return;

        const episode = episodes[currentEpisodeIndex];
        if (visibleMessageCount < episode.chat.length) {
            const timer = setTimeout(() => {
                setVisibleMessageCount(prev => prev + 1);
            }, 800); // Delay between messages
            return () => clearTimeout(timer);
        }
    }, [visibleMessageCount, currentEpisodeIndex, isEpisodeTransitioning]);

    const episode = episodes[currentEpisodeIndex];

    return (
        <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900 mb-8 text-wrap-balance">
                        物流担当者が抱える<br className="md:hidden" />日々の悩み
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-4xl mx-auto leading-relaxed">
                        あなたは本来やるべきコア業務があるのに、<br className="hidden md:block" />
                        <span className="text-red-600 underline decoration-red-200 decoration-4 underline-offset-4">貨物の梱包手配に時間を奪われていませんか？</span>
                    </p>
                </div>

                <div className="relative max-w-[800px] mx-auto min-h-[600px]">
                    {/* Episode Container */}
                    <div
                        className={`transition-all duration-500 transform ${isEpisodeTransitioning ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}
                    >
                        {/* Episode Header */}
                        <div className="flex justify-center mb-10">
                            <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-2 rounded-full shadow-lg">
                                <span className="bg-red-500 text-xs font-bold px-2 py-0.5 rounded">CASE {episode.id}</span>
                                <span className="font-bold text-lg">{episode.title}</span>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="space-y-6 px-4">
                            {episode.chat.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                        flex items-start gap-4 transition-all duration-300 ease-out 
                                        ${idx < visibleMessageCount ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                                        ${msg.side === 'right' ? 'justify-end' : ''}
                                    `}
                                >
                                    {/* Left Icon */}
                                    {msg.side === 'left' && (
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-md flex items-center justify-center text-slate-500">
                                                <span className="material-symbols-outlined text-2xl">{msg.icon}</span>
                                            </div>
                                            <span className="block text-[10px] text-center text-slate-400 mt-2 font-bold">{msg.name}</span>
                                        </div>
                                    )}

                                    {/* Message Bubble */}
                                    <div className={`flex flex-col gap-2 max-w-[80%] md:max-w-[70%] ${msg.side === 'right' ? 'items-end' : 'items-start'}`}>
                                        <div
                                            className={`
                                                p-5 rounded-3xl text-base leading-relaxed shadow-sm relative
                                                ${msg.side === 'right'
                                                    ? 'bg-primary text-white rounded-tr-none'
                                                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'}
                                                ${msg.type === 'thought' ? 'border-dashed border-2 !bg-primary/90' : ''}
                                            `}
                                        >
                                            {msg.type === 'thought' && (
                                                <p className="font-bold mb-2 border-b border-white/20 pb-1 text-xs opacity-80 uppercase tracking-widest flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">psychology</span> 心の声
                                                </p>
                                            )}
                                            {msg.text}
                                        </div>
                                    </div>

                                    {/* Right Icon (Me) */}
                                    {msg.side === 'right' && (
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-2xl">person</span>
                                            </div>
                                            <span className="block text-[10px] text-center text-slate-400 mt-2 font-bold">あなた</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="absolute -bottom-12 left-0 w-full flex justify-center gap-3">
                        {episodes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentEpisodeIndex(idx);
                                    setVisibleMessageCount(0);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${currentEpisodeIndex === idx ? 'w-12 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
