const task_functions = require('./task_functions');

test('Знайти позицію підтексту в тексті', () => {
  var text = '<b>lorem</b> ipsum<br> sit <i>amen</i>'
  var substring = 'ipsum sit'
  expect(task_functions.searchSubStringIgnoringTags(text, substring))
    .toBe(13)
  expect(task_functions.searchSubStringIgnoringTags(text, 'lorem ipsum'))
    .toBe(3)
  expect(task_functions.searchSubStringIgnoringTags(text, 'sit amen'))
    .toBe(23)
  expect(task_functions.searchSubStringIgnoringTags(text, 'ipsum sita'))
    .toBe(-1)
})
