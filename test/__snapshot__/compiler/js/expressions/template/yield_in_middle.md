# Kataw parser test case

## Input

`````js
x = `1 ${ yield } 2`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x = `1 ${ yield } 2`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "1 ",
                            "text": "1 ",
                            "expression": {
                                "kind": 196712,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 3,
                            "end": 15
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " 2",
                        "text": " 2",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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

