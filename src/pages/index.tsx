import yayJpg from "../assets/yay.jpg";
import { PlusOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Modal, Input, Button, message } from "antd";
import comStyle from "./comStyle.less";
import {useState, useRef } from "react";

export default function HomePage() {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         username: ''
    //     }
    //     // this.handleChange = this.handleChange.bind(this)
    // }
    // let columnList = ["中华煤", "高平煤", "高硫煤", "泥煤", "兰炭煤", "蒙煤", "+"];
    let lieList = ["热量", "煤比例", "灰分", "挥发", "碳", "可磨", "水分"];
    const { Column, ColumnGroup } = Table;
    let defColumnList = localStorage.getItem("columnList") ? JSON.parse(localStorage.getItem("columnList") || '') : ["中华煤", "高平煤", "高硫煤", "泥煤", "兰炭煤", "蒙煤"];
    const [columnList, setColumnList] = useState(defColumnList);
    const [valMap, setValMap] = useState({});
    const [comValMap, setComValMap] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [titleVal, setTitleVal] = useState('');
    // const [titleDom, setTitleDom] = useState('');
    const scRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();

    const comHandle = () => {
        for (let index = 0; index < lieList.length; index++) {
            const lieName = lieList[index];
            if('煤比例' == lieName) {

            }else {
                let numList = valMap['煤比例'];
                let lieRowMap = valMap[lieName] || {};
        
                let val = 0;
                let numTotal = 0;
                // debugger
                for (const numKey in numList) {
                    const blNumVal = numList[numKey];
                    const lieVal = lieRowMap[numKey];
                    if(blNumVal && lieVal) {
                        val += (blNumVal * lieVal);
                        numTotal += Number(blNumVal);
                    }
                }
                comValMap[lieName] = val / numTotal;
                setComValMap(JSON.parse(JSON.stringify(comValMap)));
                // console.log(comValMap);
                // return val;
            }
        }
    };
    const handleOk = () => {
        if(titleVal) {
            let currArr = [...columnList]
            currArr.push(titleVal);
            localStorage.setItem("columnList", JSON.stringify(currArr));
            setColumnList(currArr);
            setIsModalOpen(false);
            // titleDom.value = '';
            setTitleVal('');
            // titleRef.current.value = '';
            setTimeout(() => {
                scRef.current.scrollTo(scRef.current.scrollWidth - scRef.current.offsetWidth, 0)
            }, 0);
        }else {
            messageApi.open({
                type: 'warning',
                content: '请填写内容',
                duration: 3,
            });
        }
    };
    const handleCancel = () => {setIsModalOpen(false);};
    return (
        <div>
            {contextHolder}
            <div ref={scRef} className={comStyle.editTableBox}>
                <table className={comStyle.editTable} style={{width: (columnList.length * 20) + 'vw'}} border="1">
                    <tbody>
                    <tr>
                        <td>种类</td>
                        {
                            columnList.map((column, index) => {
                                return (
                                    <td key={'column_' + index} style={{textAlign: 'center'}} onClick={() => {
                                        // columnList[0];
                                        // setColumnList();
                                    }}>{column}</td>
                                )
                            })
                        }
                        <td style={{textAlign: 'center'}}>
                            <Button type="primary" icon={<PlusOutlined />} onClick={() => {
                                setIsModalOpen(true);
                            }}>添加</Button>
                        </td>
                    </tr>
                    {
                        lieList.map((lie, lieIndex) => {
                            return (
                                <tr key={'lie_' + lieIndex}>
                                    <td>{lie}</td>
                                    {
                                        columnList.map((column, columnIndex) => {
                                            return <td key={'lie_' + columnIndex + '_' + lieIndex} ><Input bordered={false} onChange={(e) => {
                                                if(valMap['' + lie]) {
                                                    valMap['' + lie]['' + columnIndex] = e.currentTarget.value;
                                                }else {
                                                    valMap['' + lie] = {};
                                                    valMap['' + lie]['' + columnIndex] = e.currentTarget.value;
                                                }
                                                console.log(valMap);
                                                comHandle();
                                            }} /></td>
                                        })
                                    }
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <table className={comStyle.totalTable}>
                <tr>
                    <td>指标项</td>
                    <td>配后指标</td>
                </tr>
                {
                    lieList.map((lie, lieIndex) => {
                        return (
                            <tr key={'lie2_' + lieIndex}>
                                <td>{lie}</td>
                                <td>{comValMap[lie]}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <Modal title="填写名称" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input size="large" value={titleVal} onBlur={() => {
                    // setTitleDom(e.currentTarget);
                }} onChange={(e) => {
                    setTitleVal(e.currentTarget.value);
                }} placeholder="请填写添加的名称" />
            </Modal>

            <div className={comStyle.btnBox}>
                <Button type="primary" onClick={() => {
                    localStorage.removeItem("columnList");
                    window.location.reload();
                }}>还原表头</Button>
            </div>
        </div>
    );
}
