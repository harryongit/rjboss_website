/**
 * Theme-aware SweetAlert2 utility
 * 
 * This utility automatically detects and applies the current theme (light/dark)
 * to all SweetAlert2 dialogs. It reads CSS variables from your theme system
 * and converts them to colors that SweetAlert2 can use.
 * 
 * @example
 * // Simple success alert
 * swalSuccess("Success!", "Operation completed successfully");
 * 
 * @example
 * // Error alert
 * swalError("Error", "Something went wrong");
 * 
 * @example
 * // Success with custom options
 * swalSuccess("Login Successful!", undefined, {
 *   showConfirmButton: false,
 *   timer: 1500,
 * });
 * 
 * @example
 * // Confirmation dialog
 * swalConfirm("Are you sure?", "This action cannot be undone").then((result) => {
 *   if (result.isConfirmed) {
 *     // User clicked Yes
 *   }
 * });
 * 
 * @example
 * // Delete confirmation with callback
 * swalDelete("Delete Item", "Are you sure you want to delete this?", () => {
 *   // Delete logic here
 *   console.log("Item deleted");
 * });
 */

import Swal, { SweetAlertOptions } from 'sweetalert2';

/**
 * Get theme-aware SweetAlert2 configuration
 * Automatically detects current theme from document
 */
const getThemeConfig = (): Partial<SweetAlertOptions> => {
  const isDark = document.documentElement.classList.contains('dark');
  
  // Get CSS variable value and convert HSL to hex
  const getCSSColor = (varName: string, fallback: string): string => {
    const hsl = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    
    if (!hsl) return fallback;
    
    // Parse HSL values (e.g., "262 83% 58%")
    const values = hsl.split(/\s+/).map(v => parseFloat(v));
    if (values.length < 3) return fallback;
    
    const [h, s, l] = values;
    const sDecimal = s / 100;
    const lDecimal = l / 100;
    
    const c = (1 - Math.abs(2 * lDecimal - 1)) * sDecimal;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = lDecimal - c / 2;
    
    let r = 0, g = 0, b = 0;
    
    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }
    
    const toHex = (n: number) => {
      const hex = Math.round((n + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return {
    background: getCSSColor('--card', isDark ? '#1a1a1f' : '#ffffff'),
    color: getCSSColor('--card-foreground', isDark ? '#fafafa' : '#1f1f23'),
    confirmButtonColor: getCSSColor('--primary', '#6C47FF'),
    cancelButtonColor: getCSSColor('--border', isDark ? '#33333a' : '#e5e7eb'),
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: true,
    customClass: {
      popup: isDark ? 'swal-dark-theme' : 'swal-light-theme',
    },
  };
};

/**
 * Base function to show SweetAlert2 with theme awareness
 */
export const showSwal = (options: SweetAlertOptions): Promise<any> => {
  const themeConfig = getThemeConfig();
  return Swal.fire({
    ...themeConfig,
    ...options,
  } as SweetAlertOptions);
};

/**
 * Success alert
 */
export const swalSuccess = (
  title: string,
  text?: string,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'success',
    title,
    text,
    ...options,
  } as SweetAlertOptions);
};

/**
 * Error alert
 */
export const swalError = (
  title: string,
  text?: string,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'error',
    title,
    text,
    ...options,
  } as SweetAlertOptions);
};

/**
 * Warning alert
 */
export const swalWarning = (
  title: string,
  text?: string,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'warning',
    title,
    text,
    ...options,
  } as SweetAlertOptions);
};

/**
 * Info alert
 */
export const swalInfo = (
  title: string,
  text?: string,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'info',
    title,
    text,
    ...options,
  } as SweetAlertOptions);
};

/**
 * Question/Confirm dialog
 */
export const swalConfirm = (
  title: string,
  text: string,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'question',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: options?.confirmButtonText || 'Yes',
    cancelButtonText: options?.cancelButtonText || 'No',
    ...options,
  } as SweetAlertOptions);
};

/**
 * Delete confirmation dialog
 */
export const swalDelete = (
  title: string,
  text: string,
  onConfirm: () => void,
  options?: Partial<SweetAlertOptions>
): Promise<any> => {
  return showSwal({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: options?.confirmButtonText || 'Delete',
    cancelButtonText: options?.cancelButtonText || 'Cancel',
    confirmButtonColor: '#dc2626', // red-600
    cancelButtonColor: '#6b7280', // gray-500
    ...options,
  } as SweetAlertOptions).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
};

/**
 * Custom alert with full control
 */
export const swalCustom = (options: SweetAlertOptions): Promise<any> => {
  return showSwal(options);
};
