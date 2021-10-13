const UserValidation = {
    userLoginId: {
      rules: [
        {
          test: (value) => {
            return value.length === 3;
          },
          message: 'userLoginId should be equal to 3 digits',
        },
        {
            test: /^[0-9]*$/,
            message: 'userLoginId must contain only numeric values',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    userName: {
      rules: [
        {
          test: /^[a-zA-Z ]*$/,
          message: 'Name must contain only alphabets characters',
        
         
        },
        {
          test: (value) => {
            return value.length > 3;
        },
          message: 'Name must be longer than three characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    
    email: {
       rules: [
         {
          test: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
          message: 'email must have character/number/./- befor & after @',
        },
          
      ],
        errors: [],
        valid: false,
        state: ''
        },
    contact: {
        rules: [
        {
          test: (value) => {
            return value.length === 10;
          },
          message: 'Contact Number should be equal to 10 digits',
        },
        {
            test: /^[0-9]*$/,
            message: 'Contact Number must contain only numeric values',
          },
      ],
      errors: [],
      valid: false,
      state: ''
    },
      firstName: {
        rules: [
        {
          test: /^[a-zA-Z ]*$/,
          message: 'firstName must contain only alphabets characters',
        },
         
      
       {
          test: (value) => {
            return value.length > 3;
          },
          message: 'firstName must be longer than three characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
     lastName: {
        rules: [
        {
          test: /^[a-zA-Z ]*$/,
          message: 'lastName contain only alphabets characters',
          },
         
        
       {
          test: (value) => {
            return value.length > 3;
          },
          message: 'lastName be longer than three characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
      password: {
        rules: [
        {
          test: /^[a-zA-Z ]*$/,
          message: 'password contain only alphabets characters',
          },
         
       
       {
          test: (value) => {
            return value.length > 3;
          },
          message: 'password be longer than three characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
  };
  
  export default UserValidation;