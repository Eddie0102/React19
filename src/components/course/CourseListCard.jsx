import { Fragment } from 'react';
import Card from './Card';
import CourseItem from './CourseItem';

function CourseListCard({ title, items }) {
    return (
        <>
            <Card title={title}>
                <div className="courses">
                    {items.map((items, index) => (
                        <Fragment key={(items.id, index)}>
                            <CourseItem {...items} />
                            {index !== items.length - 1 && <hr className="divider" />}
                            <hr className="divider" />
                        </Fragment>
                    ))}
                </div>
            </Card>
        </>
    );
}

export default CourseListCard;
