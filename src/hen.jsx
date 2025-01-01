import Egg from './egg.jsx'

function Hen({name})
{
    return (
        <>
        <div>
            <h1>HEN</h1>
            <Egg name= {name}/>
        </div>
        </>
    );
}
export default Hen;