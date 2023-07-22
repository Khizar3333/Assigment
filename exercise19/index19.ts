const persons:string[]=[ 
    "usman",
    "huzaifa",
    "hassan",]



for (let i = persons.length-1;i >=2; i--) {
    const removeguest=persons.pop()
    console.log(`sorry ${removeguest}, we can't invite you to dinner this time.`);
  }
  const allowedInvitees = persons.length;
console.log(`I can invite ${allowedInvitees} person(s) to dinner.`);