# Kataw parser test case

## Input

`````js
class ViewTokensChangedEvent {
  public readonly ranges: {
    /**
     * Start line number of range
     */
    readonly fromLineNumber: number;
  }[];
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class ViewTokensChangedEvent {\n  public readonly ranges: {\n    /**\n     * Start line number of range\n     */\n    readonly fromLineNumber: number;\n  }[];\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "ViewTokensChangedEvent",
                "rawText": "ViewTokensChangedEvent",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 28
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
                            "text": "ranges",
                            "rawText": "ranges",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 55
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 536879334,
                                "objectTypeMembers": {
                                    "kind": 536871081,
                                    "members": [
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "fromLineNumber",
                                                "rawText": "fromLineNumber",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 121,
                                                "end": 136
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 137,
                                                "end": 144
                                            },
                                            "isStatic": false,
                                            "isReadOnly": true,
                                            "initializer": null,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 58,
                                            "end": 145
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 58,
                                    "end": 149
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 56,
                                "end": 149
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 56,
                            "end": 152
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 30,
                            "end": 39
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 30,
                        "end": 152
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 30,
                "end": 154
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 154
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
    "end": 154
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

