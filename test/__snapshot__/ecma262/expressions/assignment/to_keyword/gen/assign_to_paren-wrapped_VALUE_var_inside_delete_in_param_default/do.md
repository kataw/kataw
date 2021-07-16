# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: do
## Options

`````js
{}
`````
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
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 16,
                "end": 16
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 16,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 21
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(x = delete ((do) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ '; ' expected - start: 21, end: 22
✖ Declaration or statement expected - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 26

```

