/* eslint-disable react/prop-types */
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    useColorModeValue,
} from "@chakra-ui/react"
import { useField, ErrorMessage } from "formik"
  
export default function InputField ({ label, name, ...props }) {
    const [field, meta] = useField(name)
    const isInvalid = Boolean(meta.touched && meta.error)
    return (
        <FormControl
            id={field.name}
            isInvalid={isInvalid}
        >
            <FormLabel 
                htmlFor={field.name}
            >
                {label}
            </FormLabel>
            <Input 
                bg={useColorModeValue('white', 'gray.800')} 
                {...field} 
                {...props} 
            />
            <FormErrorMessage>
                {meta.touched && meta.error ? (
                    <ErrorMessage name={field.name} component="span" />
                ) : null}
            </FormErrorMessage>
        </FormControl>
    )
}