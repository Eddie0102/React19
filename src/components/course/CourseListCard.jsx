import CourseItem from './CourseItem';

function CourseListCard(props) {
    return (
        <div className="card" style={{ backgroundColor: 'lightgrey' }}>
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </div>
            </div>
        </div>
    );
}

export default CourseListCard;
