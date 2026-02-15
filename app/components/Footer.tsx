import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/10 pt-20 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/img/header-logo.png" alt="ラクハコキット" className="h-10 w-auto object-contain brightness-0 invert" />
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                            <div>
                                <p className="text-white font-bold mb-2">山口物流 会社概要</p>
                                <p className="leading-relaxed">
                                    〒939-2723<br />
                                    富山県富山市婦中町萩島3253-14
                                </p>
                            </div>
                            <div className="text-white font-bold text-lg">
                                TEL 076-465-6166
                            </div>
                        </div>
                    </div>
                    {/* Navigation Columns */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="space-y-4 text-sm">
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/" target="_blank" rel="noopener noreferrer">HOME</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/service" target="_blank" rel="noopener noreferrer">サービス</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/service/global" target="_blank" rel="noopener noreferrer">国際物流</a>
                            </div>
                            <div className="space-y-4 text-sm">
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/service/packing" target="_blank" rel="noopener noreferrer">梱包</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/service/sales" target="_blank" rel="noopener noreferrer">梱包資材販売</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/service/warehouse" target="_blank" rel="noopener noreferrer">国内物流、倉庫</a>
                            </div>
                            <div className="space-y-4 text-sm">
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/contact" target="_blank" rel="noopener noreferrer">お問合せ</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/news" target="_blank" rel="noopener noreferrer">お知らせ/ブログ</a>
                                <a className="block text-gray-500 hover:text-white transition-colors" href="https://www.yamaguchi-butsuryu.com/case" target="_blank" rel="noopener noreferrer">CASE</a>
                            </div>
                        </div>
                    </div>
                    {/* Message Column */}
                    <div className="space-y-6">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            御見積やご相談がございましたら、お気軽にお問い合わせください。専門スタッフが迅速かつ丁寧に対応いたします。
                        </p>
                        <a className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-bold" href="https://www.yamaguchi-butsuryu.com/contact" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-lg">mail</span>
                            お問い合わせ
                        </a>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs">© 2024 Yamaguchi Butsuryu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
