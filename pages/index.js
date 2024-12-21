import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  const handleAddBorders = async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {action: 'addBorders'});
  };

  return (
    <div className={styles.container} style={{padding: '20px', width: '300px'}}>
      <Head>
        <title>DOM Border Highlighter</title>
      </Head>

      <main>
        <h2 style={{marginBottom: '20px', color: '#333'}}>
          DOM Element Highlighter
        </h2>
        
        <button 
          onClick={handleAddBorders}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          Highlight DOM Elementz
        </button>
      </main>
    </div>
  );
}