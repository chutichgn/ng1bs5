import * as angular from 'angular';

/**
 * Type definitions for ng1bs5 Progressbar component
 */

/**
 * Progressbar scope interface
 */
export interface IProgressbarScope extends angular.IScope {
    value: number;
    max: number;
    type?: string;
    animate: boolean;
    title: string;
    barStyle: { [key: string]: string };
    barClasses: { [key: string]: boolean };
}

/**
 * Progress container scope interface
 */
export interface IProgressScope extends angular.IScope {
    max: number;
    animate: boolean;
    title: string;
}

/**
 * Bar scope interface
 */
export interface IBarScope extends angular.IScope {
    value: number;
    type?: string;
    title: string;
    max: number;
    animate: boolean;
    barStyle: { [key: string]: string };
    barClasses: { [key: string]: boolean };
}

/**
 * Progress Controller interface
 */
export interface IProgressController {
    max: number;
    animate: boolean;
    title: string;
    bars: IBarScope[];
    addBar(bar: IBarScope): void;
    removeBar(bar: IBarScope): void;
}

/**
 * Progressbar attributes interface
 */
export interface IProgressbarAttributes extends angular.IAttributes {
    value: string;
    max?: string;
    type?: string;
    animate?: string;
    title?: string;
}

/**
 * Progress attributes interface
 */
export interface IProgressAttributes extends angular.IAttributes {
    max?: string;
    animate?: string;
    title?: string;
}

/**
 * Bar attributes interface
 */
export interface IBarAttributes extends angular.IAttributes {
    value: string;
    type?: string;
    title?: string;
}
