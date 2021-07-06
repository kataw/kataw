# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: else
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((else) = f)) => {}
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 23
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "(x = delete ((else) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 18
✖ Declaration or statement expected - start: 18, end: 19
✖ Declaration or statement expected - start: 19, end: 21
✖ Expected a `;` - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 25
✖ Declaration or statement expected - start: 25, end: 28

```

