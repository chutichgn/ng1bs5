import * as angular from 'angular';
import ProgressbarModule from './progressbar.module';

/**
 * Interfaces
 */
interface IStackedBar {
    value: number;
    type: string;
}

interface IProgressDemoScope extends angular.IScope {
    max: number;
    dynamic: number;
    type: string;
    showWarning: boolean;
    stacked: IStackedBar[];
    random: () => void;
    randomStacked: () => void;
}

/**
 * Demo Controller for Progressbar
 */
class ProgressDemoCtrl {
    static $inject = ['$scope'];

    constructor(private $scope: IProgressDemoScope) {
        // Initialize values for dynamic progressbar
        $scope.max = 200;
        $scope.dynamic = 55;
        $scope.type = '';
        $scope.showWarning = false;
        
        // Initialize stacked bars
        $scope.stacked = [];
        this.randomStacked();
        
        // Random function for dynamic progressbar
        $scope.random = () => {
            const value = Math.floor(Math.random() * 100);
            
            $scope.dynamic = value;
            
            // Change type based on value
            if (value < 25) {
                $scope.type = 'danger';
                $scope.showWarning = true;
            } else if (value < 50) {
                $scope.type = 'warning';
                $scope.showWarning = false;
            } else if (value < 75) {
                $scope.type = 'info';
                $scope.showWarning = false;
            } else {
                $scope.type = 'success';
                $scope.showWarning = false;
            }
        };
        
        // Random function for stacked progressbar
        $scope.randomStacked = () => {
            this.randomStacked();
        };
    }
    
    private randomStacked(): void {
        const types: string[] = ['success', 'info', 'warning', 'danger'];
        const total = 100;
        const numberOfBars = Math.floor(Math.random() * 4) + 2; // 2-5 bars
        
        this.$scope.stacked = [];
        let remaining = total;
        
        for (let i = 0; i < numberOfBars; i++) {
            const isLast = (i === numberOfBars - 1);
            const value = isLast ? remaining : Math.floor(Math.random() * remaining);
            remaining -= value;
            
            if (value > 0) {
                this.$scope.stacked.push({
                    value: value,
                    type: types[Math.floor(Math.random() * types.length)]
                });
            }
        }
    }
}

// Demo module
const MODULE_NAME = 'ng1bs5.progressbar.demo';

angular
    .module(MODULE_NAME, [ProgressbarModule])
    .controller('ProgressDemoCtrl', ProgressDemoCtrl);

export default MODULE_NAME;
