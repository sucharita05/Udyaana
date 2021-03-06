import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Checkout from '../components/Checkout'
import { savePaymentMethod } from '../actions/cartAction'

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        history.push('/shipping')
    }

    const [payment, setPayment] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(payment))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <Checkout step1 step2 step3 />
            <h1>Payment</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check type='radio'
                            label='PayPal or Credit/Debit Card'
                            id='PayPal'
                            name='paymentMethod'
                            value='PayPal'
                            checked onChange={(e) => setPayment(e.target.value)}>
                        </Form.Check>
                        <Form.Check type='radio'
                            label='GooglePay'
                            id='GooglePay'
                            name='paymentMethod'
                            value='GooglePay' onChange={(e) => setPayment(e.target.value)}>
                        </Form.Check>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
