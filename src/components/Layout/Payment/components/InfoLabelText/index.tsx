import { Heading, Text } from '@components/Typography';

type PaymentInfoLabelTextProps = {
  label: string;
  description: string;
  descriptionBig?: boolean;
};

export function PaymentPaymentInfoLabelText({
  label,
  description,
  descriptionBig
}: PaymentInfoLabelTextProps) {
  return (
    <div>
      <Text variant="large">{label}</Text>

      {!descriptionBig ? (
        <Text variant="large_bold" color="strong">
          {description}
        </Text>
      ) : (
        <Heading variant="h4_bold" color="strong">
          {description}
        </Heading>
      )}
    </div>
  );
}
