import LoginCard from '@/components/login';

export default function LoginPage() {
    return (
        <div>
            <LoginCard back="/" registration="/register" recover="/recover" />
        </div>
    );
}
