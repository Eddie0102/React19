function HeartIconBtn({ onHeartClick, isFavorite = false }) {
    return (
        <button className="btn" onClick={onHeartClick}>
            <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'} />
        </button>
    );
}

function LinkIconBtn({ link }) {
    return (
        <a className="btn" href={link} target="blank" rel="noreferrer">
            <img className="btn__img" src="/img/link-icon.svg" alt="" />
        </a>
    );
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
    function handleFavorite() {
        alert(isFavorite ? '관심 강의로 등록되었습니다.' : '관심 강의에서 삭제되었습니다.');
    }
    return (
        <article className="course">
            <img className="course__img" src={thumbnail} alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className="course_icons">
                <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
                {link && <LinkIconBtn link={link} />}
            </div>
        </article>
    );
}
