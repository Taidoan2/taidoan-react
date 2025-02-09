// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars
import './style.css';

const MyComponent = () => {
    const ten = 'taidoan1111';
    const so = 27;
    return (
        //fragment <> </>
    <> 
      <div> Hello, {ten}, toi nam nay {so} tuoi</div>
      <div className="child" style={{borderRadius: '10px'}}>child</div>
    </>
    )
  }
 
  export default MyComponent;