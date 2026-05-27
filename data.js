// Racer Breeding Game - Shared Data & Utilities (data.js)
// This file is loaded globally via index.html to avoid CORS issues on local file:// protocol.

window.CAR_DATA = {
    lv1: {
        id: 'lv1',
        name: '초보 연습 차량',
        image: 'car/lv1.jpg',
        baseSpeed: 150,
        baseAccel: 3.0,
        baseHandling: 3.0,
        reqLevel: 0,
        desc: '레이싱의 기본을 다지기 위한 조그만 연습 차량'
    },
    gv70: {
        id: 'gv70',
        name: 'GV70',
        image: 'car/gv70.jpg',
        baseSpeed: 180,
        baseAccel: 4.0,
        baseHandling: 4.2,
        reqLevel: 2,
        desc: '묵직한 가속감과 안정성을 겸비한 럭셔리 SUV'
    },
    k5: {
        id: 'k5',
        name: 'K5',
        image: 'car/k5.jpg',
        baseSpeed: 190,
        baseAccel: 4.2,
        baseHandling: 4.5,
        reqLevel: 2,
        desc: '스포티한 주행감과 민첩한 코너링의 스포츠 세단'
    },
    ct: {
        id: 'ct',
        name: '사이버트럭',
        image: 'car/ct.jpg',
        baseSpeed: 210,
        baseAccel: 5.5,
        baseHandling: 4.0,
        reqLevel: 10,
        desc: '단단한 장갑과 폭발적인 초반 토크의 미래형 트럭'
    },
    my: {
        id: 'my',
        name: '모델 Y',
        image: 'car/my.jpg',
        baseSpeed: 200,
        baseAccel: 5.0,
        baseHandling: 4.6,
        reqLevel: 0,
        desc: '전기차 특유의 부드럽고 균형 잡힌 친환경 SUV'
    },
    carnival: {
        id: 'carnival',
        name: '카니발',
        image: 'car/carnival.jpg',
        baseSpeed: 165,
        baseAccel: 3.5,
        baseHandling: 3.5,
        reqLevel: 0,
        desc: '넓고 안락한 공간을 자랑하는 대한민국 대표 패밀리 미니밴'
    },
    sorento: {
        id: 'sorento',
        name: '쏘렌토',
        image: 'car/sorento.jpg',
        baseSpeed: 172,
        baseAccel: 3.8,
        baseHandling: 3.8,
        reqLevel: 0,
        desc: '강인한 디자인과 뛰어난 공간 활용성의 대표 패밀리 SUV'
    },
    macan: {
        id: 'macan',
        name: '마칸',
        image: 'car/macan.jpg',
        baseSpeed: 220,
        baseAccel: 6.0,
        baseHandling: 5.5,
        reqLevel: 0,
        desc: '포르쉐의 스포츠카 DNA를 그대로 이식한 럭셔리 스포츠 SUV'
    },
    urus: {
        id: 'urus',
        name: '우루스',
        image: 'car/urus.jpg',
        baseSpeed: 250,
        baseAccel: 7.0,
        baseHandling: 6.5,
        reqLevel: 20,
        desc: '슈퍼카의 성능과 SUV의 실용성을 결합한 하이퍼 SUV'
    },
    nsx: {
        id: 'nsx',
        name: '혼다 NSX',
        image: 'car/honda_nsx.jpg',
        baseSpeed: 270,
        baseAccel: 8.0,
        baseHandling: 7.8,
        reqLevel: 25,
        desc: '혼다의 첨단 하이브리드 기술과 미드쉽 레이아웃이 융합된 친환경 슈퍼카'
    },
    supra: {
        id: 'supra',
        name: '토요타 수프라',
        image: 'car/toyota_supra.webp',
        baseSpeed: 290,
        baseAccel: 8.5,
        baseHandling: 8.2,
        reqLevel: 30,
        desc: '강력한 터보 엔진과 우수한 밸런스로 레이서들의 사랑을 받는 튜닝의 대명사'
    },
    bmw_m4: {
        id: 'bmw_m4',
        name: 'BMW M4',
        image: 'car/bmw_m4.jpg',
        baseSpeed: 310,
        baseAccel: 9.0,
        baseHandling: 8.8,
        reqLevel: 35,
        cost: 5,
        desc: '역동적인 디자인과 트랙 중심의 강력한 드라이빙 퍼포먼스를 선사하는 고성능 쿠페'
    },
    musteng: {
        id: 'musteng',
        name: '포드 뉴 머스탱',
        image: 'car/ford_new musteng.jpg',
        baseSpeed: 330,
        baseAccel: 9.5,
        baseHandling: 8.5,
        reqLevel: 40,
        cost: 7,
        desc: '아메리칸 머슬카의 전설, 웅장한 배기음과 폭발적인 후륜 퍼포먼스의 상징'
    },
    benz_s: {
        id: 'benz_s',
        name: '벤츠 S클래스',
        image: 'car/benz_s class.png',
        baseSpeed: 350,
        baseAccel: 10.0,
        baseHandling: 9.2,
        reqLevel: 45,
        cost: 7,
        desc: '플래그십 세단의 정석, 품격 높은 승차감 속에 숨겨진 고요하고 강력한 퍼포먼스'
    },
    audi_r8: {
        id: 'audi_r8',
        name: '아우디 R8',
        image: 'car/audi_r8.jpg',
        baseSpeed: 380,
        baseAccel: 11.0,
        baseHandling: 10.0,
        reqLevel: 50,
        cost: 7,
        desc: 'V10 미드쉽 엔진을 품은 아우디 모터스포츠 기술력의 정수, 궁극의 하이퍼카'
    }
};

