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
  const label12 = document.querySelector(".sphere-label12");
  const label13 = document.querySelector(".sphere-label13");
  const label14 = document.querySelector(".sphere-label14");
  const label15 = document.querySelector(".sphere-label15");
  const label16 = document.querySelector(".sphere-label16");
  
  const label2Element = document.querySelector(".label2");
  const label3Element = document.querySelector(".label3");
  const label4Element = document.querySelector(".label4");
  const scrollY = window.scrollY;

  // スクロール位置に応じて透明度を変化
  if (scrollY > 2800 && scrollY < 5300) {
    // 表示範囲を変更
    label.classList.add("visible");
    label.classList.remove("hidden");
    label2.classList.add("visible");
    label2.classList.remove("hidden");
    if (label12) {
      label12.classList.add("visible");
      label12.classList.remove("hidden");
    }
    if (label13) {
      label13.classList.add("visible");
      label13.classList.remove("hidden");
    }
    if (label14) {
      label14.classList.add("visible");
      label14.classList.remove("hidden");
    }
    if (label15) {
      label15.classList.add("visible");
      label15.classList.remove("hidden");
    }
    if (label16) {
      label16.classList.add("visible");
      label16.classList.remove("hidden");
    }
    label2Element.classList.add("visible");
    label3Element.classList.add("visible");
    label4Element.classList.add("visible");
  } else if (scrollY >= 5300) {
    // 非表示範囲を調整
    label.classList.add("hidden");
    label.classList.remove("visible");
    label2.classList.add("hidden");
    label2.classList.remove("visible");
    if (label12) {
      label12.classList.add("hidden");
      label12.classList.remove("visible");
    }
    if (label13) {
      label13.classList.add("hidden");
      label13.classList.remove("visible");
    }
    if (label14) {
      label14.classList.add("hidden");
      label14.classList.remove("visible");
    }
    if (label15) {
      label15.classList.add("hidden");
      label15.classList.remove("visible");
    }
    if (label16) {
      label16.classList.add("hidden");
      label16.classList.remove("visible");
    }
    label2Element.classList.remove("visible");
    label3Element.classList.remove("visible");
    label4Element.classList.remove("visible");
  } else {
    label.classList.remove("hidden");
    label.classList.remove("visible");
    label2.classList.remove("hidden");
    label2.classList.remove("visible");
    if (label12) {
      label12.classList.remove("hidden");
      label12.classList.remove("visible");
    }
    if (label13) {
      label13.classList.remove("hidden");
      label13.classList.remove("visible");
    }
    if (label14) {
      label14.classList.remove("hidden");
      label14.classList.remove("visible");
    }
    if (label15) {
      label15.classList.remove("hidden");
      label15.classList.remove("visible");
    }
    if (label16) {
      label16.classList.remove("hidden");
      label16.classList.remove("visible");
    }
    label2Element.classList.remove("visible");
    label3Element.classList.remove("visible");
    label4Element.classList.remove("visible");
  }
});

// スクロールイベントで画像を表示・非表示
window.addEventListener("scroll", () => {
  const image = document.querySelector(".center-image");
  const centerImage11Element = document.querySelector(".center-image11");
  const label5Element = document.querySelector(".label5");
  const label6Element = document.querySelector(".label6");
  const label7Element = document.querySelector(".label7");
  const scrollY = window.scrollY;

  if (scrollY > 200 && scrollY < 2500) {
    image.classList.add("visible"); // 浮かび上がる
    if (centerImage11Element) centerImage11Element.classList.add("visible"); // center-image11も表示
    if (label5Element) label5Element.classList.add("visible"); // label5も表示
    if (label6Element) label6Element.classList.add("visible"); // label6も表示
    if (label7Element) label7Element.classList.add("visible"); // label7も表示
    console.log("Labels should be visible at scroll:", scrollY); // デバッグ用
  } else {
    image.classList.remove("visible"); // 非表示
    if (centerImage11Element) centerImage11Element.classList.remove("visible"); // center-image11も非表示
    if (label5Element) label5Element.classList.remove("visible"); // label5も非表示
    if (label6Element) label6Element.classList.remove("visible"); // label6も非表示
    if (label7Element) label7Element.classList.remove("visible"); // label7も非表示
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label3, .sphere-label4, .sphere-label5"
  );
  const label8Element = document.querySelector(".label8");
  const label9Element = document.querySelector(".label9");
  const centerImage6Element = document.querySelector(".center-image6");
  const centerImage7Element = document.querySelector(".center-image7");
  const scrollY = window.scrollY;

  if (scrollY > 9000 && scrollY < 11000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
    if (label8Element) label8Element.classList.add("visible"); // label8も表示
    if (label9Element) label9Element.classList.add("visible"); // label9も表示
    if (centerImage6Element) centerImage6Element.classList.add("visible"); // center-image6も表示
    if (centerImage7Element) centerImage7Element.classList.add("visible"); // center-image7も表示
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
    if (label8Element) label8Element.classList.remove("visible"); // label8も非表示
    if (label9Element) label9Element.classList.remove("visible"); // label9も非表示
    if (centerImage6Element) centerImage6Element.classList.remove("visible"); // center-image6も非表示
    if (centerImage7Element) centerImage7Element.classList.remove("visible"); // center-image7も非表示
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label6, .sphere-label7, .sphere-label8, .sphere-label9"
  );
  const label10Element = document.querySelector(".label10");
  const label11Element = document.querySelector(".label11");
  const label12Element = document.querySelector(".label12");
  const scrollY = window.scrollY;

  if (scrollY > 5300 && scrollY < 7000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
    if (label10Element) label10Element.classList.add("visible"); // label10も表示
    if (label11Element) label11Element.classList.add("visible"); // label11も表示
    if (label12Element) label12Element.classList.add("visible"); // label12も表示
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
    if (label10Element) label10Element.classList.remove("visible"); // label10も非表示
    if (label11Element) label11Element.classList.remove("visible"); // label11も非表示
    if (label12Element) label12Element.classList.remove("visible"); // label12も非表示
  }
});


// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const label13Element = document.querySelector(".label13");
  const label14Element = document.querySelector(".label14");
  const centerImage8Element = document.querySelector(".center-image8");
  const centerImage9Element = document.querySelector(".center-image9");
  const centerImage10Element = document.querySelector(".center-image10");
  const scrollY = window.scrollY;

  if (scrollY > 7000 && scrollY < 9000) {
    if (label13Element) label13Element.classList.add("visible"); // label13も表示
    if (label14Element) label14Element.classList.add("visible"); // label14も表示
    if (centerImage8Element) centerImage8Element.classList.add("visible"); // center-image8も表示
    if (centerImage9Element) centerImage9Element.classList.add("visible"); // center-image9も表示
    if (centerImage10Element) centerImage10Element.classList.add("visible"); // center-image10も表示
  } else {
    if (label13Element) label13Element.classList.remove("visible"); // label13も非表示
    if (label14Element) label14Element.classList.remove("visible"); // label14も非表示
    if (centerImage8Element) centerImage8Element.classList.remove("visible"); // center-image8も非表示
    if (centerImage9Element) centerImage9Element.classList.remove("visible"); // center-image9も非表示
    if (centerImage10Element) centerImage10Element.classList.remove("visible"); // center-image10も非表示
  }
});

// スクロールイベントで全てのラベルのタイピングアニメーションを開始
window.addEventListener("scroll", () => {
  const labels = document.querySelectorAll(
    ".sphere-label11, .sphere-label12"
  );
  const label15Element = document.querySelector(".label15");
  const label16Element = document.querySelector(".label16");
  const centerImage4Element = document.querySelector(".center-image4");
  const centerImage5Element = document.querySelector(".center-image5");
  const scrollY = window.scrollY;

  if (scrollY > 11000 && scrollY < 13000) {
    labels.forEach((label) => label.classList.add("visible")); // タイピングアニメーションを開始
    if (label15Element) label15Element.classList.add("visible"); // label15も表示
    if (label16Element) label16Element.classList.add("visible"); // label16も表示
    if (centerImage4Element) centerImage4Element.classList.add("visible"); // center-image4も表示
    if (centerImage5Element) centerImage5Element.classList.add("visible"); // center-image5も表示
  } else {
    labels.forEach((label) => label.classList.remove("visible")); // タイピングアニメーションをリセット
    if (label15Element) label15Element.classList.remove("visible"); // label15も非表示
    if (label16Element) label16Element.classList.remove("visible"); // label16も非表示
    if (centerImage4Element) centerImage4Element.classList.remove("visible"); // center-image4も非表示
    if (centerImage5Element) centerImage5Element.classList.remove("visible"); // center-image5も非表示
  }
});

