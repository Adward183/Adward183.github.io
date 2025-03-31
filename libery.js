
function init(container, e1, e2) {



    let outerElement = document.createElement('div');
    outerElement.className = "outerPoint";
    outerElement.style.height = e1.height; // ['width']
    outerElement.style.width = e1.width; // ['width']
    outerElement.style.background = e1.color;
    let innerElement = document.createElement('div');
    innerElement.className = "innerPoint";
    innerElement.style.width = e2.width; // ['width']
    innerElement.style.height = e2.height; // ['width']
    innerElement.style.background = e2.color;
    outerElement.append(innerElement);
    container.append(outerElement);

    startMoving(outerElement, e1.startPoint, e1.maxLeft, e1.maxRight, e1.step, e1.speed)
    startMoving(innerElement, e2.startPoint, e2.maxLeft, e2.maxRight, e2.step, e2.speed)
    addObserver(outerElement, innerElement);

    function addObserver(root, child) {
        const observer = new IntersectionObserver(observeFunction, {
            root: root,
            threshold: 0.1
        });

        function observeFunction(entries) {
            console.log(entries[0]);
            entries[0].target.classList.toggle('toggled');

        }
        observer.observe(child);
    }


    function startMoving(element, startPoint, maxLeft, maxRight, step, speed) {

        let rightStep = 1;
        let leftStep = -1;
        element.style.marginLeft = startPoint + "px";// ставим элемент в начальную точку
        //как сделать паузу?
        //setInterval(moveRight,  1);//запускает функцию раз в 1/1000 секунды

        movingInterval = setInterval(move, speed);

        function move() {

            if (startPoint == maxRight) { step = leftStep; }
            if (startPoint == maxLeft) { step = rightStep; }
            startPoint += step;
            element.style.marginLeft = startPoint + 'px';

        }

    }
}




