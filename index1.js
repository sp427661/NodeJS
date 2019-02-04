var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y),
};

function solverect(x,y)
{

    if(x<0 || y<0)
    {
        console.log("error");
    }

    else
    {
        console.log('perimeter is '+ rect.perimeter(x,y));

        console.log('area is '+ rect.area(x,y));


    }
}


solverect(4,5);
solverect(6,7);
