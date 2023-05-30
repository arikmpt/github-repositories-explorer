import { Card, Text, Hoverable } from '@components/commons';
import { IconChevron } from '@components/icons';
import { useState } from 'react';
import ListRepo from './ListRepo';
import { UserProps } from '@api/types';
import { useGetRepoByUsernameQuery } from '@api/githubApi';
import { Skeleton } from '@mui/material';

interface Props {
    user : UserProps;
}

const ListUser = ({ user } : Props) => {
    const [show, setShow] = useState<boolean>(false);

    const { data, isFetching } = useGetRepoByUsernameQuery(user.login, {
        skip: !show,
        refetchOnMountOrArgChange: true,
    });
    
    const handleShow = () => {
        setShow((prevState) => !prevState)
    }

    return (
        <Card direction={'column'} gap={'xs'}>
            <Card padding={'xs'} grow={1} background={'grey'} direction={'row'} justify={'space-between'} borderRadius={'mini'} align={'center'}>
                <Text>{user.login}</Text>
                <Hoverable onClick={handleShow} disabled={isFetching}>
                    <IconChevron color={'black'} width={20} height={20} rotate={show ? 180 : 0}/>
                </Hoverable>
            </Card>
            {show && (
                <Card direction={'column'} gap={'xs'} paddingLeft={'xl'}>
                    {isFetching && (
                        <>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton variant="rectangular" height={40} />
                        </>
                    )}
                    {!isFetching && data?.map((repo) => (
                        <ListRepo key={repo.id} repo={repo}/>
                    ))}

                    {!isFetching && data?.length === 0 && (
                        <Card justify={'center'}>
                            <Text>{'No repo for this user'}</Text>
                        </Card>
                    )}
                    
                </Card>
            )}
        </Card>
    )
}

export default ListUser
