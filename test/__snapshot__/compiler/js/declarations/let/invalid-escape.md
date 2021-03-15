# Kataw parser test case

## Input

`````js

le\u0074 x = 5
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nle\\u0074 x = 5",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 9,
                            "end": 11
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 5,
                            "rawText": "5",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 15
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "flags": 75530248,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 15
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
    "end": 15
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

