

const Footer = () => {
  return (
    <footer className="w-full bottom-0  bg-black py-6 px-4 text-white border-t border-[--var-color-text]">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
      
      <p className="text-sm text-center mb-4 md:mb-0">
        &copy; 2024 Lucas Aguirre. Todos los derechos reservados.
      </p>
  
      <div className="flex space-x-6">
        <a href="https://twitter.com" target="_blank" className="hover:text-[--var-color-text-red] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.927 4.927 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.196 4.92 4.92 0 0 0-8.384 4.482 13.975 13.975 0 0 1-10.141-5.146 4.918 4.918 0 0 0 1.523 6.573A4.899 4.899 0 0 1 .965 8.72v.062a4.92 4.92 0 0 0 3.946 4.827 4.899 4.899 0 0 1-2.224.084 4.923 4.923 0 0 0 4.604 3.417A9.869 9.869 0 0 1 .59 19.33a13.936 13.936 0 0 0 7.548 2.212c9.057 0 14.01-7.5 14.01-14 0-.214-.005-.427-.014-.637A10.01 10.01 0 0 0 24 4.557z"/></svg>
        </a>
        <a href="https://github.com" target="_blank" className="hover:text-[--var-color-text-red] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.155c-3.338.726-4.043-1.416-4.043-1.416-.546-1.388-1.333-1.759-1.333-1.759-1.089-.746.083-.73.083-.73 1.205.084 1.838 1.24 1.838 1.24 1.07 1.834 2.809 1.304 3.494.997.108-.776.42-1.304.763-1.603-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.522.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.004.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.654.241 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.606-2.807 5.625-5.48 5.92.43.373.815 1.103.815 2.222v3.293c0 .32.19.694.8.577C20.565 22.092 24 17.597 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[--var-color-text-red] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.268V1.73C24 .774 23.208 0 22.23 0zM7.06 20.452H3.664V9.085H7.06v11.367zM5.36 7.696a2.004 2.004 0 1 1 0-4.007 2.004 2.004 0 0 1 0 4.007zM20.452 20.452h-3.393V14.79c0-1.35-.027-3.086-1.88-3.086-1.882 0-2.17 1.468-2.17 2.984v5.764h-3.396V9.085h3.26v1.553h.046c.454-.864 1.566-1.777 3.225-1.777 3.45 0 4.09 2.27 4.09 5.223v6.368z"/></svg>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer