const get = (target) => {
    return document.querySelector(target);
  };

const $text = get('.textArea')
const $blank = get('.blank')
const $noneblank = get('.noneblank')

const calc = () =>{
    $blank.value = $text.value.length;
    $noneblank.value = $text.value.replaceAll(/\n| /gi ,"").length;
}

