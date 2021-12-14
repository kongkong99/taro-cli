/** 使用示例
 * import adapter from 'src/api';
 * adapter.getMessage();
 * adapter.postData({ type: 'array' });
 */

import { apiDecorator } from './adapter';

const adapter = apiDecorator(process.env.BASE_URL || '/', [
  /** get请求数据 */
  {
    name: 'getMockData',
    method: 'get',
    url: 'api/mock/data'
  },

  /** get请求数据 */
  {
    name: 'getMessage',
    method: 'get',
    url: 'array'
  },

  /** post请求数据 */
  {
    name: 'postMessage',
    method: 'post',
    url: 'array'
  },

  /** url含有参数类型接口 */
  {
    name: 'postData',
    method: 'post',
    url: '{type}'
  },
]);

export default adapter;
