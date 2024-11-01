import { useState } from 'react';
import Button from "./Components/Buttons"; 
import './styles.css';
import STSImage from './images/STS.png'; 
import IroncladImage from "./images/Les classes fig.png"; 
import RelicData from './Components/RelicData'; 

export function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleButtonClick = (className: string) => {
    const urls: Record<string, string> = {
      'Le Soldat de fer': 'https://slay-the-spire.fandom.com/wiki/The_Ironclad',
      'La Silencieuse': 'https://slay-the-spire.fandom.com/wiki/The_Silent',
      'Le Défectueux': 'https://slay-the-spire.fandom.com/wiki/The_Defect',
      'La Gardienne': 'https://slay-the-spire.fandom.com/wiki/The_Watcher',
    };

    const url = urls[className];
    if (url) {
      window.open(url, '_blank'); 
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"> <strong>Cartes</strong></li>
          <li className="nav-item"><strong>Reliques</strong></li>
          <li className="nav-item"><strong>Ennemis</strong></li>
          <li className="nav-item"><strong>Evenements</strong></li>
          <li className="nav-item"><strong>Astuces</strong></li>
          <li className="nav-item"><strong>Stratégies</strong></li>
          <li className="nav-item">
            <a href="https://slay-the-spire.fandom.com/" target="_blank" rel="noopener noreferrer">
              Wiki
            </a>
          </li>
        </ul>
        <input type="text" className="search-bar" placeholder="Rechercher..." />
      </nav>
      <header className="Titrests">
        <img src={STSImage} className="logosts" alt="Titre Slay the Spire" />
      </header>

      <main>
        <section className="ckoi">
          <h1>Qu'est-ce que Slay the Spire ?</h1>
          <p>Slay the Spire est un jeu de cartes roguelike où les joueurs construisent un deck tout en gravissant une tour remplie de créatures et d'obstacles. Chaque partie est unique grâce à des cartes et des reliques variées, influençant le style de jeu et la stratégie. Mon site sert de base de données pour explorer les différentes classes de personnages, les cartes, et les reliques, offrant aux utilisateurs un aperçu complet et interactif de l'univers de Slay the Spire.</p>
        </section>

        <h2 id="classe">Les classes</h2>
        <p className="ClassDesk">Dans Slay the Spire, les classes de personnages jouent un rôle crucial dans le style de jeu et la stratégie. Chaque classe possède son propre ensemble de cartes, de compétences et de mécanismes uniques, offrant aux joueurs des approches variées pour surmonter les défis du jeu. Que vous choisissiez le Soldat de fer, la Silencieuse, le Défectueux ou la Gardienne, chaque personnage apporte une dynamique distincte, permettant aux joueurs d'explorer différentes synergies et de personnaliser leur expérience de deck-building.</p>

        <section className="suite">
          <div className="Bonhommes">
            <img src={IroncladImage} alt="Ironclad" className="ironclad" />
          </div>
          <div className="buttons">
            <Button onClick={() => handleButtonClick('Le Soldat de fer')}>
              <strong>Le Soldat de fer</strong>
            </Button>
            <Button onClick={() => handleButtonClick('La Silencieuse')}>
              <strong>La Silencieuse</strong>
            </Button>
            <Button onClick={() => handleButtonClick('Le Défectueux')}>
              <strong>Le Défectueux</strong>
            </Button>
            <Button onClick={() => handleButtonClick('La Gardienne')}>
              <strong>La Gardienne</strong>
            </Button>
          </div>
        </section>

        <h2 id="relique">Les reliques</h2>
        <p className="RelicDesk">Dans Slay the Spire, les reliques sont des objets uniques qui confèrent des effets puissants et des bonus permanents à votre personnage tout au long de la partie. Elles peuvent modifier vos statistiques, offrir des capacités spéciales, ou influencer la manière dont vous interagissez avec le jeu. Chaque relique apporte une stratégie distincte, permettant aux joueurs d'adapter leur style de jeu en fonction des reliques qu'ils collectent. En combinant les effets de différentes reliques, vous pouvez créer des synergies puissantes et maximiser vos chances de succès contre les défis du jeu.</p>

        <div className="relic-dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">Afficher les reliques</button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <RelicData />
            </div>
          )}
        </div>
      </main>

      <footer>
        2024 Simon Griscelli Wild Code School. Slay the Spire is not mine, visit megacrit.com. → <a href="https://www.megacrit.com/">❤️</a>
      </footer>
    </div>
  );
}
