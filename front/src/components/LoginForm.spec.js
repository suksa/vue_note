// import { sum } from './math';

// describe('sum 함수 테스트', () => {
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).toBe(30);
//   });
// });

// 사용자 관점에서 작성
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'tedwdwd',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
