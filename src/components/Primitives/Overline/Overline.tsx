function Overline({ children, ...props }: { children: string }) {
  return <p className={`text-[0.875rem] uppercase leading-[19px] tracking-[10px] ${props}`}>{children}</p>;
}

export default Overline;
