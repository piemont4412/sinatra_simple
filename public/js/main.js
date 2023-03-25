$(function() {
	$('.add-star').click(function() {
		const $this = $(this);
		const post_id = $this.attr('data-post-id');
		$.ajax({
			url: '/star?post_id=' + post_id,
			dataType: 'json',
			success: function(data) {
				$this.text(data['star_count']);
			},
			error: function(data) {
				alert('失敗しました');
			}
		});
	});
});
