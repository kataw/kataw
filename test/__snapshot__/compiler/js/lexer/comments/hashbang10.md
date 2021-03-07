# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
 #!

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " #!\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 16386,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 3
            }
        ],
        "transformFlags": 0,
        "flags": 16386,
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
            "message": "Declaration or statement expected",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 3,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

