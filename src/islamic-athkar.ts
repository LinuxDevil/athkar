import * as vscode from 'vscode';

const generateAthkarMessage = (): string => {
    const athkar = [
        'سبحان الله وبحمده',
        'الحمد لله',
        'لا إله إلا الله',
        'الله أكبر',
        'سبحان الله وبحمده',
        'الحمد لله',
        'لا إله إلا الله',
        'الله أكبر'
    ];
    const athkarMessage = athkar[Math.floor(Math.random() * athkar.length)];
    return athkarMessage;
};

export const showAthkar = (): void => {
    // const athkarMessage = generateAthkarMessage();
    // vscode.window.showInformationMessage(athkarMessage);
};