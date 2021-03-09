// function solution(str) {
//     switch (str) {
//         case '수성':
//             console.log('Mercury');
//             break;
//         case '금성':
//             console.log('Venus');
//             break;
//         case '지구':
//             console.log('Earth');
//             break;
//         case '화성':
//             console.log('Mars');
//             break;
//         case '목성':
//             console.log('Jupiter');
//             break;
//         case '토성':
//             console.log('Saturn');
//             break;
//         case '천왕성': {
//             console.log('Uranus');
//         }
//         case '해왕성':
//             console.log('Neptune');
//             break;
//         default:
//             console.log(new Error('error'));
//     }
// }

// solution('수성');
// solution('금성');
// solution('지구');
// solution('화성');
// solution('목성');
// solution('토성');
// solution('천왕성');
// solution('해왕성');

const planets = {
    수성: 'Mercury',
    금성: 'Venus',
    지구: 'Earth',
    화성: 'Mars',
    목성: 'Jupiter',
    토성: 'Saturn',
    천왕성: 'Uranus',
    해왕성: 'Neptune',
};

// 해설답안

function test(str) {
    console.log(planets[str]);
}

test('수성');
test('지구');
