// 별로 삼각형 그리기(중첩 반복문)

for (let i=1; i <=5; i++) {
    let stars = '';
    for (let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}



for (let i=5; i >=1; i--) {
    let stars = '';
    for (let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}


for (let i=1; i <=5; i++) {
    let stars = '';
    for (let k=1; k <=5-i; k++)
        stars += ' ';
    for (let k=1; k<=i; k++)
        stars += '*';
    console.log(stars);
}


for (let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k <=5-i; k++)
        stars += ' ';
    for (let k=1; k<=i; k++)
        stars += '*';
    console.log(stars);
}