import yayJpg from "../assets/yay.jpg";
import { Space, Table, Tag } from "antd";
import comStyle from "./comStyle.less";
import {useState} from "react";

export default function HomePage() {
    // let columnList = ["中华煤", "高平煤", "高硫煤", "泥煤", "兰炭煤", "蒙煤", "+"];
    let lieList = ["热量", "煤比例", "灰分", "挥发", "碳", "可磨", "水分"];
    
    const { Column, ColumnGroup } = Table;
    
    const [columnList, setColumnList] = useState(["中华煤", "高平煤", "高硫煤", "泥煤", "兰炭煤", "蒙煤"]);

    const [valMap, setValMap] = useState({});

    const [comValMap, setComValMap] = useState({});

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
    return (
        <div>
            <div className={comStyle.editTableBox}>
                <teble className={comStyle.editTable} style={{width: (columnList.length * 20) + 'vw'}} border="1">
                    <tr>
                        <td>种类</td>
                        {
                            columnList.map((column, index) => {
                                return (
                                    <td onClick={() => {
                                        columnList[0];
                                        setColumnList();
                                    }}>{column}</td>
                                )
                            })
                        }
                        <td onClick={() => {
                            let currArr = [...columnList]
                            currArr.push('哈哈');
                            setColumnList(currArr);
                        }}>+</td>
                    </tr>
                    {
                        lieList.map((lie, lieIndex) => {
                            return (
                                <tr>
                                    <td>{lie}</td>
                                    {
                                        columnList.map((column, columnIndex) => {
                                            return <td ><input type="text" onChange={(e) => {
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
                </teble>
            </div>
            <table className={comStyle.totalTable}>
                <tr>
                    <td>指标项</td>
                    <td>配后指标</td>
                </tr>
                {
                    lieList.map(lie => {
                        return (
                            <tr>
                                <td>{lie}</td>
                                <td>{comValMap[lie]}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
}
