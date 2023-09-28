import { useCallback } from 'react';

const useMakeProfileImg = () => {
    const profileImgDomain = '//profile.img.afreecatv.com';
    
  const makeProfileImg = useCallback((bjId: string) => {
    const prefix = bjId.slice(0, 2);
    return `${profileImgDomain}/LOGO/${prefix}/${bjId}/${bjId}.jpg`;
  }, []);

  return makeProfileImg;
};

export default useMakeProfileImg;