// Simple local collection tracker (no account, no cookies banner needed for this only)
(function(){
  function addToCollection(dropKey, item){
    try{
      const key = 'tw-' + dropKey;
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      if(!arr.includes(item)){ arr.push(item); localStorage.setItem(key, JSON.stringify(arr)); }
    }catch(e){ /* ignore */ }
  }
  // If a page sets window.__TW_COLLECT, mark it
  if(window.__TW_COLLECT){
    addToCollection(__TW_COLLECT.drop, __TW_COLLECT.item);
    const key = 'tw-' + __TW_COLLECT.drop;
    const arr = JSON.parse(localStorage.getItem(key) || '[]');
    const el = document.getElementById('tw-collection-progress');
    if(el){ el.textContent = arr.length; }
  }
})();
