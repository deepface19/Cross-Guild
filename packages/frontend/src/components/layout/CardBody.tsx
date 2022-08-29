import React from 'react';
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';
export const CardBody: React.FC<{ variant: string; borderColor?: string } & BoxProps> = ({
  variant,
  children,
  ...rest
}) => {
  const styles = useStyleConfig('CardBody', { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles}{...rest}>
      {children}
    </Box>
  );
};