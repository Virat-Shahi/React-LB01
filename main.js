function App(){
    const y = new Date().getFullYear() - 1998
    const m = new Date().getMonth() - 5
    const d = new Date().getDate() - 22
    const st1 = {color: 'red', backgroundColor:'lime'}
    const st2 = {color: 'yellow', backgroundColor:'red'}
    return(
    <div>
        <h1 style={st1}>Virat Shahi Bithdate is : 22/05/1998</h1>
        <p style={st2}>Age : 26</p>
        <p >challenge:{y} /{m} /{d}</p>
    </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root')).render(<App />);