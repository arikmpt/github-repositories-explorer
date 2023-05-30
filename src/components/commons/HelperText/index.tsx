import { Card, Text } from '@components/commons';

interface Props {
  helperText?: string;
  error?: boolean;
}

const FormHelperText = ({ helperText = '', error = false }: Props) => {
  if (helperText) {
    return (
      <Card align={'center'} gap={'xs'}>
        <Text size={'hs'} color={error ? 'contentNegative' : undefined}>
          {helperText}
        </Text>
      </Card>
    );
  }

  return null;
};

export default FormHelperText;