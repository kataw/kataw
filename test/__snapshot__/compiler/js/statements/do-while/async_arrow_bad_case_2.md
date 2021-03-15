# Kataw parser test case

## Input

`````js
do async ()
 => x; while(y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do async ()\n => x; while(y)",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 196712,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 81936,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 81929,
                        "elements": [],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
                    "contents": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
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

