# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
y.)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "y.)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66232,
                    "member": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2,
                    "period": {
                        "kind": 254,
                        "pos": 1,
                        "end": 2
                    }
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 3
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 2,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

