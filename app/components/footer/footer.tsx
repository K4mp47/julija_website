interface FooterProps {
  className?: string;
}


export default function Footer({ className = "" }: FooterProps) {
    return (
      <footer className={`fixed bottom-0 left-0 w-full bg-white lg:p-8 z-50 ${className} border`}>
        <div className="p-8 flex flex-col space-y-2 justify-between sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="uppercase butovo">julija matic</div>
          <div className="">instagram@username</div>
        </div>
      </footer>
    );
}

