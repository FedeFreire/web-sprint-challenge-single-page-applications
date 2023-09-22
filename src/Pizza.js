import React, {useState, useEffect} from "react";
import * as yup from 'yup';


  ////////////// EVENT HANDLERS //////////////
  ////////////// EVENT HANDLERS //////////////
  ////////////// EVENT HANDLERS //////////////
  // const onCancel = evt => {
  //   evt.preventDefault()
  //   reset()
  // }

  // const onSubmit = evt => {
  //   evt.preventDefault()
  //   values.id
  //     ? putQuote(values)
  //     : postQuote(values)
  // }

  // const onChange = evt => {
  //   // pull these out of the event to avoid the `persist()`
  //   const { name, value } = evt.target
  //   setValues({ ...values, [name]: value })
  // }

  // ////////////// HELPER //////////////
  // ////////////// HELPER //////////////
  // ////////////// HELPER //////////////
  // const isDisabled = () => {
  //   return !values.text.trim() || !values.author.trim()
  // }


  const validationErrors ={
      nameTooShort : 'name must be at least 2 characters'
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, validationErrors.nameTooShort)
})


const initialValues = {name:'', instructions:''}
const initialErrors ={name:'', instructions:''}
export default function Pizza(props) {
   const [errors, setErrors] =useState(initialErrors)
   const [values, setValues] =useState(initialValues)

const onChange = evt => {     
  let {name, value} =evt.target
  yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    setValues({ ...values, [name]: value });
}


  return (
    <form id="pizza-form">
      <div className="order-header">
        <h1>Build Your Own Pizza</h1>
        <img src="/Assets/Pizza.jpg" alt="Pizza Pic" />
        <p>Build Your Own Pizza</p>
      </div>
      
        <fieldset className="order-size">
          <legend>Choice of Size</legend>
          <p>Required</p>
          <label>
            <select id='size-dropdown'
              // onChange={onChange}
              // value={values.role}
              name="size"
            >
              <option value="">- Select a Size -</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </fieldset>
        <fieldset className="order-sauce">
          <legend>Choice of Sauce</legend>
          <label>
            <input
              type="radio"
              name="sauce"
              value="single"
              // onChange={onChange}
              // checked={values.civil === 'single'}
            />
            Red Sauce
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              value="single"
              // onChange={onChange}
              // checked={values.civil === 'single'}
            />
            Garlic Ranch
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              value="single"
              // onChange={onChange}
              // checked={values.civil === 'single'}
            />
            Alfredo
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              value="single"
              // onChange={onChange}
              // checked={values.civil === 'single'}
            />
            BBQ Sauce
          </label>
        </fieldset>

        <fieldset id="order-toppings">
          <legend>Add Toppings</legend>
          <label>
          <input
            type='checkbox'
            name='topping'
            // onChange={onChange}
            // checked={values.hiking}
          />
          Pepperoni</label>
          <label>
          <input
            type='checkbox'
            name='topping'
            // onChange={onChange}
            // checked={values.hiking}
          />
          Banana</label>
          <label>
          <input
            type='checkbox'
            name='topping'
            // onChange={onChange}
            // checked={values.hiking}
          />
          Tomato</label>
          <label>
          <input
            type='checkbox'
            name='topping'
            // onChange={onChange}
            // checked={values.hiking}
          />
          Hopes and Dreams</label>
        </fieldset>
        <fieldset className="order-subs">
          <legend>Choice of Substitutes</legend>
        </fieldset>
        <fieldset className="order-instructions">
          <legend>Special Instructions</legend>
        </fieldset>
        <fieldset className="order-add">
          <legend>Checkout</legend>
          {errors.name && <span>{errors.name}</span>}
          <label>Name
          <input
            id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        <label>Special Instructions
      {/* name must be at least 2 characters */}
      
          <input
            id='special-text'
            // value={values.email}
            // onChange={onChange}
            name='instructions'
            type='text'
          />
        </label>
        <button id='order-button'>Add To Order</button> 
        </fieldset>
      </form>
   
  );
}
