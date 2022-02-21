import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Editor from '../components/Editor'
import ExampleDocument from '../utils/ExampleDocument';
import Layout from '../components/Layout'

export default function Home() {

const [document, updateDocument] = useState(ExampleDocument);

  return (
    <div className={styles.container}>
    {/* <Layout /> */}
    {/* <Editor document={document} onChange={updateDocument} /> */}
    </div>
  )
}
