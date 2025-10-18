document.querySelectorAll('.card').forEach(card => {
  const alreadyWrapped = !!card.querySelector('.card-inner');
  if (!alreadyWrapped) {
    const front = card.querySelector('.card-front');
    const back = card.querySelector('.card-back');
    if (front && back) {
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${front.innerHTML}</div>
          <div class="card-back">${back.innerHTML}</div>
        </div>`;
    }
  }

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
  
  const back = card.querySelector('.card-back');
  if (back) {
    let startY = 0;
    back.addEventListener('pointerdown', (e) => { startY = e.clientY; });
    back.addEventListener('pointerup', (e) => {
      const moved = Math.abs(e.clientY - startY);
      if (moved > 6) {
        e.stopPropagation();
      }
    });
  }
});

document.querySelectorAll('.quality-item').forEach(item => {
  item.addEventListener('click', function () {
    this.querySelector('.quality-content').classList.toggle('hide');
  });
  item.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.querySelector('.quality-content').classList.toggle('hide');
    }
  });
});

