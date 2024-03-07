import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    // 타입스크립트 컴파일을 도와줌
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
  ],
  build: {
    // 라이브러리 모드로 빌드하는 데 필요한 설정
    lib: {
      // 진입점, 제공하고자하는 컴포넌트를 모두 export하는 부분
      entry: resolve("src/components/index.ts"),
      // 라이브러리 이름
      name: "@ahnsujin/ui",
      // 출력 파일 이름 지정
      fileName: "index",
      // 라이브러리를 어떤 형식으로 빌드할지 지정 ES모듈, Command JS 형식, umd...?
      formats: ["es", "umd", "cjs"],
    },
    // rollup에 전달될 추가 옵션 정의
    rollupOptions: {
      // 빌드 과정에서 외부로 처리될 패키지 명시
      external: ["react", "react-dom"],
      // 빌드 결과물의 출력 옵션을 설정
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});