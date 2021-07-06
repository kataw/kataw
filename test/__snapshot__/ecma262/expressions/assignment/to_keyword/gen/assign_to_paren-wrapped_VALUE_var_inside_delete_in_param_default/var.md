# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: var
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((var) = f)) => {}
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
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "flags": 16,
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
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(x = delete ((var) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ Expected a `;` - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 20
✖ Expected a `;` - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 24
✖ Declaration or statement expected - start: 24, end: 27

```

