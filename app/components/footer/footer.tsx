interface FooterProps {
  className?: string;
}


export default function Footer({ className }: FooterProps) {
    return (
      <div className={`p-8 lg:p-20 ${className}`}>
        <div className="flex justify-between">
          <div className="uppercase">julija matic</div>
          <div>instagram@username</div>
        </div>
      </div>
    );
  }

