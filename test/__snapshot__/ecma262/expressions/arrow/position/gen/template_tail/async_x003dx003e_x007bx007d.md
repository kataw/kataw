# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/template_tail
> :: test: template tail
> :: case: async => {}
## Options

`````js
{}
`````
## Input

`````js
`a ${async => {}} b`.length
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
                "kind": 129,
                "member": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 20
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "`a ${async => {}} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
`a ${async => {}} b`.length;
```

### Diagnostics

```javascript
✔ No errors
```

