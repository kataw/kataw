# Kataw parser test case

## Input

`````js
`${class x{}}`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`${class x{}}`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66261,
                "spans": [
                    {
                        "kind": 66263,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 66099,
                            "name": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 10
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 11,
                                "end": 12
                            },
                            "decorators": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 12
                    }
                ],
                "tail": {
                    "kind": 4260568,
                    "rawText": "",
                    "text": "",
                    "literal": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
    "end": 14
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

