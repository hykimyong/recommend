const useOpenNewWindow = (url: string) => {
  return () => {
    // 새 창을 열기
    const newWindow = window.open(url, '_blank');

    // 새 창에서 링크로 이동
    if (newWindow) {
      newWindow.location.href = url;
    } else {
      // 팝업이 차단되었거나 새 창이 열리지 않은 경우, 현재 창에서 이동
      window.location.href = url;
    }
  };
};

export default useOpenNewWindow;