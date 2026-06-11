"use client";

import React, { useEffect } from 'react';
import { useRouter, useParams as useNextParams, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export function useNavigate() {
  const router = useRouter();
  
  return (to: string | number, options?: { replace?: boolean; state?: any }) => {
    if (typeof to === 'number') {
      if (to === -1) {
        router.back();
      }
      return;
    }
    
    let target = to;
    
    // Convert React Router state (e.g. marketId) to query params for SSR and reload support
    if (options?.state) {
      try {
        const queryParams = new URLSearchParams();
        Object.entries(options.state).forEach(([key, val]) => {
          if (val !== undefined && val !== null) {
            queryParams.set(key, String(val));
          }
        });
        
        const queryString = queryParams.toString();
        if (queryString) {
          const separator = to.includes('?') ? '&' : '?';
          target = `${to}${separator}${queryString}`;
        }
      } catch (e) {
        console.error("Failed to serialize state to query params", e);
      }
    }
    
    if (options?.replace) {
      router.replace(target);
    } else {
      router.push(target);
    }
  };
}

export function useParams() {
  const params = useNextParams();
  return params || {};
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const state: Record<string, any> = {};
  if (searchParams) {
    searchParams.forEach((value, key) => {
      // Try to parse numbers or booleans if possible
      if (!isNaN(Number(value)) && value.trim() !== '') {
        state[key] = Number(value);
      } else if (value === 'true') {
        state[key] = true;
      } else if (value === 'false') {
        state[key] = false;
      } else {
        state[key] = value;
      }
    });
  }
  
  return {
    pathname: pathname || '',
    search: searchParams ? `?${searchParams.toString()}` : '',
    state: Object.keys(state).length > 0 ? state : null,
  };
}

// Simple fallback components for compatibility
export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  
  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  
  return null;
}

export function NavLink({
  to,
  className,
  children,
  end,
  ...props
}: {
  to: string;
  className?: any;
  children: React.ReactNode;
  end?: boolean;
  [key: string]: any;
}) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname.startsWith(to);
  
  const resolvedClass =
    typeof className === 'function' ? className({ isActive }) : className;
  
  return (
    <Link href={to} className={resolvedClass} {...props}>
      {children}
    </Link>
  );
}

