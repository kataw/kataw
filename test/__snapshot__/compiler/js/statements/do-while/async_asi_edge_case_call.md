# Kataw parser test case

## Input

`````js
do async
 ()
 while (y)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do async\n ()\n while (y)",
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
                    "start": 21,
                    "end": 22
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 66091,
                        "expression": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 16384,
                            "intersects": false,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

