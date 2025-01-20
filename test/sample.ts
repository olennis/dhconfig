// 린트와 프리티어 테스트를 위한 의도적으로 포맷이 잘못된 코드
const hello = (name: string) => {
    console.log("Hello, " + name + "!");
    return true;
};

export const unused = "this will trigger eslint warning";

hello("world") 