// 최고속도 연산 순수 함수
window.getSpeedVal = (carId, partsVal) => {
    const car = window.CAR_DATA[carId] || window.CAR_DATA.lv1;
    const base = car.baseSpeed;
    const partBonus = (partsVal.engine * 3) + (partsVal.mission * 2) + (partsVal.tire * 2) + (partsVal.brake * 2);
    const minLevel = Math.min(partsVal.engine, partsVal.mission, partsVal.tire, partsVal.brake);
    const balanceBonus = minLevel * 15;
    return base + partBonus + balanceBonus;
};

// 가속도 연산 순수 함수 (무제한)
window.getAccelVal = (carId, partsVal) => {
    const car = window.CAR_DATA[carId] || window.CAR_DATA.lv1;
    const base = car.baseAccel;
    const upgradeBonus = (partsVal.engine * 0.15) + (partsVal.mission * 0.1) + (partsVal.tire * 0.1);
    return parseFloat((base + upgradeBonus).toFixed(2));
};

// 핸들링 연산 순수 함수
window.getHandlingVal = (carId, partsVal) => {
    const car = window.CAR_DATA[carId] || window.CAR_DATA.lv1;
    const base = car.baseHandling || 5.0;
    const upgradeBonus = (partsVal.mission * 0.1) + (partsVal.tire * 0.15) + (partsVal.brake * 0.1);
    return parseFloat((base + upgradeBonus).toFixed(2));
};

