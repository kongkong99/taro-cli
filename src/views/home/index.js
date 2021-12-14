
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/store';
import adapter from 'src/api';
import styles from './index.module.scss';


export default observer(() => {
  const { value, update } = useStore('demo');
  const [mockData, setMockData] = useState('启动mockServer获取mock数据');
  useEffect(() => {
    async function getData() {
      try {
        const data = await adapter.getMockData();
        setMockData(data);
      } catch (error) {
        console.error('没有启动mock在线服务');
      }
    }
    getData();
  }, []);
  return (
    <View className={styles.home__container}>
      <View>Hello world!</View>

      <View>Mock Data: <Text className={styles.home__mock}>{mockData}</Text></View>
      <View>Store Value:
        {value}
        <AtButton type='primary'
          onClick={() => { update({ value: value + 1 }); }}
        >点击自增
        </AtButton>
      </View>
      <View>
        1像素边框
        <View className={styles.home__underline}></View>
      </View>

    </View>
  );
});

