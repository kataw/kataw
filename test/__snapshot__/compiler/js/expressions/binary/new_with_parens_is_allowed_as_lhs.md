# Kataw parser test case

## Input

`````js
new x() ** 2;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "new x() ** 2;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 66204,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "intersects": false,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 32,
                        "start": 0,
                        "end": 7
                    },
                    "operator": "**",
                    "right": {
                        "kind": 4261540,
                        "text": 2,
                        "rawText": "2",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

