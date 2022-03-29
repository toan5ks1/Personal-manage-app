import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tooltip, Dropdown, message, Menu } from 'antd';
import { DownOutlined, QuestionCircleOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import './User.css';
// import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import General from './General'

// export type Status = {
//   color: string;
//   text: string;
// };

const statusMap = {
  0: {
    color: 'blue',
    text: 'Nice to have',
  },
  1: {
    color: 'green',
    text: 'Must have',
  },
  2: {
    color: 'red',
    text: 'Wasted',
  },
};

// export type TableListItem = {
//   key: number;
//   name: string;
//   containers: number;
//   creator: string;
//   status: Status;
//   createdAt: number;
// };
const tableListDataSource = [];

for (let i = 0; i < 5; i += 1) {
  let obj = {
    key: i,
    outCome: Math.floor(Math.random() * 200),
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
  };
  obj.percent = Math.floor(obj.outCome/0.7) + '%';
  tableListDataSource.push(obj)
}

const columns = [
  {
    title: (
      <>
        Date
        <Tooltip placement="top" title="Click to highlight">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: 'Chi tiêu',
    width: 120,
    dataIndex: 'outCome',
    align: 'right',
    sorter: (a, b) => a.outCome - b.outCome,
  },
  {
    title: 'Ngân sách',
    width: 120,
    dataIndex: 'percent',
    align: 'right',
    sorter: (a, b) => a.outCome - b.outCome,
  },
];

const expandedRowRender = () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <ProTable
      columns={[
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },

        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          valueType: 'option',
          render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
        },
      ]}
      headerTitle={false}
      search={false}
      options={false}
      dataSource={data}
      pagination={false}
    />
  );
};

export default () => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Thu nhập
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Chi tiêu
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='user__container'>
    <ProTable
      style={{width: '70%'}}
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      expandable={{ expandedRowRender }}
      search={false}
      dateFormatter="string"
      headerTitle="Bảng chi tiêu"
      options={false}
      toolBarRender={() => [
        <Button key="show">查看日志</Button>,
        <Dropdown overlay={menu}>
          <Button>
            Chọn bảng <DownOutlined />
          </Button>
        </Dropdown>,
        <Button key="primary" type="primary">
          创建应用
        </Button>,
      ]}
    />
    <General />
    </div>
  );
};