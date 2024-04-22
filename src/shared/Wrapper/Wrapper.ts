interface WrapperProps {
    children: React.ReactNode;
  }

export default function Wrapper({children} : WrapperProps) {
    console.log('Loading the wrapper component')
    return children;
}