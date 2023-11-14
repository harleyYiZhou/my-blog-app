// usePageTitle.js
import { ref, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, watchEffect } from 'vue';

const DEFAULT_TITLE = '大宇宙'; // 替换为你的网站名称

function usePageTitle() {
  const title = ref(DEFAULT_TITLE);

  const setTitle = (newTitle) => {
    title.value = newTitle;
    document.title = newTitle ? `${newTitle} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  };

  // 在组件挂载前和路由切换时更新标题
  // onBeforeMount(() => setTitle(title.value));
  // onBeforeUnmount(() => setTitle(title.value));

  watchEffect(() => {
    setTitle(title.value);
  });

  // 在组件挂载后，监听路由变化并更新标题
  // onMounted(() => {
  //   const unwatch = watchEffect(() => {
  //     setTitle(title.value);
  //   });

  //   // 在组件销毁时停止监听
  //   onUnmounted(() => {
  //     unwatch();
  //   });
  // });

  return setTitle;
}

export default usePageTitle;
