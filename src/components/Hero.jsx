import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content animate-fade-in-up">
                <h2 className="hero-subtitle">こんにちは、開発者の[お名前]です</h2>
                <h1 className="hero-title">
                    情熱を持って、<br />
                    <span className="text-gradient">高品質なデジタル</span> 体験を<br />
                    構築します。
                </h1>
                <p className="hero-description">
                    ユーザーの心を動かし、ビジネスの成果を最大化する。
                    視覚的に美しく、パフォーマンスに優れたWebアプリケーションを提供します。
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn btn-primary">制作実績を見る</a>
                    <a href="#contact" className="btn btn-outline">お問い合わせ</a>
                </div>
            </div>
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Hero;
