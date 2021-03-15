# Kataw parser test case

## Input

`````js
(class X { a; })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class X { a; })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "X",
                        "rawText": "X",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [
                            {
                                "kind": 16468,
                                "key": {
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "isInKeyword": false,
                                "expression": null,
                                "isAbstract": false,
                                "isReadOnly": false,
                                "isOptional": false,
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isStatic": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 524352,
                                "start": 10,
                                "end": 13
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 10,
                        "end": 15
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
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
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

