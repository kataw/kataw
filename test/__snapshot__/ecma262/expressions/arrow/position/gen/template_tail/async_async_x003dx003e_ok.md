# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/template_tail
> :: test: template tail
> :: case: async async => ok
## Options

`````js
{}
`````
## Input

`````js
`a ${async async => ok} b`.length
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 22
                                },
                                "flags": 288,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 22
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "`a ${async async => ok} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
`a ${async async => ok} b`.length;
```

### Diagnostics

```javascript
✔ No errors
```

