// type FormType = 'inline' | 'block'
// type FormState = 'active' | 'disabled'

// interface FormInfo {
//     type: FormType
//     state: FormState
// }

/// <reference path="11_form-namespace.ts" />

namespace IForm {
    class MyForm {

        private type: FormType = 'inline'
        private state: FormState = 'active'
    
        constructor(public email: string) {
    
        }
    
        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    
    }
    
    const myForm = new MyForm('t@gmail.com')

    
}

