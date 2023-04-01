export function cropFileName(input) {
    let dots;
    const arr = input.files[0].name.split('.');
    arr[0].length > 5 ? dots = '...' : dots = '.';
    input.previousElementSibling.textContent = arr[0].substring(0, 6) + dots + arr[1];
}