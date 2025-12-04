import React from 'react';

const BasicFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="font-black text-lg text-black tracking-tighter uppercase italic">ZAPATOS.</span>
          <p className="text-black text-[10px] font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Zapatos Inc. Derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BasicFooter;