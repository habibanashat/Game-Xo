let titel =document.querySelector('.title')
let turn ='X';
let squares = [];
function habiba(num1,num2,num3){
    titel.innerHTML =  `${squares[num1]} winner` ;
    document.getElementById('item'+num1).style.background='#000'
    document.getElementById('item'+num2).style.background='#000'
    document.getElementById('item'+num3).style.background='#000'

    setInterval(function(){ titel.innerHT += 'wait'},1000)
    setTimeout(function(){location.reload()},3000)
}
function winner()
{
    for(let i = 1; i<10;i++)
    {
        squares[i] = document.getElementById('item'+i).innerHTML;
    }
    if(squares[1]==squares[2]&& squares[2]==squares[3]&&squares[1] !='')
    {
      habiba(1,2,3)
    }
    else   if(squares[4]==squares[5]&& squares[5]==squares[6]&&squares[5] !='')
    {
        habiba(4,5,6)
    }
    else   if(squares[7]==squares[8]&& squares[8]==squares[9]&&squares[8] !='')
    {
        habiba(7,8,9)
    }
    else   if(squares[1]==squares[4]&& squares[4]==squares[7]&&squares[1] !='')
    {
        habiba(1,4,7)
    }
    else   if(squares[2]==squares[5]&& squares[5]==squares[8]&&squares[5] !='')
    {
        habiba(2,5,8)
    }
    else   if(squares[3]==squares[6]&& squares[6]==squares[9]&&squares[6] !='')
    {
        habiba(3,6,9)
    }
    else   if(squares[1]==squares[5]&& squares[5]==squares[9]&&squares[5] !='')
    {
        habiba(1,5,9)
    }
    else   if(squares[3]==squares[5]&& squares[5]==squares[7]&&squares[5] !='')
    {
        habiba(3,5,7)
    }
    
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'X' &&  element.innerHTML=='')
    {
        element.innerHTML='X';
        turn ='O';
        titel.innerHTML = 'O'
    }
    else if(turn=== 'O' &&  element.innerHTML=='' ){
        element.innerHTML='O';
        turn ='X';
        titel.innerHTML = 'x'

    }
    winner()
}