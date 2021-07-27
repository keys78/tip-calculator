import { useState } from 'react'

const TipCalculator = () => {
    const [bill, setBill] = useState('')
    const [person, setPerson] = useState('')
    const [custom, setCustom] = useState('')
    const [num, setNum] = useState(1)
  
    const handle5 = (e) => {
        e.preventDefault()
        setNum(5)
    }

    const handle10 = (e) => {
        e.preventDefault()
        setNum(10)
    }

    const handle15 = (e) => {
        e.preventDefault()
        setNum(15)
    }

    const handle25 = (e) => {
        e.preventDefault()
        setNum(25)
    }

    const handle50 = (e) => {
        e.preventDefault()
        setNum(50)
    }

    const clearFields = (e) => {
        e.preventDefault()

        setBill('')
        setPerson('')
        setNum('')
    }


    return (
        <div>
            <div className="md:w-1/12 w-2/12 mx-auto md:text-center text-left md:mt-28 mt-8 top">SPLI <br></br> TTER </div>
        <div className="xl:w-7/12 lg:w-9/12 w-11/12 mx-auto bg-white rounded-2xl md:px-8 px-3 md:py-4 py-0">
            <form className="container py-6 grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="Input-area">
                    <h1>Bill</h1>
                    <div className="input-holder flex items-center mt-1 mb-8">
                        <img className="pl-2" src={process.env.PUBLIC_URL + '/images/icon-dollar.svg'} />
                        <input type="number"
                         value={bill} onChange={(e) => setBill(e.currentTarget.value)}
                        placeholder="0.00" className="input-group focus:outline-none"/>
                    </div>

                    <h1>Select tip {num} % </h1>
                    <div className="mt-2 grid grid-cols-3 gap-8 mb-8">
                        <button onClick={handle5}  className="percent-boxes">5%</button>
                        <button onClick={handle10} className="percent-boxes">10%</button>
                        <button onClick={handle15} className="percent-boxes">15%</button>
                        <button onClick={handle25} className="percent-boxes">25%</button>
                        <button onClick={handle50} className="percent-boxes">50%</button>
                        <input type="text"
                        value={custom} onChange={(e) => setCustom(e.currentTarget.value)}
                        placeholder="Custom" className="custom"/>
                    </div>

                    <h1>Number of People</h1>
                    <div className="input-holder flex items-center mt-1">
                        <img className="pl-2" src={process.env.PUBLIC_URL + '/images/icon-person.svg'} />
                        <input type="text" 
                         value={person} onChange={(e) => setPerson(e.currentTarget.value)}
                        placeholder="0" className="input-group focus:outline-none"/>
                    </div>
                </div>

                <div className="results-area px-4 py-6 rounded-2xl">
                    <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-2 items-center mb-4">
                        <div>
                            <h1>Tip Amount</h1>
                            <p className="text-base opacity-60 ml-2">/ per person</p>
                        </div>
                        <div className="results">${((bill*( num /100)) / person).toFixed(2) }</div>
                    </div>

                    <div className="grid grid-cols-2 items-center mb-40">
                        <div>
                            <h1>Total</h1>
                            <p className="text-base opacity-60 ml-2">/ per person</p>
                        </div>
                        <div className="results">${(((bill*( num /100)) / person) + (bill/person)).toFixed(2) }</div>
                    </div>

                    <button onSubmit={clearFields} className="py-3 text-center bg-black w-full">RESET</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default TipCalculator