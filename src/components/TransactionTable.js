import React,{useState} from 'react';

function TransactionTable({txns}) {
  const [state, setstate] = useState("2019-11-29");

  const dateValidation = (e)=>{
    setstate( e.target.value);
    console.log(e.target.value);
  }

  const [filterValidate, setfilterValidate] = useState(false);
  const [dataTransactions,setdataTransactions]= useState(txns);

  const ok =()=>{
    setfilterValidate(true);
    setdataTransactions(txns.filter(e=>e.date===state));
    console.log(dataTransactions)
  }

  const order = () => {
    setdataTransactions(
      dataTransactions.sort(((a, b) => b.amount - a.amount))
    )
    console.log("ok", dataTransactions)
  };




  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" value={state} onChange={dateValidation} />
        <button className="small" onClick={ok}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                     <a> <span id="amount" onClick={order}>Amount ($)</span></a>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
              
                { 
                filterValidate==true ?(dataTransactions.map(data=>(
                  <tr key={data.date}>
                    <td>{data.date}</td>
                    <td>{data.description}</td>
                    <td>{data.type===1 ? "DEBIT":"CREDIT" } </td>
                    <td>{data.amount}</td>
                    <td>{data.balance}</td>    
  
                  </tr>
                  ))):((<div></div>))
                }

              
                  
                 
              
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
