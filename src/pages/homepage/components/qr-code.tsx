import React from 'react'
import { Input, QRCode } from 'antd';

type Props = {
    urlLink: string
}

const QRCodeComponent = (props: Props) => {
    const { urlLink } = props;
    return (
        <div>
            <QRCode value={urlLink || '-'} />
        </div>
    )
}

export default QRCodeComponent