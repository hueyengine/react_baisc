import React, { Component } from 'react';
import { Button, Space } from 'antd';
import { WechatOutlined, SmileOutlined } from '@ant-design/icons';

class App extends Component {
    render() {
        return (
            <div>
                App......
                <button>点我</button>
                <hr />
                <Button type="primary">Primary Button</Button>
                <hr />
                <Button>Primary Button</Button>
                <hr />
                <Space>
                    <SmileOutlined rotate={180} />
                    <WechatOutlined />
                </Space>
            </div>
        );
    }
}

export default App;
