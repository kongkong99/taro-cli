
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/store';
import adapter from 'src/api';
import styles from './index.module.scss';


export default observer(() => {
  const { value, update } = useStore('demo');
  const [mockData, setMockData] = useState('可启动mockServer获取mock数据');
  useEffect(() => {
    async function getData() {
      const data = await adapter.getMockData();
      setMockData(data);
    }
    getData();
  }, []);
  return (
    <View className='index'>
      <View>Hello world!</View>
      <View className={styles.test}></View>
      <View>Mock Data: {mockData}</View>
      <View>Store Value: {value}
        <AtButton type='primary'
          onClick={() => { update({ value: value + 1 }); }}
        >点击自增</AtButton>
      </View>
    </View>
  );
});

