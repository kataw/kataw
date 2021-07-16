# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
(x = (in) = f) => {}
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "transformFlags": 8192,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "flags": 4,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 4,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 0,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(x = (in) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 8
✖ Identifier expected - start: 8, end: 9

```