// 문제 생성 유틸리티 함수
window.generateProblem = (isToddler = false, isAdult = false, currentLevel = 1) => {
    if (isToddler) {
        // 유아모드: 1 ~ 5 사이의 과일 개수 세기 방식
        const fruits = ['🍎', '🍌', '🍇', '🍓', '🍊'];
        const chosenFruit = fruits[Math.floor(Math.random() * fruits.length)];
        const count = Math.floor(Math.random() * 5) + 1; // 1 ~ 5 제한
        return {
            id: Math.random().toString(36).substr(2, 9),
            type: 'toddler',
            fruit: chosenFruit,
            fruitCount: count,
            numbers: [count],
            ops: [],
            answer: count
        };
    }
    if (isAdult) {
        // 성인모드: 세 자리 숫자 더하기 빼기
        const type = Math.floor(Math.random() * 2) + 1;
        if (type === 1) {
            // 세자리 수 2개 연산
            const a = Math.floor(Math.random() * 900) + 100; // 100 ~ 999
            const b = Math.floor(Math.random() * 900) + 100; // 100 ~ 999
            const op = Math.random() > 0.5 ? '+' : '-';

            const finalA = op === '-' && a < b ? b : a;
            const finalB = op === '-' && a < b ? a : b;
            const finalAnswer = op === '+' ? finalA + finalB : finalA - finalB;

            return {
                id: Math.random().toString(36).substr(2, 9),
                type: 'adult',
                numbers: [finalA, finalB],
                ops: [op],
                answer: finalAnswer
            };
        } else {
            // 세자리 수 3개 혼합 연산
            const a = Math.floor(Math.random() * 900) + 100;
            const b = Math.floor(Math.random() * 400) + 100;
            const c = Math.floor(Math.random() * 400) + 100;
            const op1 = Math.random() > 0.5 ? '+' : '-';
            const op2 = Math.random() > 0.5 ? '+' : '-';

            let finalA = a;
            let finalB = b;
            if (op1 === '-' && a < b) {
                finalA = b + 150;
            }
            let temp = op1 === '+' ? finalA + finalB : finalA - finalB;

            let finalC = c;
            if (op2 === '-' && temp < c) {
                finalC = Math.floor(temp / 2) + 1;
            }
            const answer = op2 === '+' ? temp + finalC : temp - finalC;

            return {
                id: Math.random().toString(36).substr(2, 9),
                type: 'adult_3',
                numbers: [finalA, finalB, finalC],
                ops: [op1, op2],
                answer: answer
            };
        }
    }

    // 레벨 40 이상 고난이도 문제 출제 분기
    if (currentLevel >= 40) {
        const type = Math.floor(Math.random() * 3) + 1; // 1: 두자리 덧셈, 2: 두자리 뺄셈, 3: 구구단
        if (type === 1) {
            // 받아올림이 있는 두자리 수 + 두자리 수
            let a, b;
            do {
                a = Math.floor(Math.random() * 80) + 10; // 10 ~ 89
                b = Math.floor(Math.random() * 80) + 10; // 10 ~ 89
            } while ((a % 10) + (b % 10) < 10); // 일의 자리 합이 10 이상이어야 받아올림 보장

            return {
                id: Math.random().toString(36).substr(2, 9),
                type: 'level40_add',
                numbers: [a, b],
                ops: ['+'],
                answer: a + b
            };
        } else if (type === 2) {
            // 받아내림이 있는 두자리 수 - 두자리 수
            let a, b;
            do {
                a = Math.floor(Math.random() * 80) + 19; // 19 ~ 98
                b = Math.floor(Math.random() * 80) + 10; // 10 ~ 89
            } while (a <= b || (a % 10) >= (b % 10)); // a > b 여야 하고, 일의 자리 a < b 여야 받아내림 보장

            return {
                id: Math.random().toString(36).substr(2, 9),
                type: 'level40_sub',
                numbers: [a, b],
                ops: ['-'],
                answer: a - b
            };
        } else {
            // 구구단 (한자리 수 곱셈)
            const a = Math.floor(Math.random() * 8) + 2; // 2 ~ 9
            const b = Math.floor(Math.random() * 9) + 1; // 1 ~ 9
            return {
                id: Math.random().toString(36).substr(2, 9),
                type: 'level40_mul',
                numbers: [a, b],
                ops: ['×'],
                answer: a * b
            };
        }
    }

    const type = Math.floor(Math.random() * 3) + 1;

    if (type === 1) {
        // 1. 받아내림이 있는 두자리 숫자 뺄셈
        let a, b;
        do {
            a = Math.floor(Math.random() * 70) + 20; // 20 ~ 89
            b = Math.floor(Math.random() * 8) + 2;   // 2 ~ 9
        } while (a % 10 >= b); // 일의 자리 숫자가 빼는 수보다 작아야 받아내림 발생

        return {
            id: Math.random().toString(36).substr(2, 9),
            type: 1,
            numbers: [a, b],
            ops: ['-'],
            answer: a - b
        };
    } else if (type === 2) {
        // 2. 받아올림이 있는 두자리 + 한자리 숫자 덧셈
        let a, b;
        do {
            a = Math.floor(Math.random() * 70) + 11; // 11 ~ 80
            b = Math.floor(Math.random() * 8) + 2;   // 2 ~ 9
        } while ((a % 10) + b < 10); // 일의 자리 합이 10 이상이어야 받아올림 발생

        return {
            id: Math.random().toString(36).substr(2, 9),
            type: 2,
            numbers: [a, b],
            ops: ['+'],
            answer: a + b
        };
    } else {
        // 3. 세 수의 연산 (덧셈/뺄셈 섞임)
        let a, b, c, op1, op2, ans;
        do {
            a = Math.floor(Math.random() * 11) + 10; // 10 ~ 20
            b = Math.floor(Math.random() * 9) + 1;   // 1 ~ 9
            c = Math.floor(Math.random() * 9) + 1;   // 1 ~ 9
            op1 = Math.random() > 0.5 ? '+' : '-';
            op2 = Math.random() > 0.5 ? '+' : '-';

            let temp = op1 === '+' ? a + b : a - b;
            ans = op2 === '+' ? temp + c : temp - c;
        } while ((op1 === '-' && a - b < 0) || ans < 0 || ans > 40); // 중간 계산과 결과가 음수가 되지 않도록 설정

        return {
            id: Math.random().toString(36).substr(2, 9),
            type: 3,
            numbers: [a, b, c],
            ops: [op1, op2],
            answer: ans
        };
    }
};

