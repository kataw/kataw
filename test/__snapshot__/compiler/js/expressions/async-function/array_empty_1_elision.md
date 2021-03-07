# Kataw parser test case

## Input

`````js
[,]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[,]",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 138477738,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 1
                            }
                        ],
                        "trailingComma": true,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 3
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

