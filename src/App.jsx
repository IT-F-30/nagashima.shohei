import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="section container">
          <div className="animate-fade-in-up">
            <h2 className="section-title">私について</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  妥協のない品質と、最新の技術を追求するフロントエンドデベロッパーです。
                  お客様のビジョンを形にし、期待を超える成果物を提供することに情熱を注いでいます。
                </p>
                <p>
                  単にコードを書くだけでなく、UI/UXデザインの視座を持ち、
                  直感的で使いやすいインターフェースの構築を得意としています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section bg-alt">
          <div className="container animate-fade-in-up">
            <h2 className="section-title">スキル・技術</h2>
            <div className="skills-grid">
              {['React', 'TypeScript', 'Next.js', 'Firebase', 'Figma', 'UI/UX'].map(skill => (
                <div key={skill} className="skill-card glass">
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <div className="animate-fade-in-up">
            <h2 className="section-title">制作実績</h2>
            <div className="projects-grid">
              <div className="project-card glass">
                <img src="/ecommerce.png" alt="E-Commerce Platform" className="project-image" />
                <div className="project-info">
                  <h3>Eコマースプラットフォーム</h3>
                  <p>高い成約率を実現する、洗練されたオンラインショップ。</p>
                </div>
              </div>
              <div className="project-card glass">
                <img src="/saas.png" alt="SaaS Dashboard" className="project-image" />
                <div className="project-info">
                  <h3>SaaS管理ダッシュボード</h3>
                  <p>複雑なデータを可視化する、高機能な管理画面。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-alt">
          <div className="container animate-fade-in-up">
            <h2 className="section-title">プロジェクトの相談</h2>
            <div className="contact-container">
              <form className="contact-form glass">
                <div className="form-group">
                  <label>お名前</label>
                  <input type="text" placeholder="姓名" />
                </div>
                <div className="form-group">
                  <label>メールアドレス</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>メッセージ</label>
                  <textarea placeholder="プロジェクトの詳細やご相談内容をご記入ください" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">送信する</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>&copy; 2025 [お名前]. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
