import $ from 'jquery';

$(document).on('mouseup', function (e){
    let $tableEditSelect = $('.table .table__edit-select');
    let $tableEditAction = $('.table .table__edit-action');
    if (!$tableEditSelect.is(e.target) // клик был не по блоку
        && !$tableEditAction.is(e.target)
        && $tableEditAction.has(e.target).length === 0 // и не по его дочерним
    ) {
        $tableEditSelect.hide();
    }
});