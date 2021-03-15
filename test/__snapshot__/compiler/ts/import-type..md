# Kataw parser test case

## Input

`````js
type A = typeof import('A');
type B = import("B").X<Y>;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type A = typeof import('A');\ntype B = import(\"B\").X<Y>;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 8306,
                "isTypeOf": true,
                "argument": {
                    "kind": 8400,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 23,
                    "end": 26
                },
                "qualifier": null,
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 27
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 28
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 35
            },
            "type": {
                "kind": 8306,
                "isTypeOf": false,
                "argument": {
                    "kind": 8400,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 45,
                    "end": 48
                },
                "qualifier": {
                    "kind": 196711,
                    "text": "X",
                    "rawText": "X",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 51
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Y",
                                "rawText": "Y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 53
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 52,
                            "end": 54
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 52,
                    "end": 53
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 37,
                "end": 54
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 28,
            "end": 55
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
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

