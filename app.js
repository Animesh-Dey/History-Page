alert("This is a simple dynamic history page using vanila javascript");
const subContainer=document.querySelector(".sub-container");
const heading=document.querySelector(".heading");
const historyDetails=document.querySelector(".history-details");
const his=['1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis porro odit ea necessitatibus, quos beatae quod nostrum dignissimos sint dolorem doloremque aperiam nesciunt temporibus veritatis. Delectus atque minima a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ut magnam! Voluptates iure possimus nesciunt quasi quidem perferendis? Ex quaerat dolores itaque distinctio nobis blanditiis a molestiae qui sed fuga!',
'2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sit, distinctio necessitatibus fuga eaque placeat illum, suscipit tempore quae maxime ducimus dolor temporibus harum magni voluptates quis id dolore? Quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae mollitia porro quis molestiae suscipit ratione accusamus. Nesciunt error deleniti praesentium assumenda saepe, et ipsam aliquam, rerum eius vel similique quasi.',
'3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis porro odit ea necessitatibus, quos beatae quod nostrum dignissimos sint dolorem doloremque aperiam nesciunt temporibus veritatis. Delectus atque minima a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ut magnam! Voluptates iure possimus nesciunt quasi quidem perferendis? Ex quaerat dolores itaque distinctio nobis blanditiis a molestiae qui sed fuga!',
'4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis porro odit ea necessitatibus, quos beatae quod nostrum dignissimos sint dolorem doloremque aperiam nesciunt temporibus veritatis. Delectus atque minima a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ut magnam! Voluptates iure possimus nesciunt quasi quidem perferendis? Ex quaerat dolores itaque distinctio nobis blanditiis a molestiae qui sed fuga!',

];
his.forEach((h)=>{
  const para=document.createElement('p');
  const br=document.createElement('br');
  para.textContent=h;
  historyDetails.append(para,br);
});