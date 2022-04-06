import { useState } from "react";

export default function DescInfo(property) {
    let { description } = property;
    const [tabName, setTabName] = useState("desc");
    function changeTab() {
        if (tabName === "desc") {
            return setTabName("review");
        } else {
            return setTabName("desc");
        }
    }

    function tabActive() {
        if (tabName === "desc") {
            return (
                <div className="middle">
                    <h3 className="tab-active">Mô tả sản phẩm</h3>
                    <h3 onClick={changeTab}>Đánh giá sản phẩm</h3>
                </div>
            )
        } else {
            return (
                <div className="middle">
                    <h3 onClick={changeTab}>Mô tả sản phẩm</h3>
                    <h3 className="tab-active">Đánh giá sản phẩm</h3>
                </div>
            )
        }
    }

    function changeContent() {
        if (tabName === "desc") {
            return (!description ? <div>Chưa có thông tin mô tả sản phẩm</div> :
                <div className="desc"
                    dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            )
        }
        if (tabName === "review") {
            return (
                <div className="review">
                    Chưa có đánh giá sản phẩm
                </div>
            )
        }
    }
    return (
        <div className="desc-info container border">
            {tabActive()}
            {changeContent()}
        </div>
    );
}