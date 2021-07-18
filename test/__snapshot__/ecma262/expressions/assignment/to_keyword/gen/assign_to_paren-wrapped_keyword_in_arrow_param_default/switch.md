# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: switch
## Options

`````js
{}
`````
## Input

`````js
(x = (switch) = f) => {}
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
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 17
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(x = (switch) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 12
✖ Missing an opening parentheses - '( - start: 12, end: 13
✖ The parser expected to find a '}' to match the '{' token here - start: 14, end: 15
✖ ')' is not allowed here. Did you mean ';'? - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 21

```

