# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: for
## Options

`````js
{}
`````
## Input

`````js
for = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 3,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 0,
                "start": 0,
                "end": 7
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 7,
                "end": 7
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 7,
                "end": 7
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 7,
                    "end": 7
                },
                "flags": 16,
                "start": 7,
                "end": 7
            },
            "flags": 80,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "for = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 4, end: 5
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 3, end: 5
✖ Identifier expected - start: 7, end: 7

```

