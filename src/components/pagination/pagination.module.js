import angular from 'angular';

const PAGINATION_CONFIG = {
    displayPagesRange: 5,
    firstPageText: '<<',
    previousPageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    withFirstLast: true,
    withPreviousNext: true,
    size: null,
    align: 'left',
    useIcons: true,
    lastPageIcon: 'chevron-bar-right',
    firstPageIcon: 'chevron-bar-left',
    previousPageIcon: 'chevron-left',
    nextPageIcon: 'chevron-right',
    pivot: false
};

const TEMPLATE = `
<nav>
    <ul class="pagination {{size === 'lg' || size === 'sm' ? 'pagination-' + size : ''}}" 
        ng-class="{'justify-content-center': align === 'center', 'justify-content-end': align === 'right'}">
        <li class="page-item" 
            ng-if="withFirstLast && numberPages > pageRange" 
            ng-disabled="currentPage <= 1" 
            ng-class="{disabled: currentPage <= 1}">
            <a class="page-link" href="#" ng-click="changePage(1, $event)">{{firstPageText}}</a>
        </li>
        <li class="page-item" 
            ng-if="withPreviousNext" 
            ng-disabled="currentPage <= 1" 
            ng-class="{disabled: currentPage <= 1}">
            <a class="page-link" href="#" ng-click="changePage(currentPage - 1, $event)">{{previousPageText}}</a>
        </li>
        <li class="page-item" ng-repeat-start="page in pages" ng-if="page !== currentPage">
            <a class="page-link" href="#" ng-click="changePage(page, $event)">{{page}}</a>
        </li>
        <li class="page-item active" ng-repeat-end ng-if="page === currentPage">
            <a class="page-link" href="#" ng-click="$event.preventDefault()">{{page}}</a>
        </li>
        <li class="page-item" 
            ng-if="withPreviousNext" 
            ng-disabled="currentPage >= numberPages" 
            ng-class="{disabled: currentPage >= numberPages}">
            <a class="page-link" href="#" ng-click="changePage(currentPage + 1, $event)">{{nextPageText}}</a>
        </li>
        <li class="page-item" 
            ng-if="withFirstLast && numberPages > pageRange" 
            ng-disabled="currentPage >= numberPages" 
            ng-class="{disabled: currentPage >= numberPages}">
            <a class="page-link" href="#" ng-click="changePage(numberPages, $event)">{{lastPageText}}</a>
        </li>
    </ul>
</nav>`;

class PaginationDirective {
    static $inject = ['bs5PaginationConfig'];

    constructor(bs5PaginationConfig) {
        this.config = bs5PaginationConfig;
        this.restrict = 'E';
        this.template = TEMPLATE;
        this.scope = {
            pageChange: '&?',
            currentPage: '=',
            numberItems: '=',
            pageSize: '=',
            pageRange: '=?',
            withFirstLast: '=?',
            withPreviousNext: '=?',
            firstPageText: '@?',
            lastPageText: '@?',
            previousPageText: '@?',
            nextPageText: '@?',
            size: '@?',
            icons: '=?',
            firstPageIcon: '@?',
            lastPageIcon: '@?',
            nextPageIcon: '@?',
            previousPageIcon: '@?',
            align: '@?',
            pivot: '=?'
        };
    }

    link = (scope) => {
        scope.pageRange = scope.pageRange || this.config.displayPagesRange;
        scope.withFirstLast = angular.isDefined(scope.withFirstLast) ? scope.withFirstLast : this.config.withFirstLast;
        scope.withPreviousNext = angular.isDefined(scope.withPreviousNext) ? scope.withPreviousNext : this.config.withPreviousNext;
        scope.pageSize = angular.isDefined(scope.pageSize) ? scope.pageSize : this.config.pageSize;
        scope.firstPageText = scope.firstPageText || this.config.firstPageText;
        scope.previousPageText = scope.previousPageText || this.config.previousPageText;
        scope.nextPageText = scope.nextPageText || this.config.nextPageText;
        scope.lastPageText = scope.lastPageText || this.config.lastPageText;
        scope.size = scope.size || this.config.size;
        scope.align = scope.align || this.config.align;
        scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);
        scope.pages = [];
        scope.pivot = angular.isDefined(scope.pivot) ? scope.pivot : this.config.pivot;

        const range = (r1, r2) => {
            const ret = [];
            for (let i = r1; i < r2; i++) {
                ret.push(i);
            }
            return ret;
        };

        const pagesLtRange = () => scope.numberPages < scope.pageRange;

        const displayPages = () => {
            const page = scope.currentPage;
            let r = page % scope.pageRange;
            let r2 = page + (scope.pageRange - r);
            let r1 = page - r;

            if (pagesLtRange()) {
                r1 = 0;
                r2 = scope.numberPages;
            } else if (r2 > scope.numberPages) {
                r2 = scope.numberPages;
                r1 = r2 - scope.pageRange;
            }

            if (!pagesLtRange() && scope.pivot) {
                const pivot = Math.ceil(scope.pageRange / 2);

                if (page >= pivot) {
                    r1 = pagesLtRange() ? 0 : page - pivot;
                    r2 = r1 + (pagesLtRange() ? scope.numberPages : scope.pageRange);

                    if (r2 > scope.numberPages) {
                        r2 = scope.numberPages;
                        r1 = r2 - (pagesLtRange() ? scope.numberPages : scope.pageRange);
                    }
                }
            }

            scope.pages = range(r1 + 1, r2 + 1);
        };

        scope.$watch('numberItems', (value, old) => {
            if (!angular.equals(value, old)) {
                scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);

                if (scope.currentPage > scope.numberPages) {
                    scope.pages = [];
                    scope.currentPage = scope.numberPages;
                    displayPages();
                }

                if (scope.pageChange) {
                    scope.pageChange({ $page: scope.currentPage, $pageSize: scope.pageSize });
                }
            }
        });

        scope.$watch('pageSize', (value, old) => {
            if (!angular.equals(value, old)) {
                scope.numberPages = Math.ceil(scope.numberItems / scope.pageSize);

                if (scope.currentPage > scope.numberPages) {
                    displayPages();
                }

                if (scope.pageChange) {
                    scope.pageChange({ $page: scope.currentPage, $pageSize: scope.pageSize });
                }
            }
        });

        scope.$watch('currentPage', (value, old) => {
            if (!angular.equals(value, old)) {
                displayPages();

                if (scope.pageChange) {
                    scope.pageChange({ $page: scope.currentPage, $pageSize: scope.pageSize });
                }
            }
        });

        scope.changePage = (page, evt) => {
            evt.preventDefault();
            scope.currentPage = page;
        };

        displayPages();
    }
}

const MODULE_NAME = 'ng1bs5.pagination';

angular
    .module(MODULE_NAME, [])
    .constant('bs5PaginationConfig', PAGINATION_CONFIG)
    .directive('bs5Pagination', () => new PaginationDirective(...PaginationDirective.$inject));

export default MODULE_NAME;
