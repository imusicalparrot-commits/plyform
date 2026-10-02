(() => {
 const header=document.querySelector('.site-header');
 const menu=header?.querySelector('.category-menu');
 if(!menu)return;
 const summary=menu.querySelector('summary');
 document.addEventListener('click',event=>{if(!menu.contains(event.target))menu.open=false;});
 menu.addEventListener('click',event=>{if(event.target.closest('a'))menu.open=false;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;summary.focus();}});
 header.addEventListener('focusout',event=>{if(event.relatedTarget&&!header.contains(event.relatedTarget))menu.open=false;});
 window.matchMedia('(max-width:760px)').addEventListener('change',()=>{menu.open=false;});
})();
