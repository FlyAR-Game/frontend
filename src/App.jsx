import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>FlyAR</h1>
          <p className="tagline">Artırılmış Gerçeklik Tabanlı Mobil Uygulama</p>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>Dünya Kaşifi: Çocuklar için AR Deneyimi</h2>
              <p>
                FlyAR, 6-12 yaş arası çocuklar için tasarlanmış, eğitici ve interaktif bir mobil uygulamadır. 
                Artırılmış Gerçeklik (AR) teknolojisi kullanarak coğrafya, tarih, dil ve kültür 
                alanlarında çocuklara oyun tabanlı bir öğrenme deneyimi sunar.
              </p>
              <div className="button-group">
                <a href="https://github.com/FlyAR-Game" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
                <a href="https://trello.com/b/ZFLTO2Ek/flyar-project-management-department" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Trello</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">Mobil Uygulama</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://i.hizliresim.com/5du1rz5.jpg" alt="AR Gözlüğü" />
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <h2>Uygulama Özellikleri</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src="https://i.hizliresim.com/7vf7fev.jpg" alt="Karakter Oluşturma" style={{width: '100%', height: '250px', objectFit: 'contain'}} />
                <h3>Karakter Oluşturma</h3>
                <p>Çocuklar kendi avatarlarını tasarlayabilir ve keşif ekipmanlarını seçebilir.</p>
              </div>
              <div className="feature-card">
                <img src="https://i.hizliresim.com/7myi4we.jpg" alt="3D Harita" style={{width: '100%', height: '250px', objectFit: 'contain'}} />
                <h3>3D Harita</h3>
                <p>Gerçek dünya üzerinden interaktif rotalar ve öğretici duraklar.</p>
              </div>
              <div className="feature-card">
                <img src="https://i.hizliresim.com/am0d3ay.jpg" alt="Mini Oyunlar" style={{width: '100%', height: '250px', objectFit: 'contain'}} />
                <h3>Mini Oyunlar</h3>
                <p>Coğrafya, kültür, tarih ve dil öğrenmeyi eğlenceli hale getiren oyunlar.</p>
              </div>
              <div className="feature-card">
                <img src="https://i.hizliresim.com/s4cr0da.jpg" alt="Ödül Sistemi" style={{width: '100%', height: '250px', objectFit: 'contain'}} />
                <h3>Ödül Sistemi</h3>
                <p>Kaşif pasaportu ve süper kaşif seviye sistemi ile motivasyon.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2>Ekibimiz</h2>
            <div className="team-lead" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
              <img src="https://i.hizliresim.com/eqqffg0.jpg" alt="Proje Yöneticisi" className="team-image" />
              <h3>Yusuf Yazıcı</h3>
              <p>Proje Yöneticisi</p>
            </div>
            <div className="team-members" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
              <div className="team-member" style={{textAlign: 'center'}}>
                <img src="https://i.hizliresim.com/1jgfpq8.jpg" alt="Takım Üyesi" />
                <h4>Mustafa Ergün</h4>
              </div>
              <div className="team-member" style={{textAlign: 'center'}}>
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Takım Üyesi" />
                <h4>Vedat Aydın</h4>
              </div>
              <div className="team-member" style={{textAlign: 'center'}}>
                <img src="https://i.hizliresim.com/bxxrx0u.jpg" alt="Takım Üyesi" />
                <h4>Mert İşler</h4>
              </div>
              <div className="team-member" style={{textAlign: 'center'}}>
                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Takım Üyesi" />
                <h4>Yusuf Tokay</h4>
              </div>
              <div className="team-member" style={{textAlign: 'center'}}>
                <img src="https://i.hizliresim.com/lh6xfzk.jpg" alt="Takım Üyesi" />
                <h4>Emir Yıldırım</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 FlyAR - Tüm Hakları Saklıdır</p>
        </div>
      </footer>
    </div>
  )
}

export default App
