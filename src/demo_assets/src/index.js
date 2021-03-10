import { Actor, HttpAgent } from '@dfinity/agent';
import { IDL as demo_idl, canisterId as demo_id } from 'dfx-generated/canisters/demo.js';

const agent = new HttpAgent();
const demo = Actor.createActor(demo_idl, { agent, canisterId: demo_id })

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await demo.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
