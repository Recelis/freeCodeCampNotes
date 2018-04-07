// printing stars, first line 1*, second line 2*s, three stars etc to 6 lines
// concat strings

for (let ii =1; ii <= 6; ii++){
    let stars = "*";
    while (stars.length < ii){
        stars +="*";
    }
    console.log(stars);
}
