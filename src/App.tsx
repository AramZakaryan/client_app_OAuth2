import styles from './App.module.scss';

function App() {

    return (
        <>
            <h2 className={styles.h2}>react vite ts</h2>
            <h2 className={styles.h2}>{import.meta.env.VITE_SOME_VARIABLE}</h2>
        </>
    )
}

export default App
