# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/template_tail
> :: test: template tail
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
`a ${async x => {}} b`.length
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 288,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 18
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " b",
                        "rawText": " b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "`a ${async x => {}} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

`a ${async x => {}} b`.length;
```

### Diagnostics

```javascript
✔ No errors
```

