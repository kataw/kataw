# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((catch) = f)) => {}
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "flags": 19,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 20
                                    },
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 10,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 7,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 20
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "catchParameter": null,
                "block": {
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
                    "start": 25,
                    "end": 25
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 30
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 37,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((catch) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 25
✖ 'try' expected - start: 20, end: 25
✖ Declaration or statement expected - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 28
✖ Expected a `;` - start: 30, end: 31
✖ Declaration or statement expected - start: 31, end: 32
✖ Declaration or statement expected - start: 32, end: 35

```

