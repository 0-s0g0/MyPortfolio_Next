import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * クラス名を条件付きで結合するユーティリティ関数
 * Tailwind CSSのクラス名の衝突を解決します
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
