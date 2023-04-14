import { validatePhoneWithDDD } from '@utils/regexValidations';
import { z } from 'zod';

export const setPhoneFormSchema = z
  .object({
    phone: z
      .string({
        required_error: 'Preencha o número de telefone'
      })
      .refine(
        value => validatePhoneWithDDD(value),
        'Preencha o número de telefone corretamente'
      )
      .transform(val => val.replace(/[^A-Z0-9]/g, '')),
    confirmedPhone: z
      .string({
        required_error: 'Confirme o número de telefone'
      })
      .refine(
        value => validatePhoneWithDDD(value),
        'Preencha o número de telefone corretamente'
      )
      .transform(val => val.replace(/[^A-Z0-9]/g, ''))
  })
  .refine(data => data.confirmedPhone === data.phone, {
    message: 'Os telefones precisam ser iguais',
    path: ['confirmedPhone']
  });

export type setPhoneFormDataType = z.infer<typeof setPhoneFormSchema>;
