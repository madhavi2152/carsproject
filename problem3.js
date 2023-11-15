function problem3(inventory)
{
    let carmodel=[];
    for(let i=0;i<inventory.length;i++)
    {
        carmodel.push(inventory[i].car_model);
    }
    carmodel.sort(function(a, b) {
        return a.localeCompare(b);
      });
    for (let i = 0; i < carmodel.length; i++) 
    {
        console.log(carmodel[i]+" ");
    }
      

}

module.exports=problem3;