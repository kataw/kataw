# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: return
## Input

`````js
(x = (return) = f) => {}
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
                    "start": 0,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 6,
                "end": 12
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(x = (return) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
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
✖ A return statement can only be used within a function_body - start: 6, end: 12
✖ Identifier expected - start: 12, end: 13
✖ Declaration or statement expected - start: 13, end: 15
✖ Expected a `;` - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 21

```

