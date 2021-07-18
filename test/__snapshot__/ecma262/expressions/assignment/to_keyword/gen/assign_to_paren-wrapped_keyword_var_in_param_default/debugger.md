# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: debugger
## Options

`````js
{}
`````
## Input

`````js
(x = (debugger) = f) => {}
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
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6,
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
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 19
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(x = (debugger) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 14
✖ ')' is not allowed here. Did you mean ';'? - start: 14, end: 15
✖ Declaration or statement expected - start: 15, end: 17
✖ ')' is not allowed here. Did you mean ';'? - start: 19, end: 20
✖ Declaration or statement expected - start: 20, end: 23

```

