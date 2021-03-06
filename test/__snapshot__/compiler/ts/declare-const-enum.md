# Kataw parser test case

## Input

`````js
declare const enum E {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare const enum E {}",
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
                    "start": 18,
                    "end": 20
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 22,
                    "end": 22
                },
                "isConst": true,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 23
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

