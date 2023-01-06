import $ from 'jquery';

$(function() {
    const dt = new DataTransfer();

    $("#attachment").on('change', function(e){
        for(var i = 0; i < this.files.length; i++){
            let fileBlock = $('<span/>', {class: 'files-upload__item'}),
                fileName = $('<span/>', {class: 'name', text: this.files.item(i).name});
            fileBlock.append('<svg class="files-upload__item-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.47C9.99479 4.42407 9.98474 4.37882 9.97 4.335V4.29C9.94596 4.23859 9.91389 4.19133 9.875 4.15L6.875 1.15C6.83367 1.11111 6.78641 1.07904 6.735 1.055H6.69L6.53 1H3.5C3.10218 1 2.72064 1.15804 2.43934 1.43934C2.15804 1.72064 2 2.10218 2 2.5V9.5C2 9.89782 2.15804 10.2794 2.43934 10.5607C2.72064 10.842 3.10218 11 3.5 11H8.5C8.89782 11 9.27936 10.842 9.56066 10.5607C9.84196 10.2794 10 9.89782 10 9.5V4.47ZM7 2.705L8.295 4H7V2.705ZM9 9.5C9 9.63261 8.94732 9.75979 8.85355 9.85355C8.75979 9.94732 8.63261 10 8.5 10H3.5C3.36739 10 3.24021 9.94732 3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H6V4.5C6 4.63261 6.05268 4.75979 6.14645 4.85355C6.24021 4.94732 6.36739 5 6.5 5H9V9.5Z" fill="white"/></svg>')
                .append(fileName)
                .append('<span class="files-upload__item-delete"><span>+</span></span>');
            $("#filesList > #filesNames").append(fileBlock);
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;

        $('span.files-upload__item-delete').click(function(){
            let name = $(this).next('span.name').text();

            $(this).parent().remove();
            for(let i = 0; i < dt.items.length; i++){
                if(name === dt.items[i].getAsFile().name){
                    dt.items.remove(i);
                    continue;
                }
            }
            // Mise à jour des fichiers de l'input file après suppression
            document.getElementById('attachment').files = dt.files;
        });
    });
});