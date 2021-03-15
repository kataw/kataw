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
                    "kind": 1073807915,
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
                        "flags": 32768,
                        "intersects": false,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32768,
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
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

