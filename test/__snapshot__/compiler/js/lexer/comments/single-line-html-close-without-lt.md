# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
;-->
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": ";-->",
    "filename": "",
    "statements": [
        {
            "kind": 6291526,
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65715,
                    "operator": "--",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "operator": ">",
                "right": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 4
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1,
            "end": 4
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 3,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

