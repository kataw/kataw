# Kataw parser test case

## Input

`````js
result = { arrow = () => {} } = {}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = { arrow = () => {} } = {}",
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
                                        "kind": 65597,
                                        "left": {
                                            "kind": 196712,
                                            "text": "arrow",
                                            "rawText": "arrow",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "isOptional": false,
                                        "exclamation": false,
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
                                                "start": 18,
                                                "end": 18
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
                                                    "start": 26,
                                                    "end": 26
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 536870912,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 27
                                        },
                                        "accessModifier": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 10,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 27
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 29
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
                                "start": 33,
                                "end": 33
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 34
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 34
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

