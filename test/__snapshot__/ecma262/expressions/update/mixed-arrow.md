# Kataw parser test case

## Input

`````js
--{_:()=>null}._
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
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "_",
                                        "rawText": "_",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "right": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 6
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "contents": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 3,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 13
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 2,
                        "end": 14
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "flags": 48,
                    "transformFlags": 2,
                    "start": 2,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "--{_:()=>null}._",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
-- { _: () => null }._;
```

### Diagnostics

```javascript
✔ No errors
```

