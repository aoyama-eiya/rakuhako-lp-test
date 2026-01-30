import React from 'react';

export default function Flow() {
    return (
        <section id="flow" className="relative w-full bg-background-light dark:bg-background-dark py-32 px-12">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">ご注文の流れ</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400">最短即日で発送手配が可能なシンプルなステップ</p>
                </div>
                <div className="max-w-4xl mx-auto mb-24">
                    <div className="bg-white dark:bg-[#1e2939] rounded-3xl p-8 shadow-2xl shadow-primary/5 border border-primary/10 flex items-center justify-center gap-8 text-center">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">面倒な会員登録は一切不要</h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400">思い立ったその時に、ゲスト購入ですぐに注文を開始できます。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-12 relative max-w-[1200px] mx-auto">
                    <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-xl mb-8 ring-[12px] ring-primary/5 border-4 border-white dark:border-[#111617]">
                            <span className="material-symbols-outlined text-4xl">public</span>
                        </div>
                        <span className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">Step 01</span>
                        <h3 className="text-2xl font-extrabold mb-4 dark:text-white">サイトにアクセス</h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                            ラクハコキットの公式サイトへアクセスし、ラインナップを確認。
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 shadow-lg mb-8">
                            <span className="material-symbols-outlined text-4xl">inventory_2</span>
                        </div>
                        <span className="text-gray-400 text-sm font-black tracking-[0.2em] uppercase mb-4">Step 02</span>
                        <h3 className="text-2xl font-extrabold mb-4 dark:text-white">商品選択</h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                            用途・サイズに合わせて最適な<br />梱包キットをカートに追加。
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 shadow-lg mb-8">
                            <span className="material-symbols-outlined text-4xl">edit_note</span>
                        </div>
                        <span className="text-gray-400 text-sm font-black tracking-[0.2em] uppercase mb-4">Step 03</span>
                        <h3 className="text-2xl font-extrabold mb-4 dark:text-white">注文フォーム入力</h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                            お届け先情報を入力。自動返信<br />メールで詳細をご案内します。
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 shadow-lg mb-8">
                            <span className="material-symbols-outlined text-4xl">local_shipping</span>
                        </div>
                        <span className="text-gray-400 text-sm font-black tracking-[0.2em] uppercase mb-4">Step 04</span>
                        <h3 className="text-2xl font-extrabold mb-4 dark:text-white">発送・納品</h3>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed px-2">
                            最短即日で発送手配。追跡番号で<br />配送状況もご確認いただけます。
                        </p>
                    </div>
                </div>
                <div className="mt-28 flex justify-center">
                    <button className="bg-primary hover:bg-[#1a2c56] text-white font-bold py-6 px-16 rounded-full shadow-[0_20px_50px_rgba(34,58,112,0.3)] flex items-center gap-4 transition-all transform hover:-translate-y-1 active:scale-95 text-xl tracking-wider">
                        <span>梱包キットを今すぐ探す</span>
                        <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
