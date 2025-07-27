import * as THREE from "three";

// サイズを指定
const width = 2000;
const height = 1000;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.setClearColor(0xC9E8F1, 1); // 背景色を#C9E8F1に設定

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height);
camera.position.set(0, 0, +1000);

// テクスチャを読み込む
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("1.png"); // 画像のパスを指定

// 球体を作成
const geometry = new THREE.SphereGeometry(150, 70, 70); // 半径200, 横32分割, 縦32分割
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

tick();

// 毎フレーム時に実行されるループイベントです
function tick() {
  sphere.rotation.y += 0.01; // Y軸を中心に回転
  renderer.render(scene, camera); // レンダリング

  requestAnimationFrame(tick);
}

// スクロールイベントを追加
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  renderer.setClearColor(0xC9E8F1 + scrollY * 0.0001, 1); // 背景色をスクロールに応じて変化
});

// スクロールイベントでラベルを表示・非表示
window.addEventListener("scroll", () => {
  const label = document.querySelector(".sphere-label");
  const label2 = document.querySelector(".sphere-label2");
  const scrollY = window.scrollY;

  // スクロール位置に応じて透明度を変化
  if (scrollY > 200 && scrollY < 2500) {
    // 表示範囲を拡大
    label.classList.add("visible");
    label.classList.remove("hidden");
    label2.classList.add("visible");
    label2.classList.remove("hidden");
  } else if (scrollY >= 2500) {
    // 非表示範囲を遅らせる
    label.classList.add("hidden");
    label.classList.remove("visible");
    label2.classList.add("hidden");
    label2.classList.remove("visible");
  } else {
    label.classList.remove("hidden");
    label.classList.remove("visible");
    label2.classList.remove("hidden");
    label2.classList.remove("visible");
  }
});

// スクロールイベントで画像を表示・非表示
window.addEventListener("scroll", () => {
  const image = document.querySelector(".center-image");
  const scrollY = window.scrollY;

  if (scrollY > 2800 && scrollY < 5300) {
    image.classList.add("visible"); // 浮かび上がる
  } else {
    image.classList.remove("visible"); // 非表示
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label3, .sphere-label4, .sphere-label5"
  );
  const scrollY = window.scrollY;

  if (scrollY > 5300 && scrollY < 7000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label6, .sphere-label7, .sphere-label8, .sphere-label9"
  );
  const scrollY = window.scrollY;

  if (scrollY > 7000 && scrollY < 9000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
  }
});


// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label10"
  );
  const scrollY = window.scrollY;

  if (scrollY > 9000 && scrollY < 11000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label11, .sphere-label12"
  );
  const scrollY = window.scrollY;

  if (scrollY > 11000 && scrollY < 13000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
  }
});

// スクロールイベントで画像を表示・非表示
window.addEventListener("scroll", () => {
  const image = document.querySelector(".center-image2");
  const scrollY = window.scrollY;

  if (scrollY > 13000 && scrollY < 15000) {
    image.classList.add("visible"); // 浮かび上がる
  } else {
    image.classList.remove("visible"); // 非表示
  }
});
// スクロールイベントで画像を表示・非表示
window.addEventListener("scroll", () => {
  const image = document.querySelector(".center-image3");
  const scrollY = window.scrollY;

  if (scrollY > 13000 && scrollY < 15000) {
    image.classList.add("visible"); // 浮かび上がる
  } else {
    image.classList.remove("visible"); // 非表示
  }
});