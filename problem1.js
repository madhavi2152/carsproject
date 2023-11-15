function problem1(id,inventory)
{
    for(let i=0;i<inventory.length;i++)
    {
        let car_id=inventory[i].id;
        if(car_id===id)
        {
            console.log("car is a" , inventory[i].car_year, inventory[i].car_make, inventory[i].car_model);
        }
    }
}
module.exports=problem1;