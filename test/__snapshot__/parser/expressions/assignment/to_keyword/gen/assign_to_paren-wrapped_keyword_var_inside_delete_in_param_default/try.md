# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: try
## Input

`````js
(x = delete ((try) = f)) => {}
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 14,
                "end": 17
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "start": 17,
                "end": 17
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
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "start": 20,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(x = delete ((try) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 17
✖ Declaration or statement expected - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 20
✖ Expected a `;` - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 27

```

