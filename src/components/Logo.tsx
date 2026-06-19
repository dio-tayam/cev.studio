import Image from 'next/image'

export default function Logo({ className = 'h-7 w-auto' }: { className?: string }) {
  return (
    <Image
      src="/final-logo.png"
      alt="cev.studio"
      width={1500}
      height={359}
      className={className}
    />
  )
}
