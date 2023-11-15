function problem6(inventory)
{
    let string1="bmw";
    let string2="audi";
    let audi_bmw_temp=[];
    let i=0;
    while(i<inventory.length)
    {
        let temp=inventory[i].car_make.toLowerCase();
        if(temp===string1 || temp===string2)
        {
            audi_bmw_temp.push(inventory[i]);
        }
        i++;
    }
    return audi_bmw_temp;
}

module.exports=problem6;