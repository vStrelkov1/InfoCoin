import React, {FC} from 'react'
import concatClasses from '../../utils/concatClasses';
import style from './icons.module.scss'

interface IconProps {
  className?: string;
  color?: string;
  hoverColor?: string;
}

export const ProfileIcon: FC<IconProps> = ({ color, hoverColor, className }) => (
	<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={concatClasses(style.profile, className)}>
    <path d="M47.0776 39.9879C45.8485 37.2374 44.0648 34.7389 41.8258 32.6318C39.5937 30.5186 36.9495 28.8337 34.0393 27.6702C34.0132 27.6579 33.9872 27.6518 33.9611 27.6394C38.0205 24.8693 40.6595 20.3572 40.6595 15.2663C40.6595 6.83291 33.4268 0 24.5 0C15.5732 0 8.34053 6.83291 8.34053 15.2663C8.34053 20.3572 10.9795 24.8693 15.0389 27.6456C15.0128 27.6579 14.9868 27.6641 14.9607 27.6764C12.0416 28.8398 9.42218 30.508 7.17418 32.6379C4.93733 34.7467 3.15389 37.2447 1.92236 39.9941C0.712497 42.6857 0.0599916 45.5715 0.000162937 48.4952C-0.00157619 48.5609 0.0106218 48.6263 0.0360384 48.6875C0.0614551 48.7486 0.099576 48.8044 0.148155 48.8514C0.196734 48.8985 0.254788 48.9359 0.318896 48.9614C0.383005 48.9869 0.451871 49 0.521436 49H4.43098C4.71768 49 4.94574 48.7845 4.95226 48.5198C5.08258 43.7676 7.10251 39.317 10.6732 35.9436C14.3678 32.4533 19.2742 30.5327 24.5 30.5327C29.7258 30.5327 34.6322 32.4533 38.3268 35.9436C41.8975 39.317 43.9174 43.7676 44.0477 48.5198C44.0543 48.7907 44.2823 49 44.569 49H48.4786C48.5481 49 48.617 48.9869 48.6811 48.9614C48.7452 48.9359 48.8033 48.8985 48.8518 48.8514C48.9004 48.8044 48.9385 48.7486 48.964 48.6875C48.9894 48.6263 49.0016 48.5609 48.9998 48.4952C48.9347 45.5528 48.2896 42.6903 47.0776 39.9879V39.9879ZM24.5 25.8543C21.5092 25.8543 18.6943 24.7524 16.5766 22.7518C14.459 20.7511 13.2926 18.0918 13.2926 15.2663C13.2926 12.4408 14.459 9.78153 16.5766 7.7809C18.6943 5.78028 21.5092 4.67839 24.5 4.67839C27.4908 4.67839 30.3057 5.78028 32.4234 7.7809C34.541 9.78153 35.7074 12.4408 35.7074 15.2663C35.7074 18.0918 34.541 20.7511 32.4234 22.7518C30.3057 24.7524 27.4908 25.8543 24.5 25.8543Z" fill="#1E656D"/>
  </svg>

)