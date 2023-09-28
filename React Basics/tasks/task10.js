function Discount(){
  return <p>Congrats, a 30% discount will be applied at checkout!</p> }

function OfferDiscount(){
  return <p>Provide your email for a 30% discount!</p>
}

function DiscountHeader(props){
  return props.discountApplied ? <Discount/> : <OfferDiscount/>
}

function App() { 
  return (
    <DiscountHeader discountApplied={true} /> 
  ) 
}; 

export default App;

/* Task

Create 3 components: 

1. Discount - Should display the message "Congrats, a 30% discount will be applied
at checkout!"
2. OfferDiscount - Should display the message "Provide your email for a 30% discount!"
3. DiscountHeader - Receives a prop called "discountApplied". Should display
Discount component OR OfferDiscount component, depending on whether discountApplied is true or false. 

 */
