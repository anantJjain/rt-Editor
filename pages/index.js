import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Editor from '../components/Editor'
import ExampleDocument from '../utils/ExampleDocument';

export default function Home() {

const [document, updateDocument] = useState(ExampleDocument);

  return (
    <div className={styles.container}>
    <Editor document={document} onChange={updateDocument} />
    </div>
  )
}
