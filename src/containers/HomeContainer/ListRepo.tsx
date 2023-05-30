import { RepoProps } from '@api/types';
import { Card, Text } from '@components/commons';
import { IconStar } from '@components/icons';

interface Props {
    repo: RepoProps;
}

const ListRepo = ({ repo } : Props) => (
    <Card padding={'xs'} grow={1} background={'boldGrey'} direction={'row'} justify={'space-between'} borderRadius={'mini'}>
        <Card direction={'column'} gap={'xs'}>
            <Text variant={'bold'}>{repo.name}</Text>
            <Text>{repo.description}</Text>
        </Card>
        <Card direction={'row'} gap={'xs'}>
            <Text variant={'bold'}>{repo.stargazers_count.toString()}</Text>
            <IconStar color={'black'} width={15} height={15}/>
        </Card>
    </Card>
)

export default ListRepo
