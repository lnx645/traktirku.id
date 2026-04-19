/** @jsxImportSource @emotion/react */
import Button from '@/components/Button';
import Input from '@/components/Input';
import { css } from '@emotion/react';
import { useState } from 'react';
import SwitchV1 from '@/components/SwitchV1';
import mq from '@/lib/breakpoints';

export default function Login() {
    const [checked, setChecked] = useState(false);
    return (
        <div
            css={css(
                mq({
                    maxWidth: [320, 280],
                    margin: 'auto',
                    marginTop: 25,
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
            <div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        margin-bottom: 10px;
                    `}
                >
                    <SwitchV1
                        label="Simpan Session Login"
                        checked={checked}
                        onChange={() => {
                            setChecked(!checked);
                        }}
                    />
                </div>
                <Button block variant="danger" disabled={false}>
                    Login Sekarang
                </Button>
            </div>
        </div>
    );
}
