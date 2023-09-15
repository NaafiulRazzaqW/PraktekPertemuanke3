import React, {Component} from "react";
import Image from './Image';
class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg'/>
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg'/>
                    </li>
                    <li>
                        <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png'/>
                    </li>
                    <li>
                        <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png'/>
                    </li>
                </ol>
            </div>
        )
    }
}
export default List;

// dengan adanya props kita dapat membuat satu component yang dapat digunakan lagi dengan konten yang berbeda