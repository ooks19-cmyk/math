// Racer Breeding Game - Database & User Synchronization Service (db.js)
// This file is loaded globally via index.html to manage user authentication and data backups.

const firebaseConfig = {
    apiKey: "AIzaSyD0jJfd1uyjzpYqN3cyLHn1sVr7dIkxQac",
    authDomain: "my-family-ab699.firebaseapp.com",
    projectId: "my-family-ab699",
    storageBucket: "my-family-ab699.firebasestorage.app",
    messagingSenderId: "289127412048",
    appId: "1:289127412048:web:cd5f0b40f4bd6a56a5bc55",
    measurementId: "G-GLH78VGYSF"
};

const dbService = {
    isFirebase: false,
    firestore: null,

    init() {
        const hasConfig = firebaseConfig && firebaseConfig.apiKey && firebaseConfig.apiKey.trim() !== "";
        if (hasConfig) {
            try {
                if (!firebase.apps.length) {
                    firebase.initializeApp(firebaseConfig);
                }
                this.firestore = firebase.firestore();
                this.isFirebase = true;
                console.log("🟢 Firebase Firestore 클라우드 연결 완료!");
            } catch (error) {
                console.error("🔴 Firebase 초기화 에러 (로컬 모의 클라우드로 대체):", error);
                this.isFirebase = false;
            }
        } else {
            console.log("🔵 Firebase 설정 없음 - 로컬 모의 클라우드로 작동합니다.");
            this.isFirebase = false;
        }
    },

    // 로컬 모의 클라우드 헬퍼 (로컬스토리지 모의 DB)
    _getLocalUsers() {
        try {
            const data = localStorage.getItem('racer-mock-cloud-users');
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    },

    _saveLocalUsers(users) {
        try {
            localStorage.setItem('racer-mock-cloud-users', JSON.stringify(users));
        } catch (e) {
            console.error("로컬 백업 저장 실패:", e);
        }
    },

    // 로그인 처리
    async login(id, password) {
        const normalizedId = id.trim().toLowerCase();
        if (!normalizedId) throw new Error("아이디를 입력해주세요.");

        if (this.isFirebase) {
            try {
                const doc = await this.firestore.collection('racer_users').doc(normalizedId).get();
                if (!doc.exists) {
                    throw new Error("존재하지 않는 아이디입니다.");
                }
                const userData = doc.data();
                if (userData.password !== password) {
                    throw new Error("비밀번호가 올바르지 않습니다.");
                }
                return userData;
            } catch (error) {
                console.error("Firebase 로그인 실패:", error);
                throw error;
            }
        } else {
            // 로컬 모의 클라우드 로그인
            const users = this._getLocalUsers();
            const user = users[normalizedId];
            if (!user) {
                throw new Error("존재하지 않는 아이디입니다.");
            }
            if (user.password !== password) {
                throw new Error("비밀번호가 올바르지 않습니다.");
            }
            return user;
        }
    },

    // 회원가입 처리
    async register(id, password) {
        const normalizedId = id.trim().toLowerCase();
        if (!normalizedId) throw new Error("아이디를 입력해주세요.");
        if (!password || password.trim() === "") throw new Error("비밀번호를 입력해주세요.");

        // 기본 시작 정보
        const defaultData = {
            id: normalizedId,
            password: password,
            level: 1,
            totalExp: 0,
            parts: { engine: 0, mission: 0, tire: 0, brake: 0 },
            upgradePoints: 0,
            ownedCars: ['lv1'],
            activeCar: 'lv1',
            hasSelectedInitialCar: false,
            hasSeenLv2Popup: false,
            updatedAt: new Date().toISOString()
        };

        if (this.isFirebase) {
            try {
                const docRef = this.firestore.collection('racer_users').doc(normalizedId);
                const doc = await docRef.get();
                if (doc.exists) {
                    throw new Error("이미 존재하는 아이디입니다.");
                }
                await docRef.set(defaultData);
                return defaultData;
            } catch (error) {
                console.error("Firebase 회원가입 실패:", error);
                throw error;
            }
        } else {
            // 로컬 모의 클라우드 가입
            const users = this._getLocalUsers();
            if (users[normalizedId]) {
                throw new Error("이미 존재하는 아이디입니다.");
            }
            users[normalizedId] = defaultData;
            this._saveLocalUsers(users);
            return defaultData;
        }
    },

    // 데이터 클라우드 동기화 저장
    async saveProgress(id, progressData) {
        const normalizedId = id.trim().toLowerCase();
        if (!normalizedId) return;

        if (this.isFirebase) {
            try {
                await this.firestore.collection('racer_users').doc(normalizedId).update({
                    ...progressData,
                    updatedAt: new Date().toISOString()
                });
                console.log("☁️ Firestore 클라우드 저장 완료");
            } catch (error) {
                console.error("Firestore 저장 실패 (배경 백업):", error);
            }
        } else {
            // 로컬 모의 클라우드 업데이트
            const users = this._getLocalUsers();
            if (users[normalizedId]) {
                users[normalizedId] = {
                    ...users[normalizedId],
                    ...progressData,
                    updatedAt: new Date().toISOString()
                };
                this._saveLocalUsers(users);
                console.log("💾 로컬 모의 클라우드 데이터 저장 완료");
            }
        }
    },

    // 실시간 랭킹 수집 메서드
    async fetchRankings() {
        if (this.isFirebase) {
            try {
                const snapshot = await this.firestore.collection('racer_users').get();
                const list = [];
                snapshot.forEach(doc => {
                    list.push(doc.data());
                });
                return list;
            } catch (error) {
                console.error("Firebase 랭킹 수집 실패:", error);
                throw error;
            }
        } else {
            const usersObj = this._getLocalUsers();
            return Object.values(usersObj);
        }
    }
};

dbService.init();

// Export globally
window.dbService = dbService;
window.firebaseConfig = firebaseConfig;
