# Kataw parser test case

## Input

`````js

var x;

x
=
true;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nvar x;\n\nx\n=\ntrue;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 4,
                            "end": 6
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 4,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "operator": "=",
                "right": {
                    "kind": 4260391,
                    "text": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 17
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 7,
            "end": 18
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
    "end": 18
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

