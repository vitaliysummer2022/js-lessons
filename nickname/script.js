document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value.length === 0) {
        return;
    }

    const nickname = `@${input.value.toLowerCase().trim()
                      .replaceAll(' ', '-')}`;
    
    document.querySelector('i').textContent = nickname;
});