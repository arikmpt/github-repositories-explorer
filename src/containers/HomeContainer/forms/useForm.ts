import * as yup from 'yup';
import { useForm as useFormReactHook } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormProps {
    search?: string;
}

const DEFAULT_VALUE: FormProps = {
    search: undefined
}

const useForm = () => {

    const schema = yup.object({
        search: yup.string().required('required')
    })

    const methods = useFormReactHook<FormProps>({
        defaultValues: DEFAULT_VALUE,
        resolver: yupResolver(schema)
    })

    return methods
}

export default useForm