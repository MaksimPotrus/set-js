const s="Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s){
    const newString = JSON.parse(JSON.stringify(s));
    return newString.toUpperCase().split(';').map(fullName=> `(${fullName.split(':')[1]}, ${fullName.split(':')[0]})`).sort().join('');
}

console.log(meeting(s));