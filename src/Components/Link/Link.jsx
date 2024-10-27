
const Link = ({route}) => {
    return (
        <div>
             <li className="mr-7 rounded-xl p-1 hover:bg-slate-500 " >
             <a href={route.path} >{route.name}</a></li>
        </div>
    );
};

export default Link;