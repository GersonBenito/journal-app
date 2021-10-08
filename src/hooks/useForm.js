import { useState } from "react"

export const useForm = (initialState = {}) =>{

    const [ values, setValues ] = useState(initialState);

    const reset = (newFormState) =>{

        setValues( newFormState );

    }

    const handleInputChange = ({ target }) =>{

        const { value, name } = target;

        setValues({
            ...values,
            [ name ]: value
        });

    }

    const resetForm = () =>{

        setValues( initialState );

    }

    return [ values, handleInputChange, resetForm, reset ]

}