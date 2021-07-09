# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: const
## Options

`````js
{}
`````
## Input

`````js
(x = (const) = f) => {}
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "binding": {
                "kind": 151,
                "bindingList": [],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 6,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(x = (const) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 11
✖ Expected a `;` - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 14
✖ Expected a `;` - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 20

```

