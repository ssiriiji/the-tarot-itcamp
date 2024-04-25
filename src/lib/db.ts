
export let db: any;


const addPoint = (newPoint: number) => {
    let pointV = db
    localStorage.setItem('the-tarot', JSON.stringify(pointV + newPoint));
    db = pointV + newPoint
}

const removePoint = (point: number) => {
    let pointV = db
    localStorage.setItem('the-tarot', JSON.stringify(pointV - point));
    db = pointV - point
}

const getPoint = () => {
    return db
}

const setPoint = (point: number) => {
    db = point
}


export { addPoint, getPoint, removePoint, setPoint };
