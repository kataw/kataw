# Kataw parser test case

## Input

`````js
result = { x: arrow = () => {} } = {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = { x: arrow = () => {} } = {};",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 65550,
                                            "left": {
                                                "kind": 196712,
                                                "text": "arrow",
                                                "rawText": "arrow",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 19
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 67592,
                                                "typeParameters": null,
                                                "arrowParameters": {
                                                    "kind": 65545,
                                                    "elements": [],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 21
                                                },
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 29
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 30
                                                },
                                                "flags": 536870912,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 30
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 30
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 30
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 32
                        },
                        "operator": "=",
                        "right": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 37
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 37
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 38
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 38
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

