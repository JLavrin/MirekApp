import React, {  useState } from 'react'
import { StyledPaymentData, StyledForm, StyledButton, StyledFormControl, StyledTextField } from 'Pages/PaymentData/PaymentData.styled'
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import useStore from 'store'
import mainPalette from 'constants/mainPalette'
import convertCurrencyToString from 'Pages/PaymentData/convertCurrencyToString'
import { toast } from 'react-toastify'

const PaymentData = () => {

 const {data, setData} = useStore(state => state)



  const [paymentData, setPaymentData] = useState({
   ...data,
    dateStart: data.contractSignDate,
    dateEnd: data.contractEndDate,
    oneTime: data.oneTime,
    oneTimeString: data.oneTimeString,
    subscription: data.subscription,
    subscriptionString: data.subscriptionString,
    subscriptionAfterContractEnd: data.subscriptionAfterContractEnd,
  })
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setData({
      ...data,
        oneTime: paymentData.oneTime,
        oneTimeString: paymentData.oneTimeString,
        subscription: paymentData.subscription,
        subscriptionString: paymentData.subscriptionString,
        subscriptionAfterContractEnd: paymentData.subscriptionAfterContractEnd,

    })
    toast.success("Dane zostały pomyslnie zapisane!")
  }

  const arr = [
    // {type: 'date', label: 'data umowy', value: 'dateStart'},
    // {type: 'date', label: 'data zakończenia umowy', value: 'dateEnd'},
    {type: 'number', placeholder: 'np. 330.30', label: 'opłata jednorazowa', value: 'oneTime'},
    {type: 'text', placeholder: 'np. trzysta trzydzieści złotych 19/100 groszy', label: 'opłata jednorazowa słownie', value: 'oneTimeString'},
    {type: 'number', placeholder: 'np. 330.30', label: 'opłata abonamentowa', value: 'subscription'},
    {type: 'text', placeholder: 'np. trzysta trzydzieści złotych 19/100 groszy', label: 'opłata abonamentowa słownie', value: 'subscriptionString'},
    {type: 'number', placeholder: 'np. 330.30', label: 'opłata po zakończniu umowy', value: 'subscriptionAfterContractEnd'}
  ]


  const handleBlur = (x) => {
   console.log(x.target.id)
    console.log(convertCurrencyToString(x.target.value))
   switch(x.target.id) {
     case '0': setPaymentData({...paymentData, oneTimeString: convertCurrencyToString(x.target.value)}); break;
     case '2': setPaymentData({...paymentData, subscriptionString: convertCurrencyToString(x.target.value)}); break;
   }
  }
  return (
    <StyledPaymentData>
      <StyledForm>
        <Typography variant="h4" style={{color: mainPalette.contrast}}>
          Dane płatnicze
        </Typography>
        <StyledFormControl onSubmit={handleSubmit}>
          {arr.map((item, index) => (
            <div key={index}>
            {item.type === 'number' ?
              <FormControl >
              <InputLabel htmlFor={item.type}>{item.label}</InputLabel>
              <OutlinedInput
                id={String(index)}
                onBlur={handleBlur}
                type={item.type}
                key={index}
                label={item.label}
                value={paymentData[item.value]}
                onChange={(event: any) => {
                const {value} = event.target
                setPaymentData({...paymentData, [item.value]: value})
              }}
              startAdornment={<InputAdornment position="start">zł</InputAdornment>}
              placeholder={item.placeholder}
            />
            </FormControl>
              :
              <StyledTextField
                  id={item.type}
                  type={item.type}
                  key={index}
                  label={item.label}
                  value={paymentData[item.value]}
                  onChange={(event: any) => {
                    const {value} = event.target
                    setPaymentData({...paymentData, [item.value]: value})
                  }}
                  fullWidth
                  placeholder={item.placeholder}
                />
            }
            </div>
          ))}
        </StyledFormControl>

        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{backgroundColor: mainPalette.contrast}}
        >
          Zapisz
        </StyledButton>
      </StyledForm>
    </StyledPaymentData>
  )

}
export default PaymentData