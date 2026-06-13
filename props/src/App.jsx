import Student from './Student.jsx'
function App()
{
  return(
    <>
    <Student name="Shivani"
     age={21}
     isStudent={true} />

     <Student name="Luke"
     age={21}
     isStudent={true}/>

     <Student name="Alex"
     age={27}
     isStudent={false}/>

     <Student name="Claire"
     age={52}
     isStudent={false} />

     <Student name="Haley"
     age={30}
     isStudent={false} />

     <Student name="Phil"
     age={53}/>
    </>
    

  );
}
export default App