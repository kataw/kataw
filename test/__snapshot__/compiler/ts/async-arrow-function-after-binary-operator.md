# Kataw parser test case

## Input

`````js
4 + async<number>() => 2
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "4 + async<number>() => 2",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 4261540,
                        "text": 4,
                        "rawText": "4",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "+",
                    "right": {
                        "kind": 65552,
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
                            "start": 17,
                            "end": 17
                        },
                        "contents": {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 536870912,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

