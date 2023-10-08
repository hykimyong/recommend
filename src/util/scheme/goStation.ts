import { isWebViewOrMobileWeb } from "./WebViewCheck";


const goStation = (url:string, oCallback:string) => {
    // 웹뷰이면
    if (isWebViewOrMobileWeb) {
        goLink({
            scheme: 'afreeca://browser/station'
            , data: { url: url }
            , callback: oCallback
        });
    } else if (this.isMobileWeb()) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}

export default goStation;