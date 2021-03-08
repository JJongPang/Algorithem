function star(n) {
    let tree = '';

    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= n - i; j++) {
            star += '1';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += '*';
        }
        tree += star + '\n';
    }
    return tree;
}

console.log(star(5));
