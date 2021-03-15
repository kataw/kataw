# Kataw parser test case

## Input

`````js

enum E {
    A = 0,
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nenum E {\n    A = 0,\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 9,
                        "end": 19
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 9,
                "end": 20
            },
            "isConst": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

