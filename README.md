# 별코딩 customHook 연습

## 커스텀 훅 만드는법

그냥 함수를 만들고 함수명을 지어주고 함수 동작 내용을 정의해주고 매개변수와 리턴값도 마음대로 정의 다른 커스텀 훅도 사용가능

### Example

```js
const [inputValue, setInputValue] = useState('');

const handleChange = (e) => {
  setInputValue(e.target.value);
};
const handleSubmit = () => {
  alert(inputValue);
  setInputValue('');
};
```

위와 같은 기능을 하는 부분이 여러곳이 있다면
이 코드를 복사붙혀넣기하는 것이 아니라 커스텀 훅으로 만들어서 쓸 수 있다.