// 물리 기반 완주 시간 계산 (초)
window.calcPhysicsTime = (maxSpeed, accel, trackId = 'monza', handling = 5) => {
    let speedMultiplier = 1.0;
    let accelMultiplier = 1.0;
    const isJeju = trackId === 'jeju' || trackId === true;
    const trackLength = isJeju ? 8000 : 10000;

    if (isJeju) {
        // 제주 트랙은 코너가 많아 핸들링(Tire/Brake 튜닝 등)이 낮으면 감속이 크게 일어납니다.
        // 핸들링 값이 6.0일 때 기본 성능(1.0)에 가까우며, 높을수록 페널티가 최소화됩니다.
        speedMultiplier = 0.35 + 0.65 * (handling / (handling + 6));
        accelMultiplier = 0.5 + 0.5 * (handling / (handling + 6));
    }

    const v = (maxSpeed * speedMultiplier) / 3.6; // m/s
    const a = accel * accelMultiplier; // m/s^2
    const t_acc = v / a;
    const d_acc = 0.5 * a * t_acc * t_acc;
    if (d_acc >= trackLength) {
        return Math.sqrt((2 * trackLength) / a);
    } else {
        const d_cruise = trackLength - d_acc;
        const t_cruise = d_cruise / v;
        return t_acc + t_cruise;
    }
};

// 가상 경과 시간에 따른 실시간 주행거리 계산 (m)
window.getDistAtTime = (maxSpeed, accel, t, trackId = 'monza', handling = 5) => {
    let speedMultiplier = 1.0;
    let accelMultiplier = 1.0;
    const isJeju = trackId === 'jeju' || trackId === true;
    const trackLength = isJeju ? 8000 : 10000;

    if (isJeju) {
        speedMultiplier = 0.35 + 0.65 * (handling / (handling + 6));
        accelMultiplier = 0.5 + 0.5 * (handling / (handling + 6));
    }

    const v_max = (maxSpeed * speedMultiplier) / 3.6;
    const a = accel * accelMultiplier;
    const t_acc = v_max / a;
    const d_acc = 0.5 * a * t_acc * t_acc;

    if (t <= t_acc) {
        const curDist = 0.5 * a * t * t;
        return Math.min(trackLength, curDist);
    } else {
        const curDist = d_acc + v_max * (t - t_acc);
        return Math.min(trackLength, curDist);
    }
};

// 가상 경과 시간에 따른 실시간 시속 계산 (km/h)
window.getSpeedAtTime = (maxSpeed, accel, t, trackId = 'monza', handling = 5) => {
    let speedMultiplier = 1.0;
    let accelMultiplier = 1.0;
    const isJeju = trackId === 'jeju' || trackId === true;

    if (isJeju) {
        speedMultiplier = 0.35 + 0.65 * (handling / (handling + 6));
        accelMultiplier = 0.5 + 0.5 * (handling / (handling + 6));
    }

    const v_max = maxSpeed * speedMultiplier;
    const v_max_ms = v_max / 3.6;
    const a = accel * accelMultiplier;
    const t_acc = v_max_ms / a;
    if (t <= t_acc) {
        return Math.min(v_max, (a * t) * 3.6);
    } else {
        return v_max;
    }
};
