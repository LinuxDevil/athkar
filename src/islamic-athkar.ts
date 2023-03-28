import * as vscode from 'vscode';
import { ATHKAR, Theker } from './constants';

const getAthkarArray = (): string[] => {
    return ATHKAR.map((thker: Theker) => {
        return thker.zekr;
    }).filter((thker: string) => {
        return thker.length < 110 && thker.length > 20;
    });
};

const athkar = getAthkarArray();

const generateAthkarMessage = (): string => {
    const athkarMessage = athkar[Math.floor(Math.random() * athkar.length)];
    return athkarMessage;
};

export const showAthkar = (): void => {
    const athkarMessage = generateAthkarMessage();
    vscode.window.showInformationMessage(athkarMessage);
};