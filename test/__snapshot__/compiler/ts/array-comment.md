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
    "kind": 196,
    "source": "class ViewTokensChangedEvent {\n  public readonly ranges: {\n    /**\n     * Start line number of range\n     */\n    readonly fromLineNumber: number;\n  }[];\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "ViewTokensChangedEvent",
                    "rawText": "ViewTokensChangedEvent",
                    "flags": 0,
                    "intersects": false,
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
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "ranges",
                                "rawText": "ranges",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 55
                            },
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8422,
                                    "objectTypeMembers": {
                                        "kind": 169,
                                        "members": [
                                            {
                                                "kind": 8380,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "fromLineNumber",
                                                    "rawText": "fromLineNumber",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 121,
                                                    "end": 136
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 4202657,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 137,
                                                    "end": 144
                                                },
                                                "isStatic": false,
                                                "isReadOnly": true,
                                                "initializer": null,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 58,
                                                "end": 145
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 58,
                                        "end": 149
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 56,
                                    "end": 149
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 56,
                                "end": 152
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 30,
                                "end": 39
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 30,
                            "end": 152
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 30,
                    "end": 154
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 154
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 154
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

