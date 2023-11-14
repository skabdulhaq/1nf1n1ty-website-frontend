import {
  getXataClient
} from "./xata";

function validEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const validateData = (name, mail) => {
  if (!name.trim) {
    return {
      vailid: false,
      err: "Name is not entered"
    }
  }
  if (!validEmail(mail)) {
    return {
      valid: false,
      err: "Email is invalid"
    }
  }
  return {
    valid: true
  }
}

export default defineEventHandler(async (event) => {
  const xata = getXataClient();
  const body = await readBody(event)
  const name = body.name
  const email = body.email
  let checker = validateData(name, email);
  if (checker.valid){
    try {
      const record = await xata.db.notify.create({
        mail: email.trim(),
        name: name.trim(),
        time: String(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })),
      });
      console.log(record);
      return{
        // record,
        "data": "Successfully Added to notify list..",
        "flag": "1nf{d4mn_y0u_l1t3r4lly_th1nk_l1k3_4_h4ck3r}"
      }
    }
   catch(e){
    if ("invalid record: column [mail]: is not unique" === e.message ){
      return {
        "error": "Email exists"
      }
    }
    else{
      return {
        "error": "something went wrong"
      }
    }
   }
  }
  else{
    return {
      "error" : checker.err
    }
  }
})