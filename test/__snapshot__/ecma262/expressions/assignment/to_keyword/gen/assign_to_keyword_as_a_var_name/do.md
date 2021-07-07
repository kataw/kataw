# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_keyword_as_a_var_name
> :: test: assign to keyword as a var name
> :: case: do
## Options

`````js
{}
`````
## Input

`````js
do = x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 2,
                    "end": 6
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 6
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "do = x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 2, end: 4
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 2, end: 4
✖ Missing an opening parentheses - '( - start: 5, end: 6

```

