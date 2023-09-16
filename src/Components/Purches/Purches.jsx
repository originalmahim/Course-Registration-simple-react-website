const Purches = ({select,credit,price,timeremain}) => {
          return (
          <div className="w-1/4 rounded-lg border-2 border-solid shadow-lg p-3 h-80 ">
          <h1 className="text-2xl font-semibold text-center text-blue-500 mb-1">Credit Hour Remaining {timeremain} hr</h1> 
           <hr />
           <div className="my-2 px-5">
           <h1 className="text-2xl font-medium">Course Name</h1>
           <ol className="list-decimal">
           {
          select.map(title => <li className="text-xl pl-1 my-2 rounded-lg bg-slate-300" key={title.id}>{title}</li>)
           }
          </ol>

          </div>
          <hr />

          <h1 className="text-xl font-bold">Total Credit Hour : {credit}</h1>
          <hr />
          <h1 className="text-xl font-bold">Total Price : {price} USD</h1>                  
          </div>
          );
};

export default Purches;