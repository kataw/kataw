# Kataw parser test case

## Input

`````js
test
  ? (x: T): U => y
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "test",
                    "rawText": "test",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 8,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 15
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "U",
                        "rawText": "U",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 21
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 23
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "test\n  ? (x: T): U => y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 15, end: 16

```

