import { Card, Text, Button, TextField } from '@components/commons'
import ListUser from './ListUser'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store'
import { useGetSearchUserByUsernameQuery } from '@api/githubApi';
import useForm, { FormProps } from './forms/useForm'
import { FormProvider, SubmitHandler, Controller } from 'react-hook-form';
import { setParam } from '@store/slicers/searchSlice'
import { CircularProgress, Skeleton } from '@mui/material';

const HomeContainer = () => {
    const param = useSelector((state: RootState) => state.search.param);
    const dispatch = useDispatch()

    const methods = useForm();

    const { data, isFetching } = useGetSearchUserByUsernameQuery(param, {
        skip: !param,
        refetchOnMountOrArgChange: true,
    });

    const onSubmit: SubmitHandler<FormProps> = (data) => {
        dispatch(setParam(data.search))
    }

    const handleSubmit = () => {
        methods.handleSubmit(onSubmit)()
    }

    const error = methods.formState.errors.search;

    return (
        <FormProvider {...methods}>
            <Card padding={'m'} grow={1} direction={'column'} gap={'xs'}>
                <Card direction={'column'} gap={'s'}>
                    <Controller 
                        name={'search'}
                        control={methods.control}
                        render={({field}) => (
                            <TextField defaultValue={field.value} onBlur={field.onChange} placeholder={'Enter username'} helperText={error?.message} error={!!error}/>
                        )}
                    />
                    <Button onClick={handleSubmit} disabled={isFetching}>{'Search'}</Button>
                </Card>
                {param && (
                    <Text>{`Showing users for "${param}"`}</Text>
                )}
                {isFetching && (
                    <Card justify={'center'}>
                        <CircularProgress />
                    </Card>
                )}
                {!isFetching && data?.items.map((user) => (
                    <ListUser key={user.id} user={user}/>
                ))}

                {!isFetching && data?.items.length === 0 && (
                    <Card justify={'center'}>
                        <Text>{`No users with username "${param}"`}</Text>
                    </Card>
                )}
                
            </Card>
        </FormProvider>
    )
}

export default HomeContainer
