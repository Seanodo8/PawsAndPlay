import React, { Component } from "react";
import Form from "../components/Form";




class Login extends Component {
    render(){
    return(
    <Form />
     ) 
    
    }
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isLoading: true,
    //         token: '',
    //         signUpError: '',
    //         signInError: '',
    //         signInEmail:'',
    //         signInPassword:'',
    //         signUpPassword:'',
    //         signUpEmail:''

    //     };

    //     this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(this);
    //     this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(this);
    //     this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(this);
    //     this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);
    //     this.onSignIn = this.onSignIn.bind(this);
    //     this.onSignUp = this.onSignIn.bind(this);
    // }
    // componentDidMount () {
    //     const obj = getFromStorage('PawsAndPlay');
    //     if(obj && obj.token){
    //         const { token } = obj;
    //         fetch('api/account/verify?token=' + token)
    //         .then(res => res.json())
    //         .then(json => {
    //             if(json.success){
    //                 this.setState({
    //                     token,
    //                     isLoading: false
    //                 });
    //             } else {
    //                 this.setState({
    //                     isLoading: false
    //                 })
    //             }
    //         });
    //     } else {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }
    // }

    // onTextBoxChangeSignInEmail(event){
    //     this.setState({
    //         signInEmail: event.target.value,
    //     });
    // }

    // onTextBoxChangeSignInPassword(event){
    //     this.setState({
    //         signInPassword: event.target.value,
    //     });
    // }

    // onTextBoxChangeSignUpEmail(event){
    //     this.setState({
    //         signUpEmail: event.target.value,
    //     });
    // }

    // onTextBoxChangeSignUpPassword(event){
    //     this.setState({
    //         signUpPassword: event.target.value,
    //     });
    // }
    // onSignUp(){
    //     const {
    //         signUpEmail,
    //         signUpPassword
    //     } = this.state;
    //     this.setState({
    //         isLoading: true
    //     });

    //     // API.login()

    //     fetch('api/account/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: signUpEmail,
    //             password: signUpPassword
    //         }),

    //     }).then(res => res.json())
    //     .then(json => {
    //             this.setState({
    //                 signUpError: json.message
    //             });
    //     });
    // }

    // onSignIn (){    
    //     const {
    //     signInEmail,
    //     signInPassword
    // } = this.state;
    // this.setState({
    //     isLoading: true
    // });
    // fetch('api/account/signIn', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email: signInEmail,
    //         password: signInPassword
    //     }),

    // }).then(res => {
    //     console.log(res);
    //     res.json();
    // })
    // .then(json => {
    //         this.setState({
    //             signInError: json.message,
    //             isLoading: false
    //         });
    // })
    // }

    // logout(){
    //     this.setState({
    //         isLoading:true,
    //     });
    //     const obj = getFromStorage('PawsAndPlay');
    //     if(obj && obj.token) {
    //         const { token } = obj;
    //         fetch('/api/account/logout?token=' + token)
    //         .then( res => res.json())
    //         .then(json => {
    //             if(json.success){
    //                 this.setState({
    //                     token: '',
    //                     isLoading: false
    //                 });
    //             }else {
    //                 this.setState({
    //                     isLoading: false
    //                 });
    //             }
    //         });
    //     }else {
    //         this.setState({
    //             isLoading:false
    //         })
            
    //     }
    // }



    //     render(){
    //         const{
    //             isLoading,
    //             token,
    //             signInError,
    //             signInEmail,
    //             signInPassword,
    //             signUpEmail,
    //             signUpPassword
    //         } = this.state;
    //         if(isLoading){
    //             return (<div><p>Is Loading..</p></div>);
    //         }

    //         if(!token){
    //             return(
    //                 <div>
    //                     <p>Sign In</p>
    //                     <input type='email' 
    //                         placeholder="Email" 
    //                         value={signInEmail}
    //                         onChange={this.onTextBoxChangeSignInEmail} 
    //                     /> 
    //                     <br />
    //                     <input type='password' 
    //                         placeholder="Password" 
    //                         value={signInPassword}
    //                         onChange={this.onTextBoxChangeSignInPassword}
    //                     /> 
    //                     <br />
    //                     <button onClick={this.onSignIn}>Sign In</button>
    //                     <br />
    //                     <br />
    //                     <p>Sign Up</p>
    //                         <input type='email' 
    //                         placeholder="Email" 
    //                         value={signUpEmail}
    //                         onChange={this.onTextBoxChangeSignUpEmail}
    //                         /> 
    //                     <br />
    //                     <input type='password' 
    //                     placeholder="Password" 
    //                     value={signUpPassword}
    //                     onChange={this.onTextBoxChangeSignUpPassword}
    //                     />
    //                     <br />
    //                     <button onClick={this.onSignUp}>Sign Up</button>
    //                 </div>
    //             );
    //         }
    //         return (
    //             <div>
    //                 <p>Account</p>
    //             </div>
    //         )
        
       
           
        

        
            
      
        
       
        
        
    // }

}




export default Login;