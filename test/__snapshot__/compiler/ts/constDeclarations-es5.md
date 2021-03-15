# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
const z7 = false;
const z8: number = 23;
const z9 = 0, z10 :string = "", z11 = null;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const z7 = false;\nconst z8: number = 23;\nconst z9 = 0, z10 :string = \"\", z11 = null;",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z7",
                            "rawText": "z7",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4260391,
                            "text": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 16
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 16
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 5,
                "end": 16
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 17
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z8",
                            "rawText": "z8",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 23,
                            "end": 26
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 27,
                            "end": 34
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 23,
                            "rawText": "23",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 39
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 39
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 39
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 17,
            "end": 40
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z9",
                            "rawText": "z9",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 46,
                            "end": 49
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 53
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 53
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z10",
                            "rawText": "z10",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 54,
                            "end": 58
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 60,
                            "end": 66
                        },
                        "initializer": {
                            "kind": 4261583,
                            "text": "",
                            "rawText": "",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 71
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 71
                    },
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "z11",
                            "rawText": "z11",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 72,
                            "end": 76
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4260512,
                            "text": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 83
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 72,
                        "end": 83
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 46,
                "end": 83
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 40,
            "end": 84
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

