"use client";

import React from 'react';

const episodes = [
    {
        id: 1,
        title: "見積もりに関するやりとりが手間",
        chatPartner: "梱包業者 A社",
        chat: [
            {
                side: "left",
                icon: "badge",
                name: "梱包業者 A社",
                text: "サイズ確認のため一度持ち帰らせてください。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "図面送りましたよね？"
            },
            {
                side: "left",
                icon: "badge",
                name: "梱包業者 A社",
                text: "現物も見たくて...来週また伺います。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "来週！？金曜に出荷なんです！"
            },
            {
                side: "left",
                icon: "badge",
                name: "梱包業者 A社",
                text: "そこまでは予定がいっぱいでして..."
            },
            {
                side: "right",
                type: "thought",
                text: "見積もりだけで3往復目...手間すぎる..."
            }
        ]
    },
    {
        id: 2,
        title: "夕方17時の急な出荷依頼",
        chatPartner: "営業部 田中",
        chat: [
            {
                side: "left",
                icon: "schedule",
                name: "営業部 田中",
                text: "急ぎで明日着、まだ間に合う？"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "もう集荷終わってますよ..."
            },
            {
                side: "left",
                icon: "schedule",
                name: "営業部 田中",
                text: "なんとかして！お客様がお怒りで。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "今から梱包しても無理です。"
            },
            {
                side: "left",
                icon: "schedule",
                name: "営業部 田中",
                text: "営業所に持ち込みできない？"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "2トンですよ！？無理です！"
            },
            {
                side: "right",
                type: "thought",
                text: "もう17時...絶対間に合わない..."
            }
        ]
    },
    {
        id: 3,
        title: "業者の電話が繋がらない",
        chatPartner: "梱包業者 B社",
        chat: [
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "また話し中！集荷依頼できない！"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "これで5回目だぞ..."
            },
            {
                side: "left",
                icon: "call_end",
                name: "梱包業者 B社",
                text: "ただいま電話に出ることができません。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "また留守電！在庫確認したいだけなのに。"
            },
            {
                side: "right",
                type: "thought",
                text: "他の業者探す時間もない！"
            }
        ]
    },
    {
        id: 4,
        title: "上司に即答できない無力感",
        chatPartner: "上司",
        chat: [
            {
                side: "left",
                icon: "supervisor_account",
                name: "上司",
                text: "コストいくら？会議で使うから今すぐ教えて。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "今業者に見積もり依頼中でして..."
            },
            {
                side: "left",
                icon: "supervisor_account",
                name: "上司",
                text: "昨日頼んだよね？概算でいいから早く。"
            },
            {
                side: "right",
                icon: "person",
                name: "あなた",
                text: "現物見ないと出せないと言われまして..."
            },
            {
                side: "left",
                icon: "supervisor_account",
                name: "上司",
                text: "適当でいいから出して！"
            },
            {
                side: "right",
                type: "thought",
                text: "適当に出して間違ったら怒るくせに..."
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
                                <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[750px] shadow-xl">
                                    <div className="w-[148px] h-[28px] bg-gray-800 top-0 rounded-b-[18px] left-1/2 -translate-x-1/2 absolute z-20"></div>
                                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                                    {/* Screen */}
                                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">
                                        {/* Status Bar Mock */}
                                        <div className="h-10 bg-slate-100 w-full shrink-0 z-10 flex items-center justify-between px-6 text-[12px] text-slate-500 font-bold">
                                            <span>9:41</span>
                                            <div className="flex gap-1 items-center">
                                                <span className="material-symbols-outlined text-[14px]">wifi</span>
                                                <span className="material-symbols-outlined text-[16px] -mt-[1px]">battery_horiz_075</span>
                                            </div>
                                        </div>

                                        {/* Chat Header */}
                                        <div className="bg-slate-100 border-b border-slate-200 p-3 flex items-center gap-3 shrink-0 z-10">
                                            <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-white">
                                                <span className="material-symbols-outlined text-sm">person</span>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">{episode.chatPartner}</span>
                                        </div>

                                        {/* Chat Content */}
                                        <div className="flex-1 overflow-hidden p-4 space-y-4">
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
