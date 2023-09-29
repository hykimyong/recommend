export interface IAuthInfo {
    accessToken  : String
    userAgreeToken : String
    obscureUserId  : String | null
    isBj : Boolean
}

export  interface IResolution {
    width : Number
    height : Number
}

export  interface IBroadInfo {
    broadNo : String
    title : String
    thumbnail : String
    startTime : String
    allowsAdult : Boolean
    resolution  : IResolution
    canResend : Boolean
    hasPassword : Boolean
    bjId : String
    bjNickname : String
    bjThumbnail : String
    categoryNo  : String
    bitrate : String
}

export interface IPlayerInfo {
    displayResolution : IResolution
    isFullScreen : Boolean
    isMuted  : Boolean
    isScreenMode : Boolean
    isPipMode  : Boolean
    isRadio : Boolean
    language  : String
    theme : String
    volume  : Number
}