// スクロールイベントで画像を表示・非表示
window.addEventListener("scroll", () => {
  const image = document.querySelector(".center-image2");
  const label17Element = document.querySelector(".label17");
  const label18Element = document.querySelector(".label18");
  const scrollY = window.scrollY;

  if (scrollY > 13000 && scrollY < 15000) {
    image.classList.add("visible"); // 浮かび上がる
    if (label17Element) label17Element.classList.add("visible"); // label17も表示
    if (label18Element) label18Element.classList.add("visible"); // label18も表示
  } else {
    image.classList.remove("visible"); // 非表示
    if (label17Element) label17Element.classList.remove("visible"); // label17も非表示
    if (label18Element) label18Element.classList.remove("visible"); // label18も非表示
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

// label1のスクロールフェードアウトアニメーション
window.addEventListener("scroll", () => {
  const label1 = document.querySelector(".label1");
  const scrollY = window.scrollY;
  
  // スクロール位置に応じて透明度を計算（0〜500pxの範囲でフェードアウト）
  const fadeStart = 0;
  const fadeEnd = 500;
  
  if (scrollY <= fadeStart) {
    // スクロール開始前は完全に表示
    label1.style.opacity = "1";
  } else if (scrollY >= fadeEnd) {
    // スクロール終了後は完全に非表示
    label1.style.opacity = "0";
  } else {
    // スクロール中は段階的にフェードアウト
    const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    label1.style.opacity = opacity.toString();
  }
});

// スクロールイベントでlabel19とlabel20を表示・非表示
window.addEventListener("scroll", () => {


  const label21Element = document.querySelector(".label21");
  const label19Element = document.querySelector(".label19");
  const label20Element = document.querySelector(".label20");
  const scrollY = window.scrollY;

  if (scrollY > 15000 && scrollY < 17000) {
    if (label21Element) label21Element.classList.add("visible"); // label21を表示
    if (label19Element) label19Element.classList.add("visible"); // label19を表示
    if (label20Element) label20Element.classList.add("visible"); // label20を表示
  } else {
    if (label21Element) label21Element.classList.remove("visible"); // label21を非表示
    if (label19Element) label19Element.classList.remove("visible"); // label19を非表示
    if (label20Element) label20Element.classList.remove("visible"); // label20を非表示
  }
});

// スクロールイベントでlabel19とlabel20を表示・非表示
window.addEventListener("scroll", () => {


  const label22Element = document.querySelector(".label22");
  const label23Element = document.querySelector(".label23");
  const label20Element = document.querySelector(".label24");
  const centerImage16Element = document.querySelector(".center-image16");
  const scrollY = window.scrollY;
  if (scrollY > 17000 && scrollY < 19000) {
    if (label22Element) label22Element.classList.add("visible"); // label22を表示
    if (label23Element) label23Element.classList.add("visible"); // label23を表示
    if (label20Element) label20Element.classList.add("visible"); // label20を表示
    if (centerImage16Element) centerImage16Element.classList.add("visible"); // center-image16を表示
  } else {
    if (label22Element) label22Element.classList.remove("visible"); // label22を非表示
    if (label23Element) label23Element.classList.remove("visible"); // label23を非表示
    if (label20Element) label20Element.classList.remove("visible"); // label20を非表示
    if (centerImage16Element) centerImage16Element.classList.remove("visible"); // center-image16を非表示
  }
});
 // スクロールイベントでlabel19とlabel20を表示・非表示
window.addEventListener("scroll", () => {


  const label22Element = document.querySelector(".label25");
  const label23Element = document.querySelector(".label26");
  const label20Element = document.querySelector(".label27");
  const sphereLabel10Element = document.querySelector(".sphere-label10");
  const centerImage14Element = document.querySelector(".center-image14");
  const centerImage15Element = document.querySelector(".center-image15");
  const scrollY = window.scrollY;
  if (scrollY > 19000 && scrollY < 21000) {
    if (label22Element) label22Element.classList.add("visible"); // label22を表示
    if (label23Element) label23Element.classList.add("visible"); // label23を表示
    if (label20Element) label20Element.classList.add("visible"); // label20を表示
    if (sphereLabel10Element) sphereLabel10Element.classList.add("visible"); // sphere-label10も表示
    if (centerImage14Element) centerImage14Element.classList.add("visible"); // center-image14も表示
    if (centerImage15Element) centerImage15Element.classList.add("visible"); // center-image15も表示
  } else {
    if (label22Element) label22Element.classList.remove("visible"); // label22を非表示
    if (label23Element) label23Element.classList.remove("visible"); // label23を非表示
    if (label20Element) label20Element.classList.remove("visible"); // label20を非表示
    if (sphereLabel10Element) sphereLabel10Element.classList.remove("visible"); // sphere-label10も非表示
    if (centerImage14Element) centerImage14Element.classList.remove("visible"); // center-image14も非表示
    if (centerImage15Element) centerImage15Element.classList.remove("visible"); // center-image15も非表示
  }
}); 
