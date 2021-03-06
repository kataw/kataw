# Kataw parser test case

## Input

`````js
const enum E {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const enum E {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 10,
                    "end": 12
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 14,
                    "end": 14
                },
                "isConst": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

