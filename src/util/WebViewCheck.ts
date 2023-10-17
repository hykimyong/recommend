//웹뷰 전체 체크
export const isWebViewOrMobileWeb = (): boolean => {
  // iOS의 경우
  const isIOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

  // Android의 경우
  const isAndroidWebView = /Android.*wv/i.test(navigator.userAgent);

  // 모바일 웹 여부 확인
  const isMobileWeb = /Mobi/i.test(navigator.userAgent);

  return isIOSWebView || isAndroidWebView || isMobileWeb;
}
  
//모바일웹 체크
export const isMobileWeb = (): boolean  => {
  return /Mobi/i.test(navigator.userAgent);
}