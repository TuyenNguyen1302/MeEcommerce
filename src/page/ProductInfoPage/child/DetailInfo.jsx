export default function DetailInfo(property) {
    let { attributes } = property;
    function createDetailInfo(data) {
        return data.map((item) => {
            return (
                <div className="detail-col">
                    <div className="title">
                        <p>{item.name}</p>
                    </div>
                    <div className="des">
                        <p>{item.value}</p>
                    </div>
                </div>
            )
        });
    }
    return (
        <div className="detail-info container border">
            <h2>Thông tin chi tiết</h2>
            <div>
                {createDetailInfo(attributes)}
            </div>
        </div>
    );
}