
const auth = {
    isAuthenticated: false,
    authenticate(email, password) {
      console.log(email);
      console.log(password);
      return fetch('http://localhost:8080/api/auth/login', { 
        // mode:'cors',
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
          'allow-access-control':'*',
          // 'Access-Control-Allow-Origin':'http://localhost:3000', 
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Login Failed');
          }
  
          return response;
        })
        .then((body) => {
          this.isAuthenticated = true;
          return body;
        });
    },
    signout(cb) {
      return fetch('/api/auth/logout', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Logout Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = false;
          return body;
        });
    },

    signup(firstName, lastName, gender, password, email){
        return fetch('http://localhost:8080/api/auth/signup', { 
            method: 'POST',
            body: JSON.stringify({ firstName,lastName,gender,password,email}),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then((response) => {
            if(!response.ok) {
              throw new Error('Signup Failed');
            }
    
            return response.json();
          });
    }
  }
  export default auth