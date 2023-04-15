import { Mask } from 'maska';

export const formatCurrencyPtBr = new Mask({
  mask: '9.99#,##',
  reversed: true,
  tokens: {
    9: {
      pattern: /[0-9]/,
      repeated: true
    }
  }
});

// export const utilsPhoneWithDDD = () => {
//   const formatPhoneWithDDD = new Mask({
//     mask: '(##) #####-####'
//   });

//   return {
//     maskPhone: formatPhoneWithDDD.masked,
//     validatePhone: formatPhoneWithDDD.completed
//   };
// };

export const formatPhoneWithDDD = new Mask({
  mask: '(##) #####-####'
});
