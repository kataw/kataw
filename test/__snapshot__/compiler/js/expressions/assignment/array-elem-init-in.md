# Kataw parser test case

## Input

`````js
result = [ x = 'x' in {} ] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = [ x = 'x' in {} ] = vals;",
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
                            "kind": 67207686,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 4261583,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 16777216,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 18
                                            },
                                            "operator": "in",
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
                                                    "start": 23,
                                                    "end": 23
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 24
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 24
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 26
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 33
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 33
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

