# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: debugger
## Input

`````js
async (x = delete ((debugger) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 64,
                                "start": 10,
                                "end": 17
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435488,
            "start": 0,
            "end": 20
        },
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 80,
                "start": 20,
                "end": 28
            },
            "flags": 16,
            "start": 20,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 33
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 40,
                "end": 40
            },
            "flags": 16,
            "start": 38,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((debugger) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 28
✖ Expected a `;` - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 31
✖ Expected a `;` - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 38

```

