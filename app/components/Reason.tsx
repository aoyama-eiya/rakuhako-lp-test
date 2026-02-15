import React from 'react';

export default function Reason() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">
                    なぜ、こんなことが起きているのか？
                </h2>

                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                最大の原因は、<br />
                                <span className="text-red-600">「ベテラン職人への依存」</span>です。
                            </h3>
                        </div>

                        <div className="h-px w-full bg-slate-200"></div>

                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-loose text-left md:text-center">
                            多くの物流現場では、梱包の仕様や価格決定が<br className="hidden md:block" />
                            特定のベテラン社員の知識と経験に依存してしまっています。<br /><br />
                            その結果、担当者が不在だと業務が止まり、<br className="hidden md:block" />
                            誰でもできるはずの業務が、特定の人にしかできない「属人化」した業務になってしまっているのです。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
