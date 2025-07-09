# Netlify React + TypeScript + Webpack SPA 템플릿

이 프로젝트는 Netlify에 바로 배포 가능한 React + TypeScript + Webpack SPA 템플릿입니다.

## 사용법

1. **의존성 설치**

   ```bash
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   npm start
   ```

   브라우저가 자동으로 열리며, http://localhost:3000 에서 확인할 수 있습니다.

3. **프로덕션 빌드**

   ```bash
   npm run build
   ```

   `dist` 폴더가 생성됩니다.

4. **Netlify 배포**
   - Netlify 사이트에서 새 사이트를 생성하고, 이 저장소를 연결하세요.
   - 빌드 명령어: `npm run build`
   - Publish directory: `dist`

5. **SPA 라우팅**
   - `public/_redirects` 파일이 자동으로 포함되어 SPA 라우팅이 정상 동작합니다.

---

문의: assistant에게 언제든 질문하세요! 
 