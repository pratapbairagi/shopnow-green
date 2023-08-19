import { Skeleton, Space } from "antd"


const BrandSkeleton = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <div className="m-0 p-0" style={{ width: "100%", position: "relative", height: "max-content", display: "flex", flexDirection: "column" }}>
            <Space style={{ width: "100%", height: "30px", display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "6px", gap: "10px", marginTop: "10px", maxWidth: "100%", overflowX: "auto", overflowY: "hidden" }}>
                {data.map((v, i) => {
                    return <Skeleton.Button key={i} active title={{ width: "60px" }} paragraph={false} style={{ height: "25px", padding: "0" }}></Skeleton.Button>
                })}
            </Space>
        </div>
    )
}

export default BrandSkeleton