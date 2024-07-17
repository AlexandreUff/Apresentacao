export default function ResumeModalContent(){
    return <>
    <div
                    style={
                        {
                            backgroundColor: '#6EBF8B',
                            border: '4px solid #151D3B',
                            borderRadius: '10px',
                            width: '412px',
                        }
                    }
                >
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#151D3B',
                                width: '100%',
                                height: '40px',
                                margin: '0px',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }
                        }
                    >
                        Escolha o idioma do currículo
                    </div>
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#151D3B',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                padding: '20px'
                                }
                            }
                    >
                        <ul>
                            <li style={{marginBottom:'10px'}}>
                                <a
                                    href="https://drive.google.com/file/d/1mjRuG7yA4TX5dmp-JTLBlfp3jKBP9HlL/view?usp=drive_link"
                                    title="Currículo de Alexandre magno em português"
                                    target="blank"
                                    style={{
                                        color: '#151D3B'
                                    }}
                                >
                                    🇧🇷 Português Brasil (PDF)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1qN8R-2V3dzccoUvGkv_TXMq7VZl5DWkD/view?usp=drive_link"
                                    title="Alexandre Magno resume in english"
                                    target="blank"
                                    style={{
                                        color: '#151D3B'
                                    }}
                                >
                                    🇺🇸 Inglês (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
    </>
}