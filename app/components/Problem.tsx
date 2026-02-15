"use client";

import React from 'react';

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

                <div className="space-y-32">
                    {episodes.map((episode) => (
                        <div key={episode.id} className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Title */}
                            <div className="text-left">
                                <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-4">CASE {episode.id}</span>
                                <h3 className="text-3xl lg:text-4xl font-black text-red-600 leading-snug">
                                    {episode.title}
                                </h3>
                                <div className="h-1 w-20 bg-slate-200 mt-6"></div>
                            </div>

                            {/* Right: Smartphone Interaction */}
                            <div className="relative mx-auto w-full max-w-[350px]">
                                {/* Phone Frame */}
                                <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] shadow-xl">
                                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                                    {/* Screen */}
                                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">
                                        {/* Status Bar Mock */}
                                        <div className="h-8 bg-slate-100 w-full shrink-0 z-10 flex items-center justify-between px-6 text-[10px] text-slate-500 font-bold">
                                            <span>9:41</span>
                                            <div className="flex gap-1">
                                                <span className="material-symbols-outlined text-[10px]">signal_cellular_alt</span>
                                                <span className="material-symbols-outlined text-[10px]">wifi</span>
                                                <span className="material-symbols-outlined text-[10px]">battery_full</span>
                                            </div>
                                        </div>

                                        {/* Chat Header */}
                                        <div className="bg-slate-100 border-b border-slate-200 p-3 flex items-center gap-3 shrink-0 z-10">
                                            <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-white">
                                                <span className="material-symbols-outlined text-sm">person</span>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">Message</span>
                                        </div>

                                        {/* Chat Content */}
                                        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                                            {episode.chat.map((msg, idx) => (
                                                <div key={idx} className={`flex items-end gap-2 ${msg.side === 'right' ? 'justify-end' : ''}`}>
                                                    {msg.side === 'left' && (
                                                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 shrink-0">
                                                            {msg.icon === 'badge' ? '🏢' : msg.icon === 'schedule' ? '⏰' : msg.icon === 'call_end' ? '📞' : msg.icon === 'supervisor_account' ? '👔' : '👤'}
                                                        </div>
                                                    )}
                                                    <div className={`p-3 rounded-2xl max-w-[80%] text-xs leading-relaxed shadow-sm
                                                        ${msg.side === 'right' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none'}
                                                        ${msg.type === 'thought' ? 'border-dashed border-2 border-primary/50 !bg-white !text-slate-500' : ''}
                                                    `}>
                                                        {msg.type === 'thought' && <span className="block text-[8px] font-bold opacity-70 mb-1">心の声</span>}
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Input Area Mock */}
                                        <div className="p-3 bg-white border-t border-slate-200 shrink-0">
                                            <div className="h-8 bg-slate-100 rounded-full w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
