let $toolTips = document.createElement('div');
$toolTips.classList.add('tool-tip');

let $hoverElements = document.querySelectorAll('.hover-element');

$hoverElements.forEach($hoverElement => {
    $hoverElement.addEventListener('mousemove', function(e) {
        let dataText = this.dataset.text;
        $toolTips.textContent = dataText;
        $toolTips.style.top = e.clientY + 20 + 'px';
        $toolTips.style.left = e.clientX + 20 + 'px';
        $toolTips.classList.add('active');

        document.querySelector('body').appendChild($toolTips);
    })

    $hoverElement.addEventListener('mouseout', function(e) {
        $toolTips.classList.remove('active');
    })
});

let $spoilers = document.querySelectorAll('.spoiler');

$spoilers.forEach($spoiler => {
    $spoiler.addEventListener('click', function(e) {
        let dataSpoiler = this.dataset.spoiler;
        
        let $hiddenContent = document.querySelector(dataSpoiler + ' .hidden-content');
        let $textContent = document.querySelector(dataSpoiler + ' .hidden-content p');
        let $faSign = document.querySelector(dataSpoiler + ' .fa')

        $hiddenContent.classList.toggle('active');
        $textContent.classList.toggle('active');

        if($hiddenContent.classList.contains('active')) {
            $faSign.textContent = '-';
        } else {
            $faSign.textContent = '+';
        }
    })
});