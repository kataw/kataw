# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: debugger
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((debugger) = f)) => {}
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
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "transformFlags": 0,
                "start": 14,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 27
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(x = delete ((debugger) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 22
✖ ')' is not allowed here. Did you mean ';'? - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 25
✖ ')' is not allowed here. Did you mean ';'? - start: 27, end: 28
✖ Declaration or statement expected - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 32

```

