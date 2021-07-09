# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((instanceof) = f)) => {}
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
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
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
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
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "operatorToken": {
                                                    "kind": 4229173,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 30
                                                },
                                                "right": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 30
                                                },
                                                "flags": 96,
                                                "transformFlags": 5120,
                                                "start": 20,
                                                "end": 30
                                            },
                                            "flags": 19,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 31
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 35
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 19,
                                        "end": 35
                                    },
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 10,
                                "end": 36
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 37
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 40
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 43
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((instanceof) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 30
✖ Identifier expected - start: 30, end: 31

```

