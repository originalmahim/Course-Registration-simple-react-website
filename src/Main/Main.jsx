import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
const Main = ({course,handleSelect}) => {
const {id,cover,title,description,price,credit} = course;
          return (
          <div className=" rounded-lg border-2 border-solid shadow-lg p-3">
          <div>
          <img className="rounded-lg  h-52 w-80" src={cover} />
          <h1 className="text-xl font-medium text-center">{title}</h1>
          <p className="text-center mt-1 ">{description}</p>
          </div>
          <div className="flex justify-between my-1">
          <p className="font-medium text-xl flex items-center justify-center"><FiDollarSign></FiDollarSign> Price: {price}</p>
          <p className='flex items-center gap-1 text-xl font-medium'><BsBook></BsBook> Credit : {credit}hr</p>
          </div>
          
          </div>        
          );
};

export default Main;