/** @jsxImportSource @emotion/react */
import Button from '@/components/Button';
import Input from '@/components/Input';
import { css } from '@emotion/react';
import { useState } from 'react';
import SwitchV1 from '@/components/SwitchV1';
import mq from '@/lib/breakpoints';
import { Link } from '@inertiajs/react';

export default function Login() {
    const [checked, setChecked] = useState(false);
    return (
        <div
            css={css(
                mq({
                    maxWidth: [320, 330],
                    margin: 'auto',
                    marginTop: 90,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: [14, 17],
                }),
            )}
        >
            <div
                css={css({
                    textAlign: 'center',
                })}
            >
                <h2>Login</h2>
            </div>
            <Input placeholder="Alamat Email" label="Email" type="text" />
            <Input placeholder="Kata Sandi" label="Password" type="password" />
            <div
                css={css({
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    gap: 10,
                })}
            >
                <Link
                    css={css({
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: 'none',
                        color: '#991a26',
                    })}
                    href="/forgot-password"
                >
                    Lupa Password?
                </Link>
                <Button block variant="danger" disabled={false}>
                    Login Sekarang
                </Button>
            </div>
            <div
                css={css({
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 10,
                })}
            >
                <span css={css({ fontSize: 13, color: 'rgb(82, 82, 82)' })}>
                    Belum punya akun?{' '}
                    <Link
                        css={css({
                            fontWeight: 600,
                            textDecoration: 'none',
                            color: '#991a26',
                        })}
                        href="/register"
                    >
                        Daftar disini
                    </Link>
                </span>
            </div>
        </div>
    );
}
