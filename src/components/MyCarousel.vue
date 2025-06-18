<template>
  <h1>My Carousel</h1>
  <button @click="SubstractIndex">←</button>
  <img
    :src="GetImg(myIndex)"
    :alt="GetAlt(myIndex)"
    :title="GetTitle(myIndex)"
    width="200px"
    height="auto"
  />
  <button @click="AddIndex">→</button>
</template>
<script setup>
import { ref } from "vue";
const myIndex = ref(0);
const GetImg = (index) => {
  return images.value[index].img;
};
const GetAlt = (index) => {
  return images.value[index].alt;
};
const GetTitle = (index) => {
  return images.value[index].title;
};
const images = ref([
  {
    img: "/src/assets/9ed35a46-9d95-4376-bd47-a267b49a22c0.png",
    title: "9ed35a46-9d95-4376-bd47-a267b49a22c0",
    alt: "9ed35a46-9d95-4376-bd47-a267b49a22c0",
  },
  {
    img: "/src/assets/21c67f20-84c2-4646-bec3-b9fa233b8b0b.png",
    title: "21c67f20-84c2-4646-bec3-b9fa233b8b0b",
    alt: "21c67f20-84c2-4646-bec3-b9fa233b8b0b",
  },
  {
    img: "/src/assets/41debbc7-e26c-402d-8d29-7fa1b06441b7.png",
    title: "41debbc7-e26c-402d-8d29-7fa1b06441b7",
    alt: "41debbc7-e26c-402d-8d29-7fa1b06441b7",
  },
  {
    img: "/src/assets/44ef5e91-5995-4658-9861-797fa0361fd7.png",
    title: "44ef5e91-5995-4658-9861-797fa0361fd7",
    alt: "44ef5e91-5995-4658-9861-797fa0361fd7",
  },
  {
    img: "/src/assets/63cc7480-d6a0-4504-9a35-89b83d254198.png",
    title: "63cc7480-d6a0-4504-9a35-89b83d254198",
    alt: "63cc7480-d6a0-4504-9a35-89b83d254198",
  },
  {
    img: "/src/assets/20240917_183326-removebg.png",
    title: "20240917_183326-removebg",
    alt: "20240917_183326-removebg",
  },
  {
    img: "/src/assets/BackTshirtBack.png",
    title: "BackTshirtBack",
    alt: "BackTshirtBack",
  },
  {
    img: "/src/assets/c3e6f75e-0767-4a8f-8592-6157fc19cb5a.png",
    title: "c3e6f75e-0767-4a8f-8592-6157fc19cb5a",
    alt: "c3e6f75e-0767-4a8f-8592-6157fc19cb5a",
  },
  {
    img: "/src/assets/d2a0cf5c-a4dd-4763-95b6-6e1110fa7281.png",
    title: "d2a0cf5c-a4dd-4763-95b6-6e1110fa7281",
    alt: "d2a0cf5c-a4dd-4763-95b6-6e1110fa7281",
  },
  {
    img: "/src/assets/dc4e1702-42f6-4d28-ae9c-46cf288d5c7d.png",
    title: "dc4e1702-42f6-4d28-ae9c-46cf288d5c7d",
    alt: "dc4e1702-42f6-4d28-ae9c-46cf288d5c7d",
  },
  {
    img: "/src/assets/ec6a52ef-397a-481d-a1c2-4336dabc2eb5.png",
    title: "ec6a52ef-397a-481d-a1c2-4336dabc2eb5",
    alt: "ec6a52ef-397a-481d-a1c2-4336dabc2eb5",
  },
  {
    img: "/src/assets/f56a77b4-342b-4624-aaee-0a1eefda1c02 (1).png",
    title: "f56a77b4-342b-4624-aaee-0a1eefda1c02 (1)",
    alt: "f56a77b4-342b-4624-aaee-0a1eefda1c02 (1)",
  },
  {
    img: "/src/assets/f98cb2db-a161-45e0-9e4d-766b4cfde74a.png",
    title: "f98cb2db-a161-45e0-9e4d-766b4cfde74a",
    alt: "f98cb2db-a161-45e0-9e4d-766b4cfde74a",
  },
  {
    img: "/src/assets/IMG_0032.jpg",
    title: "IMG_0032",
    alt: "IMG_0032",
  },
  {
    img: "/src/assets/logo.png",
    title: "logo",
    alt: "logo",
  },
  {
    img: "/src/assets/MyTshirtmy.png",
    title: "MyTshirtmy",
    alt: "MyTshirtmy",
  },
]);
function AddIndex() {
  if (myIndex.value < images.value.length - 1) {
    myIndex.value++;
  } else {
    myIndex.value = 0;
  }
}
function SubstractIndex() {
  if (myIndex.value > 0) {
    myIndex.value--;
  } else {
    myIndex.value = images.value.length - 1;
  }
}
</script>
