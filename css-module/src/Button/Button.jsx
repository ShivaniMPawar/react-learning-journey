import styles from './Button.module.css';
function Button(){



    {/*Inline CSS
        const styles={
        background-color:"lightcoral",
        padding:"10px 20px",
        color:"black",
        border-radius:"5px",
        border:"none",
        cursor:"pointer",
        }
        return (
        <Button style={styles}>Click Me!<Button/>);
        */}
    
    return (
        <buttom className={styles.button}>Click Me!</buttom>
    );

}
export default Button