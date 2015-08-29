/* eslint-disable indent, no-multiple-empty-lines */

import {
  ruleTester
} from "../../../testUtils"
import rule, { ruleName, messages } from ".."

const testRule = ruleTester(rule, ruleName)

// 2 spaces
testRule(2, tr => {

tr.ok(
`a { color: pink; }
`)

tr.ok(
`a,
b { color: pink; }
`)

tr.ok(
`a,
b,
c { color: pink; }
`)

tr.ok(
`@media print {
  a,
  b { color: pink;}
}
`)

tr.notOk(
`a,
  b { color: pink; }
`,
{
  message: messages.expected("0 spaces at line 2"),
  line: 2,
  column: 1,
})

tr.notOk(
`a,
b,
 c { color: pink; }
`,
{
  message: messages.expected("0 spaces at line 3"),
  line: 3,
  column: 1,
})

tr.notOk(
`@media print {
  a,
b { color: pink;}
}
`,
{
  message: messages.expected("2 spaces at line 3"),
  line: 3,
  column: 1,
})

tr.notOk(
`@media print {
  a,
   b { color: pink;}
}
`,
{
  message: messages.expected("2 spaces at line 3"),
  line: 3,
  column: 1,
})

tr.notOk(
`@media print {
   a,
  b { color: pink;}
}
`,
{
  message: messages.expected("2 spaces at line 2"),
  line: 2,
  column: 4,
})

})
