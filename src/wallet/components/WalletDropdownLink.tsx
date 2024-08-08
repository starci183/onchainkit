import { isValidElement, useMemo } from 'react';
import { walletSvg } from '../../internal/svg/walletSvg';
import { cn, pressable, text } from '../../styles/theme';
import type { WalletDropdownLinkReact } from '../types';

export function WalletDropdownLink({
  children,
  className,
  icon,
  href,
  rel,
  target,
}: WalletDropdownLinkReact) {
  const iconSvg = useMemo(() => {
    if (icon === undefined) {
      return null;
    }
    switch (icon) {
      case 'wallet':
        return walletSvg;
    }
    if (isValidElement(icon)) {
      return icon;
    }
  }, [icon]);

  return (
    <a
      className={cn(
        pressable.default,
        'relative flex items-center px-4 py-3',
        className,
      )}
      href={href}
      target={target}
      rel={rel}
    >
      <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-4 w-4 items-center justify-center">
        {iconSvg}
      </div>
      <span className={cn(text.body, 'pl-6')}>{children}</span>
    </a>
  );
}
