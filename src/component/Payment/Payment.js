 import React,{useState} from 'react'
 import useForm from './useForm'
import './Payment.css'
import Visa from '../Assets/visa.png'
import Discount from '../Assets/discover.png'
import Paypal from '../Assets/paypal.png'
const Payment = () => {
    const {values,handleChange,handleSubmit} = useForm(payment);
    function payment(){
        console.log(values)
    }
    const number = '4324543393821031';
    const spacedNumber = number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")

    return (
    <div className='payment_container'>
        <div className = 'payment_header_row'>
            <div className ='payment_title'>
                <h1>Payment Information</h1>
                <p>Choose your mode of payment</p>

            </div>
            <div className = 'spacer'></div>
            <div className ='items'>
                <ul>
                    <li><img src={Visa} alt = 'visa' width={50}/></li>
                    <li><img src={Discount} alt = 'Discount' width={50}/></li>
                    <li><img src={Paypal} alt = 'Paypal' width={50}/></li>                   
                </ul>
            </div>
        </div>

        <div className = 'payment_row'>
            <div className='card'>
                <h1 className ='cardTitle'>CARD NUMBER</h1>
                <p className ='cardSubtitle'>{values.cardNumber|| spacedNumber}</p>

                <h1 className ='cardTitle'>EXPIRATION DATE</h1>
                <p className ='cardSubtitle'>{values.expirationDate || new Date().toJSON().slice(0,10).replace(/-/g,'/')}</p>
                <h1 className ='cardTitle'>{'John Doe'}</h1>
            </div>
            <div className='formCard'>
                <form>
                    <div className = 'flex-1'>
                        <p className='label'>Credit card Number</p>
                        <p className='label'> Expiration Date</p>
                    </div>
                    <div className = 'flex-1'>
                        <input
                        type ='number'
                        value ={values.cardNumber}
                        name='cardNumber'
                        onChange ={handleChange}
                        required
                        />
                        <input
                        type ='date'
                        value ={values.expirationDate}
                        name='expirationDate'
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div className = 'flex-1'>
                        <p className='label'>Security Code</p>
                        <p className='label'> Postal Code</p>
                    </div>
                    <div className = 'flex-1'>
                        <input
                        type ='number'
                        value ={values.code}
                        name='code'
                        onChange ={handleChange}
                        required
                        />
                        <input
                        type ='number'
                        value ={values.postalCode}
                        name='postalCode'
                        onChange ={handleChange}
                        required
                        />
                    </div>
                    <div>
                    <input 
                        type='submit'
                        value='Add Card'
                        className ='Add_card'
                        onClick = {handleSubmit}
                        />
                    </div>

                </form>

            </div>
           

        </div>

        <div className='summary'>
            <div className='flex-3'>
                <h3>Subtitle</h3>
                <h3>₦2,497.00</h3>
            </div>
            <div>
            <div className='flex-3'>
                <h3>Estimated TAX</h3>
                <h3>₦119.64</h3>
            </div>
            </div>
            <div>
            <div className='flex-3'>
                <h3>Promotional Code:Z4KXLM9A</h3>
                <h3>₦-60.00</h3>
            </div>
            </div>

            </div>
            <div className='summary'>
            <div className='flex-3'>
                <button>Complete Payment</button>
                <h3>TOTAL:₦2556.64</h3>
            </div>
            </div>
        </div>
    )
}

export default Payment
