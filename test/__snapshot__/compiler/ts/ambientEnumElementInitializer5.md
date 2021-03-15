# Kataw parser test case

## Input

`````js
declare enum E {
 e = -0xA
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare enum E {\n e = -0xA\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "e",
                            "rawText": "e",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 19
                        },
                        "initializer": {
                            "kind": 65774,
                            "operator": "-",
                            "operand": {
                                "kind": 4261540,
                                "text": 10,
                                "rawText": "0xA",
                                "flags": 512,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 26
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 26
            },
            "isConst": false,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

