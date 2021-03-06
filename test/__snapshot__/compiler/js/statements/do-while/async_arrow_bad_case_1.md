# Kataw parser test case

## Input

`````js
do async
 () => x; while(y)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do async\n () => x; while(y)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
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
                            "start": 12,
                            "end": 12
                        },
                        "contents": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 536870912,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 27
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

