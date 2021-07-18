# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: while
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((while) = f)) => {}
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
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 19
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
                        "start": 20,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 20,
                    "end": 24
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 20,
                "end": 24
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 14,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(x = delete ((while) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 19
✖ Missing an opening parentheses - '( - start: 19, end: 20
✖ Identifier expected - start: 20, end: 22
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22
✖ ')' expected - start: 24, end: 25
✖ Declaration or statement expected - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 29

```

