# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: with
## Options

`````js
{}
`````
## Input

`````js
(x = (with) = f) => {}
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 10
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 10,
                "end": 10
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
                        "start": 11,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 11,
                    "end": 15
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 11,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 6,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(x = (with) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 10
✖ Missing an opening parentheses - '( - start: 10, end: 11
✖ Identifier expected - start: 11, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13
✖ Expected a `;` - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 19

```

