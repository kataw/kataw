# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: sw\u0069tch
## Options

`````js
{}
`````
## Input

`````js
(sw\u0069tch = x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 16464,
                "start": 1,
                "end": 12
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 12,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 0,
                "start": 12,
                "end": 16
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "flags": 80,
            "start": 1,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(sw\\u0069tch = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 12
✖ Keywords cannot contain escape characters - start: 1, end: 12
✖ Missing an opening parentheses - '( - start: 13, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 14
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 18

```

