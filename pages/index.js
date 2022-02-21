import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Editor from '../components/Editor'
import ExampleDocument from '../utils/ExampleDocument';
import Layout from '../components/Layout'
import Toolbar from '../components/Toolbar';
import MessageBox from '../components/MessageBox';

export default function Home() {

const [document, updateDocument] = useState(ExampleDocument);

  return (
    <>
    <div className={styles.container}>
    <div className={styles.text}>Anant Jain</div>
    <div className={styles.Rectangle8219}>
      <Editor document={document} onChange={updateDocument} />
    </div>
    </div>
    <MessageBox />
    </>
  )
}
