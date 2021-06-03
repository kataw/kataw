# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: do
## Input

`````js
(x = delete ((do) = f)) => {}
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
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 14,
                "end": 16
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 16,
                "end": 16
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "start": 16,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "start": 19,
            "end": 21
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 28,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(x = delete ((do) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 16
✖ Identifier expected - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 19
✖ Expected a `;` - start: 21, end: 22
✖ Declaration or statement expected - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 26

```

