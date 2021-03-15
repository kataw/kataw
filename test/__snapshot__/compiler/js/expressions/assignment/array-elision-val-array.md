# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
result = [,] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = [,] = vals;",
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
                                        "kind": 138477738,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": true,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

