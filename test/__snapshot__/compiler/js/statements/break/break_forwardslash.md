# Kataw parser test case

## Input

`````js
for(x of 3)break/
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for(x of 3)break/",
    "filename": "",
    "statements": [
        {
            "kind": 2099287,
            "initializer": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "expression": {
                "kind": 4261540,
                "text": 3,
                "rawText": "3",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 2097193,
                "label": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 1048577,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 16
            },
            "isAwait": false,
            "flags": 1048577,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/",
                "flags": 1048577,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 18,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 16,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

